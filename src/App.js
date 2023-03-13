import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";




function App() {
    const [items, setItems] = useState([])
    const [cardOpened, setCardOpened] = useState(false);

    useEffect(() => {
        fetch("https://640fa61c864814e5b63cb094.mockapi.io/items")
            .then((response) => response.json())
            .then((data) => {
                setItems(data)
            })
    }, [])

  return (
      <div className="wrapper">
          {cardOpened && <Drawer onCloseCart={()=>setCardOpened(false)}/>}
          <Header onClickCart={()=> setCardOpened(true)}/>
          <div className="content">
              <div className="content-top">
                  <h1>Всі кросівки</h1>
                  <div className="search-block">
                      <img src="/img/search.svg" alt="Search"/>
                      <input placeholder="Пошук..." type="text"/>
                  </div>
              </div>
              <div className="sneakers">
              {items.map(item => {
                  return <Card
                      title={item.title}
                      price={item.price}
                      imgURL={item.imgURL}
                      onFavourite={()=> console.log("Favourite")}
                      onPlus={()=> console.log("Plus")}
                      />
              })}
              </div>
          </div>
      </div>
  );
}

export default App;
