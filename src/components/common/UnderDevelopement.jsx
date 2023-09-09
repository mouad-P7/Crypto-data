import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';


export default function UnderDevelopement() {
  return (
    <div className="flex flex-col items-center gap-10">
      <Image 
        src="/images/under-development.png" alt="under-development" 
        width={200} height={176} 
      />
      <Link href="/">
        <Button btn='blue'>Back to Home</Button>
      </Link>
    </div>
  );
};
