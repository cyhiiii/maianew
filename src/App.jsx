import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import WinterSun from './components/WinterSun/WinterSun';
import SeasonalExperiences from './components/SeasonalExperiences/SeasonalExperiences';
import ExpressionsOfSeason from './components/ExpressionsOfSeason/ExpressionsOfSeason';
import Footer from './components/Footer/Footer';
import { heroData, winterSunData, seasonalExperiencesData, expressionsData, footerData } from './constants/data';
import './styles/global.scss';

function App() {

  return (
    <>
      <Header />
      
      <main id="main-content" role="main">
        <Hero {...heroData} />
        <WinterSun {...winterSunData} />
        <SeasonalExperiences {...seasonalExperiencesData} />
        <ExpressionsOfSeason {...expressionsData} />
      </main>
      
      <Footer {...footerData} />
    </>
  );
}

export default App;
