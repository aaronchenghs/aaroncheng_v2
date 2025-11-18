import { Section } from './Section';

export function AboutSection() {
  return (
    <Section
      id="about"
      label="About"
      title="Who I Am"
      kicker="Software developer, LSU grad, builder of web and desktop tools"
    >
      <p>
        I’m a Baton Rouge–based engineer who loves making things. I work primarily with TypeScript,
        React and .NET, shipping production‑ready apps with high emphasis on reliability and polish.
        Outside of work, I dive into motion‑heavy UIs, small SaaS‑y ideas and ways to merge
        technology with my interests in law and policy.
      </p>
      <p className="mt-4">
        This site is the laboratory for my experiments and the place where my finished projects
        live. Take a look around—you’ll find certs, apps, and perhaps a few fun surprises.
      </p>
    </Section>
  );
}
