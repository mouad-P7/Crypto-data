import { useState } from "react";
import Hero from "../../common/Hero";
import HighlightCard from "./HighlightCard";
import { FaCircleInfo } from "react-icons/fa6";
import './styles/Home.css';


export default function Home() {
  const [showHighlights, setShowHighlights] = useState(false);


  function handleToggleSwitch(){
    setShowHighlights(prevState => !prevState);
  };


  return (
    <div id="Home" style={{ padding: '15px' }}>
      <div id="home-hero-ctr">
        <Hero 
          title="Today's Cryptocurrency Prices by Market Cap"
          firstLine={<p style={{ display: 'inline' }}>The global crypto market cap is <strong>$1.18T</strong>, a 0.22% decrease over the last day.</p>}  
        >
          <p>The total crypto market volume over the last 24 hours is <strong>$24.18B</strong>, which makes a 35.96% increase. The total volume in DeFi is currently <strong>$2.26B</strong>, <strong>9.33%</strong> of the total crypto market 24-hour volume. The volume of all stable coins is now <strong>$20.97B</strong>, which is <strong>86.73%</strong> of the total crypto market 24-hour volume.</p>
          <p>Bitcoin’s dominance is currently <strong>48.19%</strong>, an increase of 0.16% over the day.</p>
        </Hero>
        <div className='toggle-ctr'>
          <label htmlFor="hero-toggle" style={{ userSelect: 'none' }}>Highlights</label>
          <input id='hero-toggle' className="switch" type="checkbox" checked={showHighlights} onChange={handleToggleSwitch} />
        </div>
      </div>
      {
        showHighlights &&
        <div id="hightlights-ctr">
          <HighlightCard title='🔥 Trending' link='trending'/>
          <HighlightCard title='⭐ Top Community Accounts' link='community'/>
          <HighlightCard title={<><p>Fear & Greed Index</p><FaCircleInfo /></>} />
        </div>
      }
    </div>
  );
};
