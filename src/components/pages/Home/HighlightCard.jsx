import { Link } from 'react-router-dom';
import './styles/HighlightCard.css';


export default function HighlightCard({title, link, children, ...restProps}) {
  return (
    <div className='highlight-card card' {...restProps}>
      <div className="title-ctr">
        <p className='title'>{title}</p>
        {link && <Link to={link} className='blue-link'>More &gt;</Link>}
      </div>
      <div className="highlight-content">{children}</div>
    </div>
  );
};
