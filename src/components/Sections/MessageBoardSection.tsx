import { useState } from 'react';
import { Section } from './Section';

const styles = {
  form: 'space-y-4 max-w-xl',
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
    'text-neutral-900 shadow-lg shadow-white/20 transition hover:bg-neutral-100',
  list: 'mt-8 space-y-3 text-sm text-neutral-200',
  item: 'rounded-2xl border border-white/5 bg-neutral-900/60 px-4 py-3 text-xs text-neutral-200',
  author: 'mb-1 text-[0.7rem] font-semibold uppercase tracking-wide text-neutral-400',
} as const;

type Message = {
  id: number;
  name: string;
  body: string;
};

export function MessageBoardSection() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!body.trim()) return;
    setMessages((prev) => [
      { id: Date.now(), name: name.trim() || 'Anonymous', body: body.trim() },
      ...prev,
    ]);
    setBody('');
    setName('');
  };

  return (
    <Section
      id="message-board"
      label="Message Board"
      title="Leave a Note"
      kicker="Drop a message; this board is local‑state only and refreshes per session"
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Name <span className="text-neutral-500">(optional)</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
            placeholder="Who are you?"
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
        <button type="submit" className={styles.submit}>
          Post message
        </button>
      </form>

      {messages.length > 0 && (
        <ul className={styles.list}>
          {messages.map((message) => (
            <li key={message.id} className={styles.item}>
              <div className={styles.author}>{message.name}</div>
              <p>{message.body}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
