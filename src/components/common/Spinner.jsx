export default function Spinner({size = '20px', ...restProps}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center flex-col gap-4 bg-white z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue"></div>
      <p>Loading...</p>
    </div>
  );
};
