import Pct from '../../common/Pct';
import './styles/TopbarData.css';


export default function TopbarData({children, value, pct, ...restProps}){
  return (
    <small className='TopbarData' {...restProps}>
      <span>{children}:</span>
      <span style={{ color: 'var(--text-blue)' }}>{value}</span>
      <Pct pct={pct} />
    </small>
  );
};
