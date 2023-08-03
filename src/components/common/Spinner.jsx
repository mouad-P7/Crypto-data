import './styles/Spinner.css';


export default function Spinner({size = '20px', ...restProps}) {
  return (
    <div className="dot-spinner" style={{width: size, height: size }} {...restProps}>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
      <div className="dot-spinner__dot"></div>
    </div>
  );
};
