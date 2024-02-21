import { useRef } from "react";
import { getHeroes } from "../../services/HeroesService";

const SearchBar = ({setHeroes}) => {
    let inputRef = useRef("");

    const handleSearch = async (e) => {
        e.preventDefault();
        let val = inputRef.current.value;
        if(val === "") return;

        try {
            let heroes = await getHeroes(val);
            setHeroes(heroes);
        } catch(err) {
            return console.error(err);
        }
    };

    return (
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="search"
            ref={inputRef}
            placeholder="Search heroes"
          />
          <button onClick={handleSearch}>Search</button>
        </form>
        
      );
}

export default SearchBar;