import { removePlusOrMinus } from '../../utils/functions';
import { FaCaretDown, FaCaretUp } from "./Icons";


export default function Pct({pct, ...restProps}) {
  let pctColor = '', caretIcon = <></>;
  if(pct >= 0){
    pctColor = 'var(--text-green)';
    caretIcon = <FaCaretUp size={12} />
  }else{
    pctColor = 'var(--text-red)';
    caretIcon = <FaCaretDown size={12} />
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
