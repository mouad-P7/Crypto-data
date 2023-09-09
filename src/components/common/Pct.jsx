import { removePlusOrMinus } from '@utils/functions';
import { FaCaretDown, FaCaretUp } from "./Icons";


export default function Pct({pct, ...restProps}) {
  let pctColor = "", caretIcon = <></>;
  if(pct >= 0){
    pctColor = 'text-green';
    caretIcon = <FaCaretUp size={12} />
  }else{
    pctColor = 'text-red';
    caretIcon = <FaCaretDown size={12} />
  }


  return (
    <>
      {
        pct &&
        <span className={`inline-flex items-center ${pctColor}`} {...restProps}>
          {caretIcon}{removePlusOrMinus(pct)}%
        </span>
      }
    </>
  );
};
