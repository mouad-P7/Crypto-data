import Pct from '../../common/Pct';


export default function TopbarData({children, value, pct, ...restProps}){
  const topbarDataStyle = {
    flexShrink: 0,
    display: 'flex',
    gap: '2px',
    flexWrap: 'nowrap'
  };
  const childrenStyle = {
    display: 'inline-flex',
    alignItems: 'center'
  };


  return (
    <small style={topbarDataStyle} {...restProps}>
      <span style={childrenStyle}>{children}:</span>
      <span style={{ color: 'var(--text-blue)' }}>{value}</span>
      <Pct pct={pct} />
    </small>
  );
};
