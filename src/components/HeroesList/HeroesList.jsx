import HeroCard from "../HeroCard/HeroCard";

import './HeroesList.scss';

const HeroesList = ({heroes}) => {
    return(
        <div>
            {heroes ? (heroes.map((hero) => (
                <div className = "heroes-list-container">
                    <HeroCard
                    name = {hero.name} 
                    id={hero.id} 
                    thumbnail={hero.thumbnail.path + "/standard_xlarge." + hero.thumbnail.extension}
                    key = {hero.id} 
                /></div>
            ))) : "The rate limit has been exceeded. Please try again later."}
        </div>
    )
}

export default HeroesList;