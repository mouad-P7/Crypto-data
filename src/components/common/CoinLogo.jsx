export default function CoinLogo({symbol = "", size = 24, ...restProps}) {
  const imgSrc = symbol ? `./coins-logo/${symbol}.png` : '';


  return (
    <div style={{ width: size, height: size }} {...restProps}>
      <img className="bg-img" src={imgSrc} alt="coin"/>
    </div>
  );
};
