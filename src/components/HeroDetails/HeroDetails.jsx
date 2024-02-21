import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHero } from "../../services/HeroesService";
import _ from  "lodash";

import "./HeroDetails.scss";

const HeroDetails = () => {  
    const [hero, setHero] = useState();
    let {id} = useParams();

    useEffect(() => {
        getHero(id)
        .then(data => setHero(data[0]))
        .catch(err => console.error(err))
    }, [hero, id]);
    if (!hero) return

    let heroTeam;
    function addHero(){
        heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
        if(heroTeam.filter(e => e.id === hero.id).length > 0){
            console.log("Hero already added")
        }
        else{
            heroTeam.push({id: hero.id, hero: hero.name, thumbnail: hero.thumbnail.path + "/standard_xlarge." + hero.thumbnail.extension});
            localStorage.setItem('heroTeam', JSON.stringify(heroTeam));
         }
    }

    function removeHero(){
        heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
        for(let i=0; i<heroTeam.length; i++){
            if(_.isEqual(heroTeam[i].id, hero.id)){  
                heroTeam.splice(i,1);
            }
        }
        localStorage.setItem('heroTeam', JSON.stringify(heroTeam));
    }

    return(

            <div className = "hero-details-container">
                <img
                    src={hero.thumbnail.path + "/standard_xlarge." + hero.thumbnail.extension}
                    alt={hero.name}
                    width="250px"
                    height="250px"
                />
                <h2>{hero.name}</h2>  
                <div>
                    <button className="add-button" onClick={addHero}>Add</button>
                    <button className="remove-button" onClick={removeHero}>Remove</button>
                </div>
                <div>
                    {hero.description ?<p>{hero.description}</p> : "No official description available."}
                    <div>
                        <h4>Series</h4>
                        {hero.series.items.length !== 0 ? <ul>{hero.series.items.map(s => <li key={Math.random()}>{s.name}</li>)}</ul> : "No series available."}
                    </div>        
                </div>
            </div>
    )

}
export default HeroDetails;