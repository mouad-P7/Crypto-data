import Pct from '@ui/common/Pct';


export default function GeneralData({children, value, pct, ...restProps}){
  return (
    <small className="flex-shrink-0 flex gap-1 flex-no-wrap" {...restProps}>
      <span className="inline-flex items-center">{children}:</span>
      <span className="text-blue">{value}</span>
      <Pct pct={pct} />
    </small>
  );
};
