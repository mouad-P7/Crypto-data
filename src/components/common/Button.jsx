export default function Button({children, btn, ...restProps}){
  let style = "";
  if(btn === "blue") style = "bg-blue text-white hover:bg-hover-blue";
  else if(btn === "white") style = "bg-white text-blue border border-blue hover:bg-hover-white";
  else if(btn === "transparent") style = "bg-white text-black hover:bg-hover-white";


  return (
    <button className={`px-[10px] py-[4px] cursor-pointer rounded-3xl flex items-center justify-center gap-1 ${style}`} {...restProps}>
      {children}
    </button>
  );
};
