import { useEffect, useState } from "react";
import { getHero } from "../../services/HeroesService";
import { useParams } from "react-router-dom";

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
                    {hero.description ?<p>{hero.description}</p> : "No official description available."}
                    <div>
                        <h4>Series</h4>
                        <ul>{hero.series.items.map(s => <li key={Math.random()}>{s.name}</li>)}</ul>
                    </div>        
                </div>
            </div>
    )

}
export default HeroDetails;