import { useState } from 'react';


export default function Hero({title, firstLine, children, ...restProps}) {
  const [readMore, setReadMore] = useState(true);


  const ctrStyle = { 
    color: 'var(--text-gray-4)',
    margin: '10px 0'
  };
  const readMoreStyle = {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'var(--text-gray)',
    userSelect: 'none',
    marginLeft: '5px'
  };


  return (
    <div className="Hero" {...restProps}>
      <h1>{title}</h1>
      <p style={ctrStyle}>
        {firstLine} 
        {
          children && 
          <span 
            style={readMoreStyle} 
            onClick={() => setReadMore(prevReadMore => !prevReadMore)}
          >
            {readMore ? 'Read More' : 'Read Less'}
          </span>
        }
      </p>
      {children && !readMore && <div style={ctrStyle}>{children}</div>}
    </div>
  );
};