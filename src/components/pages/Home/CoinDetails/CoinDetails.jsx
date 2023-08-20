import { useParams } from 'react-router-dom';


export default function CoinDetails() {
  const params = useParams();


  return (
    <div>{params.slug}</div>
  );
};
