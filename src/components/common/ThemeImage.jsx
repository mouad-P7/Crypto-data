import Image from 'next/image';
 

export default function ThemeImage({ lightImg, darkImg, ...restProps }){
  return (
    <>
      <Image src={`/images/${lightImg}`} className="light-mode-img" {...restProps}/>
      <Image src={`/images/${darkImg}`} className="dark-mode-img" {...restProps}/>
    </>
  );
};
