import {useState} from "react"
import SearchBar from '../components/SearchBar/SearchBar'
import HeroesList from '../components/HeroesList/HeroesList'

const AllHeroes = () => {
    const [heroes, setHeroes] = useState([]);

    return (
        <div className="container">
            <SearchBar setHeroes={setHeroes}/>
                <HeroesList heroes={heroes}/>
        </div>
    )
}

export default AllHeroes;