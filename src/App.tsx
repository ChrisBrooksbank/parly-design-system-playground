import { Button, Card, Hero, Navigation, Notice, Tag } from './design-system';
import './App.css';

const navigationLinks = [
  { label: 'Foundations', href: '#foundations' },
  { label: 'Components', href: '#components' },
  { label: 'Patterns', href: '#patterns' },
  { label: 'Resources', href: '#resources' },
];

const sessions = [
  {
    title: 'Question Time guidance',
    description:
      'Learn how to structure parliamentary questions with the latest content design guidance, accessible form elements and tone of voice.',
  },
  {
    title: 'Committee callouts',
    description:
      'Bring clarity to complex processes with the callout and hero components, using colour and typography effectively.',
  },
  {
    title: 'Navigation workshops',
    description:
      'Explore responsive navigation patterns and make it easier for members to discover the information they need.',
  },
];

function App() {
  return (
    <main>
      <Navigation
        title="Parliament design playground"
        links={navigationLinks}
        cta={<Button size="small">Design tokens</Button>}
      />
      <Hero
        kicker="Experiment"
        title="Build experiences that feel distinctly Parliament"
        description="Spin up prototypes, explore components and test design tokens that mirror the Parliament Design System. Adjust properties in Storybook and drop them straight into your service."
        actions={
          <>
            <Button>Launch Storybook</Button>
            <Button variant="tertiary">View documentation</Button>
          </>
        }
      />
      <div className="pds-shell">
        <section className="pds-section" id="foundations">
          <div className="pds-section__header">
            <Tag tone="info">Design tokens</Tag>
            <h2>Foundational styles</h2>
            <p>
              Tokens mirror the palette, typography and spacing rules published by the Parliamentary Digital Service. Adjusting
              them in one place updates every component in the playground.
            </p>
          </div>
          <div className="pds-token-grid">
            <dl>
              <dt>Brand blue</dt>
              <dd>#0B4884</dd>
              <dt>Brand teal</dt>
              <dd>#007F7B</dd>
              <dt>Brand plum</dt>
              <dd>#5A2A83</dd>
              <dt>Accent gold</dt>
              <dd>#FBC93D</dd>
            </dl>
            <dl>
              <dt>Heading typeface</dt>
              <dd>Source Serif 4</dd>
              <dt>Body typeface</dt>
              <dd>Source Sans 3</dd>
              <dt>Line height</dt>
              <dd>1.5</dd>
              <dt>Radius</dt>
              <dd>4px</dd>
            </dl>
          </div>
        </section>
        <section className="pds-section" id="components">
          <div className="pds-section__header">
            <Tag tone="success">Component spotlight</Tag>
            <h2>Prototype journeys faster</h2>
            <p>
              Use the card, notice and navigation components together to replicate realistic user journeys before committing to a
              build.
            </p>
          </div>
          <div className="pds-card-grid">
            {sessions.map((session) => (
              <Card key={session.title} title={session.title} description={session.description} href="#">
                <Button variant="ghost">Open in Storybook</Button>
              </Card>
            ))}
          </div>
        </section>
        <section className="pds-section" id="patterns">
          <div className="pds-section__header">
            <Tag tone="warning">Pattern lab</Tag>
            <h2>Test guidance in context</h2>
            <Notice
              title="House business notice"
              tone="info"
              action={<Button size="small">Read pattern guidance</Button>}
            >
              Combine notices with hero layouts to keep members up to date with schedule changes and committee activity. Use tone
              and actions to communicate urgency.
            </Notice>
          </div>
        </section>
        <section className="pds-section" id="resources">
          <div className="pds-section__header">
            <Tag>Resources</Tag>
            <h2>Bring it into your workflow</h2>
            <p>
              The playground ships with Storybook for interactive controls, a Vite dev server for rapid prototyping and guidance
              on how to wire the official Parliament packages once available inside your network.
            </p>
            <div className="pds-resource-actions">
              <Button variant="secondary">View setup guide</Button>
              <Button variant="ghost">Read contribution model</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
