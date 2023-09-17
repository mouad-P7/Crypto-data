import { FaGasPump } from "@ui/common/Icons";
import GeneralData from "./GeneralData";
import DarkLightMode from "@ui/common/DarkLightMode";
import Button from "@ui/common/Button";


export default function Topbar() {
  return (
    <div className="p-2 flex items-center justify-between gap-4">
      <div className="flex-1 flex gap-3 overflow-x-hidden whitespace-nowrap">
        <GeneralData value='1.8M+'>Cryptos</GeneralData>
        <GeneralData value='651'>Exchanges</GeneralData>
        <GeneralData pct={0.53} value='$1.18T'>Market Cap</GeneralData>
        <GeneralData pct={-12.68} value='$26.46B'>24h Vol</GeneralData>
        <GeneralData value='BTC: 48.1% ETH: 19.1%'>Dominance</GeneralData>
        <GeneralData value='45 Gwei'>
          <FaGasPump size={15} className="mb-[2px]"/>ETH Gas
        </GeneralData>
        <GeneralData value='51/100'>Fear & Greed</GeneralData>
      </div>
      <div className=" justify-end items-center flex lg:hidden">
        <DarkLightMode />
      </div>
      <div className=" justify-end items-center hidden lg:flex">
        <DarkLightMode />
        <span className="h-5 w-[1.5px] mx-[10px] bg-gray" />
        <div className="flex gap-[10px]">
          <Button btn="white" disabled>Log In</Button>
          <Button btn="blue" disabled>Sign Up</Button>
        </div>
      </div>
    </div>
  );
};
