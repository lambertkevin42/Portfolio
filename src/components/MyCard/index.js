import '../MyCard/mycard.scss';
import moi from '../../assets/images/moi.png'

function MyCard() {
    return (
        <div className="mycard">
            
            <h2 className="mycard-title">Bienvenu.</h2>
            <div className="mycard-infos">
                <p className="mycard-infos-textUp">Je m'appelle Kévin Lambert, je suis développeur web & web mobile</p>
                <p className="mycard-infos-text">Originaire de Saint-Etienne, Loire. Je suis heureux de vous présenter mon portfolio.</p>
                <p className="mycard-infos-text">Geek, passionné de création et de développement, j'accorde une attention toute particulière à l'expérience utilisateur de chacuns de mes projets. Espérant que votre expérience ici, sera des plus agréable, je vous laisse me découvrir.</p>
            </div>
            <img className="mycard-img" src={moi} alt="kévin lambert"/>
        </div>
    );
}

export default MyCard;