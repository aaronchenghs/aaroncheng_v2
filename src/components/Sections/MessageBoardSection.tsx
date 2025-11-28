import { useEffect, useState, type FormEventHandler } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { Section } from './Section';
import {
  auth,
  createFeedbackDocument,
  createUserDocumentFromAuth,
  formatFeedbackDate,
  getFeedbackStream,
  signInWithGooglePopup,
  type FeedbackDTO,
} from '../../lib/firebase';
import { SECTION_SELECTORS } from '../../lib/sectionSelectors';
import './styles/messageBoardSection.css';

const styles = {
  container: 'flex flex-col items-center gap-8',
  signInWrapper: 'google-border-animate inline-flex rounded-full p-[1px]',
  signInButton:
    'relative z-10 inline-flex items-center justify-center rounded-full border border-white/15 ' +
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
    'inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide ' +
    'transition duration-200 focus-visible:outline-none focus-visible:ring-2 ' +
    'focus-visible:ring-offset-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-neutral-950 ' +
    'enabled:bg-gradient-to-r enabled:from-emerald-400 enabled:via-emerald-300 enabled:to-sky-400 ' +
    'enabled:text-neutral-900 enabled:shadow-[0_0_25px_rgba(34,197,94,0.6)] ' +
    'enabled:hover:shadow-[0_0_40px_rgba(56,189,248,0.9)] enabled:hover:-translate-y-[1px] ' +
    'enabled:active:translate-y-0 enabled:active:scale-[0.98] ' +
    'disabled:bg-neutral-800 disabled:text-neutral-500 disabled:border disabled:border-neutral-700 ' +
    'disabled:shadow-inner disabled:shadow-black/40 disabled:cursor-not-allowed disabled:opacity-70',
  listWrapper: 'w-full max-w-4xl space-y-4',
  list: 'mt-6 w-full space-y-3 text-sm text-neutral-200',
  item:
    'rounded-2xl border border-white/5 bg-neutral-900/60 px-4 py-3 text-xs text-neutral-200 ' +
    'transition hover:border-emerald-400',
  meta:
    'mb-1 flex items-center justify-between text-[0.7rem] uppercase ' +
    'tracking-wide text-neutral-400',
  name: 'font-semibold',
  date: 'text-neutral-500',
  emptyStateText: 'text-xs text-neutral-500',
} as const;

type MessageBoardState = {
  user: User | null;
  messages: FeedbackDTO[];
  name: string;
  body: string;
  isSubmitting: boolean;
  isLoading: boolean;
  setName: (value: string) => void;
  setBody: (value: string) => void;
  handleSignIn: () => Promise<void>;
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

function useMessageBoardState(): MessageBoardState {
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
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

  return {
    user,
    messages,
    name,
    body,
    isSubmitting,
    isLoading,
    setName,
    setBody,
    handleSignIn,
    handleSubmit,
  };
}

type SignInPromptProps = {
  onSignIn: () => Promise<void>;
};

function SignInPrompt({ onSignIn }: SignInPromptProps) {
  return (
    <motion.div
      key="signin"
      variants={MOTION_VARIANTS.container}
      initial="initial"
      animate="animate"
      exit="exit"
      className={styles.signInWrapper}
    >
      <motion.button
        type="button"
        onClick={onSignIn}
        className={styles.signInButton}
        variants={MOTION_VARIANTS.button}
      >
        Sign in with Google to post a message
      </motion.button>
    </motion.div>
  );
}

type MessageFormProps = {
  name: string;
  body: string;
  isSubmitting: boolean;
  onNameChange: (value: string) => void;
  onBodyChange: (value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
};

function MessageForm({
  name,
  body,
  isSubmitting,
  onNameChange,
  onBodyChange,
  onSubmit,
}: MessageFormProps) {
  return (
    <motion.form
      key="form"
      onSubmit={onSubmit}
      className={styles.form}
      variants={MOTION_VARIANTS.container}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.label className={styles.label} variants={MOTION_VARIANTS.field}>
        Name
        <input
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          placeholder="Your name"
          className={styles.input}
        />
      </motion.label>

      <motion.label className={styles.label} variants={MOTION_VARIANTS.field}>
        Message
        <textarea
          value={body}
          onChange={(e) => onBodyChange(e.target.value)}
          className={styles.textarea}
          placeholder="Let me know something!"
        />
      </motion.label>

      <motion.button
        type="submit"
        className={styles.submit}
        disabled={isSubmitting || !body.trim()}
        variants={MOTION_VARIANTS.button}
      >
        {isSubmitting ? 'Posting…' : 'Post message'}
      </motion.button>
    </motion.form>
  );
}

export function MessageBoardSection() {
  const {
    user,
    messages,
    name,
    body,
    isSubmitting,
    isLoading,
    setName,
    setBody,
    handleSignIn,
    handleSubmit,
  } = useMessageBoardState();

  return (
    <Section
      id={SECTION_SELECTORS.MESSAGE_BOARD}
      label="Message Board"
      title="Leave a Note!"
      kicker="Sign in with Google to post, and read notes from other visitors!"
    >
      <div className={styles.container}>
        <AnimatePresence mode="wait">
          {!user ? (
            <SignInPrompt key="signin-block" onSignIn={handleSignIn} />
          ) : (
            <MessageForm
              key="form-block"
              name={name}
              body={body}
              isSubmitting={isSubmitting}
              onNameChange={setName}
              onBodyChange={setBody}
              onSubmit={handleSubmit}
            />
          )}
        </AnimatePresence>

        <div className={styles.listWrapper}>
          {(isLoading || messages.length === 0) && (
            <p className={styles.emptyStateText}>
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

const MOTION_VARIANTS = {
  container: {
    initial: { opacity: 0, y: 12, scale: 0.98 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: { duration: 0.25, ease: 'easeIn' },
    },
  },
  field: {
    initial: { opacity: 0, y: 8 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  },
  button: {
    initial: { opacity: 0, y: 10, scale: 0.96 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  },
} as const;
