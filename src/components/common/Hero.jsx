import { useState } from 'react';
import './styles/Hero.css';


export default function Hero({title, firstLine, children, ...restProps}) {
  const [readMore, setReadMore] = useState(true);


  return (
    <div className="Hero" {...restProps}>
      <h1>{title}</h1>
      <p className='first-line-ctr'>
        {firstLine} 
        {
          children && 
          <span 
            className='read-more-less' 
            onClick={() => setReadMore(prevReadMore => !prevReadMore)}
          >
            {readMore ? 'Read More' : 'Read Less'}
          </span>
        }
      </p>
      {children && !readMore && <div className='text-ctr'>{children}</div>}
    </div>
  );
};