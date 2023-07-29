import './styles/Button.css';


export default function Button({children, ...restProps}){
  return (
    <button {...restProps}>
      {children}
    </button>
  );
};