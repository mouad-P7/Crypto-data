import { FaMagnifyingGlass } from "@ui/common/Icons";


export default function Search() {
  return (
    <form className="w-64 h-10 p-2 rounded-lg bg-light-gray flex items-center gap-2">
      <label className="flex flex-grow" htmlFor="search-input">
        <FaMagnifyingGlass className="text-gray-2" />
      </label>
      <input id="search-input" className="pl-5px" type="text" placeholder="Search" />
    </form>
  );
};
