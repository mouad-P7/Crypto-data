import { FaCaretDown, FaCaretUp } from "react-icons/fa6";
import { removePlusOrMinus } from '../../../utils/functions';
import './styles/TopbarData.css';


export default function TopbarData({children, value, pct, ...restProps}){
  let pctColor = '', caretIcon = <></>;
  if(pct >= 0){
    pctColor = 'var(--text-green)';
    caretIcon = <FaCaretDown color="inherit"/>
  }else{
    pctColor = 'var(--text-red)';
    caretIcon = <FaCaretUp color="inherit"/>
  }


  return (
    <small className='TopbarData' {...restProps}>
      <span>{children}:</span>
      <span style={{ color: 'var(--text-blue)' }}>{value}</span>
      {
        pct 
        ? <span className="pct-ctr" style={{ color: pctColor }}>
            {caretIcon}{removePlusOrMinus(pct)}%
          </span> 
        : null
      }
    </small>
  );
};
