import React, {useState} from 'react';
import cardModules from './Card.module.scss'

const Card = ({title, price, imgURL, onFavorite, onPlus, favorite = false}) => {
    const [isAdded, setIsAdded] = useState(false)
    const [isLiked, setIsLiked] = useState(favorite)
    const onClickPlus = () => {
        onPlus()
        setIsAdded(!isAdded)
    }
    const onClickFavorite = () => {
        onFavorite()
        setIsLiked(!isLiked)
    }
    return (
        <div className={cardModules.card}>
            <div onClick={onClickFavorite} className={cardModules.favorite}>
                <img src={isLiked ? "/img/heard-liked.svg" : "/img/heard-unliked.svg"} alt={isLiked ? "Liked" : "Unliked"}/>
            </div>
            <img width={133} height={112} src={imgURL} alt=""/>
            <p>{title}</p>
            <div className={cardModules.cardBottom}>
                <div className={cardModules.cardPrice}>
                    <span>Ціна:</span>
                    <span>{price} грн.</span>
                </div>
                <img
                    className={cardModules.plus}
                    onClick={onClickPlus}
                    src={isAdded?"/img/btn-checked.svg":"/img/btn-plus.svg"}
                    alt=""/>
            </div>
        </div>
    );
};

export default Card;