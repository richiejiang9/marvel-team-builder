import { useState } from "react";
import HeroCard from "../HeroCard/HeroCard";

const TeamDetails = () => {
    let heroTeam = useState(JSON.parse(localStorage.getItem('heroTeam')) || []);

    return(
        <div className = "heroes-list-container">
            {heroTeam ? (heroTeam[0].map((hero) => (
                <HeroCard
                    name = {hero.name} 
                    id={hero.id} 
                    thumbnail={hero.thumbnail}
                    key = {hero.id} 
                    onTeam = {true}
                />
            ))) : ""}
        </div>
    )
}

export default TeamDetails;