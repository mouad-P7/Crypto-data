import Link from 'next/link';
import Button from '@ui/common/Button';
 

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 h-[60vh]">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">
        <Button btn="blue">Return Home</Button>
      </Link>
    </div>
  );
};
