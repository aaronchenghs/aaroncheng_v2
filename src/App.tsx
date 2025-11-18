import './App.css';
import { AboutSection } from './components/Sections/AboutSection';
import { ContactSection } from './components/Sections/ContactSection';
import { MessageBoardSection } from './components/Sections/MessageBoardSection';
import { PortfolioSection } from './components/Sections/PortfolioSection';
import { Layout } from './Layout';

function App() {
  return (
    <Layout>
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
      <MessageBoardSection />
    </Layout>
  );
}

export default App;
