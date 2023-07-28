import { FaMoon, FaGasPump } from "react-icons/fa6";
import './styles/Topbar.css';


export default function Topbar() {
  return (
    <div id="Topbar">
      <div id="topbar-right-ctr">
        <TopbarData>Cryptos: 1.8M+</TopbarData>
        <TopbarData>Exchanges: 651</TopbarData>
        <TopbarData pct={0.53} value='$1.18T'>Market Cap</TopbarData>
        <TopbarData pct={-12.68} value='$26.46B'>24h Vol</TopbarData>
        <TopbarData value='BTC: 48.1% ETH: 19.1%'>Dominance</TopbarData>
        <TopbarData value='45 Gwei'><FaGasPump /> ETH Gas</TopbarData>
        <TopbarData value='51/100'>Fear & Greed</TopbarData>
      </div>
      <div id="topbar-left-ctr">
        <div id="display-settings">
          <FaMoon />
        </div>
        <span id="small-divider" />
        <div id="logIn-signUp-ctr">
          <button id="logIn">Log In</button>
          <button id="signUp"> Sign Up</button>
        </div>
      </div>
    </div>
  );
};
