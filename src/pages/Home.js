import React from 'react';
import Card from "../components/Card/Card";

const Home = ({items, searchValue, onChangeSearchInput, onAddToFavorites, onAddToCart}) => {
    return (
       <div className="content">
           <div className="content-top">
               <h1>{searchValue ? `Пошук: ${searchValue}` : 'Всі кросівки'}</h1>
               <div className="search-block">
                   <img src="/img/search.svg" alt="Search"/>
                   <input onChange={onChangeSearchInput} value={searchValue} placeholder="Пошук..." type="text"/>
               </div>
           </div>
           <div className="sneakers">
               {items
                   .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
                   .map(item => {
                       return <Card
                           key={item.imgURL}
                           title={item.title}
                           price={item.price}
                           imgURL={item.imgURL}
                           onFavorite={()=> onAddToFavorites(item)}
                           onPlus={() => onAddToCart(item)}
                       />
                   })}
           </div>
       </div>
    );
};

export default Home;