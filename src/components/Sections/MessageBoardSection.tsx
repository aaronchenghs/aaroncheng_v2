import { useEffect, useState } from 'react';
import { Section } from './Section';
import { onAuthStateChanged, type User } from 'firebase/auth';
import {
  auth,
  createFeedbackDocument,
  createUserDocumentFromAuth,
  formatFeedbackDate,
  getFeedbackStream,
  signInWithGooglePopup,
  type FeedbackDTO,
} from '../../lib/firebase';
import './styles/messageBoardSection.css';

const styles = {
  container: 'flex flex-col items-center gap-8',
  signInButton:
    'inline-flex items-center justify-center rounded-full border border-white/15 ' +
    'bg-neutral-900/80 px-4 py-2 text-xs font-semibold text-neutral-50 shadow-sm ' +
    'transition hover:border-white/40 hover:bg-neutral-800',
  form: 'w-full max-w-xl space-y-4',
  label: 'flex flex-col gap-1 text-xs font-medium text-neutral-300',
  input:
    'rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2 text-sm text-neutral-50 ' +
    'placeholder:text-neutral-500 outline-none focus:border-emerald-400 ' +
    'focus:ring-1 focus:ring-emerald-400',
  textarea:
    'min-h-[120px] rounded-xl border border-white/10 bg-neutral-900/70 px-3 py-2 text-sm ' +
    'text-neutral-50 placeholder:text-neutral-500 outline-none focus:border-emerald-400 ' +
    'focus:ring-1 focus:ring-emerald-400',
  submit:
    'inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-semibold ' +
    'text-neutral-900 shadow-lg shadow-white/20 transition hover:bg-neutral-100 ' +
    'disabled:cursor-not-allowed disabled:opacity-60',

  listWrapper: 'w-full max-w-3xl space-y-4',
  list: 'mt-6 w-full space-y-3 text-sm text-neutral-200',
  item: 'rounded-2xl border border-white/5 bg-neutral-900/60 px-4 py-3 text-xs text-neutral-200',
  meta:
    'mb-1 flex items-center justify-between text-[0.7rem] uppercase ' +
    'tracking-wide text-neutral-400',
  name: 'font-semibold',
  date: 'text-neutral-500',
} as const;

export function MessageBoardSection() {
  const [user, setUser] = useState<User | null>(null);
  const [messages, setMessages] = useState<FeedbackDTO[]>([]);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleSignIn = async () => {
    const result = await signInWithGooglePopup();
    await createUserDocumentFromAuth(result.user);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    if (!body.trim()) return;
    if (!name.trim() && !user?.displayName) return;
    setIsSubmitting(true);

    try {
      const finalName = name.trim() || user?.displayName || 'Anonymous';

      await createFeedbackDocument(finalName, body.trim());
      const data = await getFeedbackStream();
      setMessages(data);
      setBody('');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (userAuth) => {
      setUser(userAuth);
    });
    return unsub;
  }, []);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      const data = await getFeedbackStream();
      setMessages(data);
      setIsLoading(false);
    };
    load();
  }, []);

  return (
    <Section
      id="message-board"
      label="Message Board"
      title="Leave a Note"
      kicker="Sign in with Google to post, and read notes from other visitors!"
    >
      <div className={styles.container}>
        {!user ? (
          <div className="google-border-animate inline-flex rounded-full p-[1px]">
            <button
              type="button"
              onClick={handleSignIn}
              className={`${styles.signInButton} relative z-10`}
            >
              Sign in with Google to leave feedback
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <label className={styles.label}>
              Name
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={'Your name'}
                className={styles.input}
              />
            </label>

            <label className={styles.label}>
              Message
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className={styles.textarea}
                placeholder="Let me know something!"
              />
            </label>

            <button type="submit" className={styles.submit} disabled={isSubmitting || !body.trim()}>
              {isSubmitting ? 'Posting…' : 'Post message'}
            </button>
          </form>
        )}

        <div className={styles.listWrapper}>
          {(isLoading || messages.length === 0) && (
            <p className="text-xs text-neutral-500">
              {isLoading ? 'Loading messages…' : 'No messages yet. Be the first.'}
            </p>
          )}

          {!isLoading && messages.length > 0 && (
            <ul className={styles.list}>
              {messages.map((msg) => (
                <li key={msg.id} className={styles.item}>
                  <div className={styles.meta}>
                    <span className={styles.name}>{msg.name || 'Anonymous'}</span>
                    <span className={styles.date}>{formatFeedbackDate(msg.date)}</span>
                  </div>
                  <p>{msg.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Section>
  );
}
