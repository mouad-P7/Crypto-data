import { FaMagnifyingGlass } from "../../common/Icons";
import './styles/Search.css';


export default function Search() {
  return (
    <form id='search-form'>
      <label id="search-label" htmlFor="search-input">
        <FaMagnifyingGlass style={{ color:"var(--text-gray-2)" }} />
      </label>
      <input id="search-input" type="text" placeholder="Search" />
    </form>
  );
};
