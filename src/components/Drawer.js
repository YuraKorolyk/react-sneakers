import React from 'react';

const Drawer = ({items = [], setItems, onCloseCart, onDelete}) => {
    let sum = 0;
    // const getSum = (arr) => {
    //     arr.forEach(item => console.log(item.price));
    //     // return sum;
    // }
        // console.log(items);
    return (
        <div className="overlay">
            <div className="drawer">
                <h2>Корзина
                    <img onClick={onCloseCart} src="/img/btn-remove.svg" alt="Remove"/>
                </h2>

                {items.length >0 ?(
                    <>
                        <div className="items">
                            {items.map(item => (
                                <div className="cartItem">
                                    <img className="sneakerImg" width={70} height={70} src={item.imgURL} alt="Sneaker"/>
                                    <div className="descrBlock">
                                        <p>{item.title}</p>
                                        <div className="price">{item.price} грн.</div>
                                    </div>
                                    <img onClick={()=>onDelete(item.id)}  src="/img/btn-remove.svg" alt="Remove"/>
                                </div>
                            ))}
                        </div>
                        <div className="cartTotalBlock">
                            <ul>
                                <li className="list-item">
                                    <span>Сума:</span>
                                    <div className="total-dashed"></div>
                                    <div className="total-price">{}</div>
                                </li>
                                <li className="list-item">
                                    <span>Податок 5%:</span>
                                    <div className="total-dashed"></div>
                                    <div className="total-price">800 грн.</div>
                                </li>
                            </ul>
                            <button className="greenButton">Оформити замовлення <img src="/img/arrow.svg" alt="Arrow"/></button>
                        </div>
                    </>
                ) : (
                    <div className="cartEmpty">
                        <img src="/img/empty-drawer.jpg" alt="Empty"/>
                        <h2>Корзина пуста</h2>
                        <p>Для замолення додайте хоча б одну пару кросівок</p>
                        <button onClick={onCloseCart} className="greenButton">
                            <img src="/img/arrow.svg" alt="Arrow"/>
                            Повернутися назад
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Drawer;