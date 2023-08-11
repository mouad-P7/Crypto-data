import './styles/Spinner.css';


export default function Spinner({size = '20px', ...restProps}) {
  return (
    <svg className='spinner' viewBox="25 25 50 50" style={{width: size }} {...restProps}>
      <circle r="20" cy="50" cx="50"></circle>
    </svg>
  );
};
