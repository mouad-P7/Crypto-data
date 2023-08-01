import Pct from '../../common/Pct';


export default function TopbarData({children, value, pct, ...restProps}){
  const topbarDataStyle = {
    flexShrink: 0,
    display: 'flex',
    gap: '2px',
    flexWrap: 'nowrap'
  };


  return (
    <small style={topbarDataStyle} {...restProps}>
      <span>{children}:</span>
      <span style={{ color: 'var(--text-blue)' }}>{value}</span>
      <Pct pct={pct} />
    </small>
  );
};
