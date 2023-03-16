import React from 'react';
import Card from "../components/Card/Card";

const Favorites = ({items, onAddToCart}) => {
    return (
        <div className="content">
            <div className="content-top">
                <h1>Мої закладки</h1>

            </div>
            <div className="sneakers">
                {items.map(item => {
                    return <Card
                        // key={item.imgURL}
                        title={item.title}
                        price={item.price}
                        imgURL={item.imgURL}
                        favorite={true}
                        onPlus={() => onAddToCart(item)}
                    />
                })}
            </div>
        </div>
    );
};

export default Favorites;