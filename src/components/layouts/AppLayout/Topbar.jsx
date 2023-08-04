import { FaMoon, FaGasPump } from "../../common/Icons";
import TopbarData from "./TopbarData";
import Button from "../../common/Button";
import './styles/Topbar.css';


export default function Topbar() {
  return (
    <div id="Topbar">
      <div id="topbar-left-ctr">
        <TopbarData value='1.8M+'>Cryptos</TopbarData>
        <TopbarData value='651'>Exchanges</TopbarData>
        <TopbarData pct={0.53} value='$1.18T'>Market Cap</TopbarData>
        <TopbarData pct={-12.68} value='$26.46B'>24h Vol</TopbarData>
        <TopbarData value='BTC: 48.1% ETH: 19.1%'>Dominance</TopbarData>
        <TopbarData value='45 Gwei'>
          <FaGasPump size={15} style={{marginBottom:'2px'}}/> ETH Gas
        </TopbarData>
        <TopbarData value='51/100'>Fear & Greed</TopbarData>
      </div>
      <div id="topbar-right-ctr">
        <div id="display-settings">
          <FaMoon />
        </div>
        <span id="small-divider" />
        <div id="logIn-signUp-ctr">
          <Button id="logIn" className='white-btn' style={{ border: 'solid 1px var(--bg-blue)' }}>Log In</Button>
          <Button id="signUp" className='blue-btn'>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
