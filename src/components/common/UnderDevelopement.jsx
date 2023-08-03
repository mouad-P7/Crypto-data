import { Link } from 'react-router-dom';
import Button from './Button';


export default function UnderDevelopement() {
  const style = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center',
    gap: '10px'
  };


  return (
    <div id='UnderDevelopment' style={style}>
      <img src="./assets/under-development.png" alt="under-development"/>
      <Link to='.'><Button className='blue-btn'>Back to Home</Button></Link>
    </div>
  );
};
