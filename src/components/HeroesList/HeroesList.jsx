import HeroCard from "../HeroCard/HeroCard";

import './HeroesList.scss';

const HeroesList = ({heroes}) => {
    return(
        <div className = "heroes-list-container">
            {heroes ? (heroes.map((hero) => (
                <HeroCard
                name = {hero.name} 
                id={hero.id} 
                thumbnail={hero.thumbnail.path + "/standard_xlarge." + hero.thumbnail.extension}
                key = {hero.id} 
                />
            ))) : ""}
        </div>
    )
}

export default HeroesList;