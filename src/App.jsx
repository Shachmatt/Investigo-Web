import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import Problem from './components/Problem.jsx';
import Solution from './components/Solution.jsx';
import StockDivider from './components/StockDivider.jsx';
import Stats from './components/Stats.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Impact from './components/Impact.jsx';
import About from './components/About.jsx';
import Countdown from './components/Countdown.jsx';
import Footer from './components/Footer.jsx';

const DISCORD_URL = 'https://discord.gg/etbbjD9yqp';

export default function App() {
  return (
    <div className="relative overflow-hidden">
      <Nav discordUrl={DISCORD_URL} />
      <main>
        <Hero discordUrl={DISCORD_URL} />
        <Ticker />
        <Problem />
        <Solution />
        <Stats />
        <StockDivider />
        <HowItWorks />
        <Impact />
        <Countdown />
        <StockDivider flip />
        <About />
      </main>
      <Footer discordUrl={DISCORD_URL} />
    </div>
  );
}
