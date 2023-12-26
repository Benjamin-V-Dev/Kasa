import { useState } from 'react';

export default function Slider({pictures}) {

    /* On récupére ci-dessus les props de l'élément parent et on les utilise ci-dessous */

    // Si le slider dispose que d'une seule image : création d'une class "alone" pour masquer les flèches et la pagination
    const alone = pictures.length === 1 ? { display: 'none' } : {};

    let [imgUrl, setImgUrl] = useState(0); //state pour l'image à afficher
    let [switchImgUrl, setswitchImgUrl] = useState(null); //state pour changer l'image à afficher


    //Fonction pour passer à l'image suivante
    function nextImg() {
        setswitchImgUrl(imgUrl);
        if (imgUrl >= pictures.length - 1) {
            setImgUrl(0);
            // si l'index est supérieure au tableau alors retour à l'index 0
        } else {
            setImgUrl(imgUrl + 1);
            // si non, ajoute +1 à l'index pour l'image suivante
        }
    }
    
    
    //Fonction pour passer à l'image précédente
    function prevImg() {
        setswitchImgUrl(imgUrl);
        if (imgUrl <= 0) {
            setImgUrl(pictures.length - 1);
            // si l'index est inférieur au tableau alors retour à l'index maximum
            
        } else {
            setImgUrl(imgUrl - 1);
            // si non, soustrait -1 à l'index pour l'image précédente
        }
    }

    
    return (
        <div className="slider">
            <p onClick={prevImg} style={alone} className="arrow-left">＜</p>

            {pictures.map((picture, index) => (
                <img 
                    key={index} 
                    src={picture} 
                    alt="Slider Image"
                    className={`slider-img ${index === imgUrl ? 'current-img' : ''} ${index === switchImgUrl ? 'prev-img' : ''}`}
                />
            ))}

            <p onClick={nextImg} style={alone} className="arrow-right">＞</p>
            <p style={alone} className="image-counter">{imgUrl + 1} / {pictures.length}</p>
        </div>
    );
}
