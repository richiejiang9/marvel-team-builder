import './HeroCard.scss';
import { Link } from 'react-router-dom';
import _ from  "lodash"

const HeroCard = (props) => {
    let hero = {id: props.id, props: props.name, thumbnail: props.thumbnail};
    let heroTeam;
    function addHero(){
        heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
        if(heroTeam.filter(e => e.id === hero.id).length > 0){
            console.log("Hero already added")
        }
        else{
            heroTeam.push({id: props.id, name: props.name, thumbnail: props.thumbnail});
            localStorage.setItem('heroTeam', JSON.stringify(heroTeam));
         }
    }

    function removeHero(){
        heroTeam = JSON.parse(localStorage.getItem('heroTeam')) || [];
        let id = props.id
        for(let i=0; i<heroTeam.length; i++){
            if(_.isEqual(heroTeam[i].id, hero.id)){  
                heroTeam.splice(i,1);
            }
        }

        localStorage.setItem('heroTeam', JSON.stringify(heroTeam));
        if(props.onTeam===true){
            var card = document.getElementById(id);
            card.parentNode.removeChild(card);
        }
    }


    return(
        <div className="hero-card-container" id={props.id}>
            <img
                src={props.thumbnail}
                alt={props.name}
                width="210px"
                height="210px"
            />
            <div className="info-container">
                <Link to={`/${props.id}`}>
                    <div className="name-container">{props.name}</div>
                </Link>
                <div>
                    <button className="add-button" onClick={addHero}>Add</button>
                    <button className="remove-button" onClick={removeHero}>Remove</button>
                </div>
            </div>
        </div>
    )
}

export default HeroCard;