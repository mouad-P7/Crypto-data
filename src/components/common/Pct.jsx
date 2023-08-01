import { removePlusOrMinus } from '../../utils/functions';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";


export default function Pct({pct, ...restProps}) {
  let pctColor = '', caretIcon = <></>;
  if(pct >= 0){
    pctColor = 'var(--text-green)';
    caretIcon = <FaCaretUp color="inherit"/>
  }else{
    pctColor = 'var(--text-red)';
    caretIcon = <FaCaretDown color="inherit"/>
  }
  const pctCtrStyle = {
    display: 'inline-flex', 
    alignItems: 'center', 
    color: pctColor
  };


  return (
    <>
      {
        pct 
        ? <span className='pct-ctr' style={pctCtrStyle} {...restProps}>
            {caretIcon}{removePlusOrMinus(pct)}%
          </span> 
        : null
      }
    </>
  );
};
