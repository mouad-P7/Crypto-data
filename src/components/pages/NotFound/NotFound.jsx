import { Link } from 'react-router-dom';
import Button from '../../common/Button';


export default function NotFound() {
  const NotFoundStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  };
  return (
    <div id='NotFound' style={NotFoundStyle}>
      <img src="./assets/404.png" alt="404-img" />
      <h1>Opps, something went wrong</h1>
      <p style={{ marginBottom: '10px' }}>Sorry, we couldn't find your page</p>
      <Link to='.'><Button className='blue-btn'>Back to Home</Button></Link>
    </div>
  );
};
