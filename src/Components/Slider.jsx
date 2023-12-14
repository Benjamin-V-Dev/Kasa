import {useState} from 'react'


export default function Slider({pictures}) {

    const alone = pictures.length === 1 ? { display: 'none' } : {};

    let [imgUrl, setImgUrl] = useState(0)

    function prevImg() {
        if (imgUrl <= 0) {
            setImgUrl(pictures.length - 1);
        } else {
            setImgUrl(imgUrl - 1);
        }
    }

    function nextImg() {
        if (imgUrl >= pictures.length - 1) {
            setImgUrl(0);
        } else {
            setImgUrl(imgUrl + 1);
        }
    }
    
    return (
        <div className="slider">
            <p onClick={prevImg} style={alone} className="arrow-left">＜</p>
            <img src={pictures[imgUrl]} alt="Slider Image" />
            <p onClick={nextImg} style={alone} className="arrow-right">＞</p>
        </div>
    )
}