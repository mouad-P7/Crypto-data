import { removePlusOrMinus } from '../../utils/functions';
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";


export default function Pct({pct}) {
  let pctColor = '', caretIcon = <></>;
  if(pct >= 0){
    pctColor = 'var(--text-green)';
    caretIcon = <FaCaretDown color="inherit"/>
  }else{
    pctColor = 'var(--text-red)';
    caretIcon = <FaCaretUp color="inherit"/>
  }
  const pctCtrStyle = {display: 'flex', alignItems: 'center', color: pctColor};


  return (
    <>
      {
        pct 
        ? <span style={pctCtrStyle}>
            {caretIcon}{removePlusOrMinus(pct)}%
          </span> 
        : null
      }
    </>
  );
};
