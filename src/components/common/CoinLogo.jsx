export default function CoinLogo({symbol = "", size = 24, ...restProps}) {
  const imgSrc = symbol ? `./icons/${symbol}.png` : './assets/bubble-loading-svg';


  return (
    <div style={{ width: size, height: size }} {...restProps}>
      <img className="bg-img" src={imgSrc} alt="coin"/>
    </div>
  );
};
