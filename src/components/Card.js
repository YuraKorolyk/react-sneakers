import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="favourite">
                <img src="/img/heard-unliked.svg" alt="Unliked"/>
            </div>
            <img width={133} height={112} src="/img/sneakers/1.jpg" alt=""/>
            <p>Чоловічі Кросівки Nike Blazer Mid Suede</p>
            <div className="cardBottom">
                <div className="cardPrice">
                    <span>Ціна:</span>
                    <span>7000 грн.</span>
                </div>
                <button className="cardButton"><img width={11} height={11} src="/img/plus.svg" alt=""/></button>
            </div>
        </div>
    );
};

export default Card;