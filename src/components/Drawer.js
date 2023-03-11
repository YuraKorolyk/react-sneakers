import React from 'react';

const Drawer = () => {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img className="remobeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                </h2>
                <div className="items">
                    <div className="cartItem">
                        <img className="sneakerImg" width={70} height={70} src="/img/sneakers/1.jpg" alt="Sneaker"/>
                        <div className="descrBlock">
                            <p>Чоловічі Кросівки Nike Blazer Mid Suede</p>
                            <div className="price">7000 грн.</div>
                        </div>
                        <img className="remobeBtn" src="/img/btn-remove.svg" alt="Remove"/>
                    </div>
                </div>

                <div className="cardTotalBlock">
                    <ul>
                        <li className="list-item">
                            <span>Сума:</span>
                            <div className="total-dashed"></div>
                            <div className="total-price">7999 грн.</div>
                        </li>
                        <li className="list-item">
                            <span>Податок 5%:</span>
                            <div className="total-dashed"></div>
                            <div className="total-price">800 грн.</div>
                        </li>
                    </ul>
                    <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="Arrow"/></button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;