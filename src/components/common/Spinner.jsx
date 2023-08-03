import './styles/Spinner.css';


export default function Spinner({size = '20px', ...restProps}) {
  return (
    <div class="dot-spinner" style={{ width: size, height: size  }} {...restProps}>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
    </div>
  );
};
