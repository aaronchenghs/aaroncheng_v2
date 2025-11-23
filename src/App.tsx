import './App.css';
import { AboutSection } from './components/Sections/AboutSection';
import { ContactSection } from './components/Sections/ContactSection';
import { MessageBoardSection } from './components/Sections/MessageBoardSection';
import { PortfolioSection } from './components/Sections/PortfolioSection';
import { TimelineSection } from './components/Sections/TimelineSection';
import { Layout } from './Layout';

function App() {
  return (
    <Layout>
      <AboutSection />
      <TimelineSection />
      <PortfolioSection />
      <ContactSection />
      <MessageBoardSection />
    </Layout>
  );
}

export default App;
