import { useState } from 'react';

export default function Slider({pictures}) {
    const alone = pictures.length === 1 ? { display: 'none' } : {};

    let [imgUrl, setImgUrl] = useState(0);
    let [prevImgUrl, setPrevImgUrl] = useState(null);

    function prevImg() {
        setPrevImgUrl(imgUrl);
        if (imgUrl <= 0) {
            setImgUrl(pictures.length - 1);
        } else {
            setImgUrl(imgUrl - 1);
        }
    }

    function nextImg() {
        setPrevImgUrl(imgUrl);
        if (imgUrl >= pictures.length - 1) {
            setImgUrl(0);
        } else {
            setImgUrl(imgUrl + 1);
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
                    className={`slider-img ${index === imgUrl ? 'current-img' : ''} ${index === prevImgUrl ? 'prev-img' : ''}`}
                />
            ))}
            <p onClick={nextImg} style={alone} className="arrow-right">＞</p>
            <p style={alone} className="image-counter">{imgUrl + 1} / {pictures.length}</p>
        </div>
    );
}
