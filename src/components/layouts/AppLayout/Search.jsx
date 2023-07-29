import { FaMagnifyingGlass } from "react-icons/fa6";
import './styles/Search.css';


export default function Search() {
  return (
    <form id='search-form'>
      <label id="search-label" htmlFor="search-input">
        <FaMagnifyingGlass color="var(--text-gray-2)" size={16} />
      </label>
      <input id="search-input" type="text" placeholder="Search" />
    </form>
  );
};
