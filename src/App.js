import axios from "axios";
import {NavLink, Route, Routes} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {useEffect, useState} from "react";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
function App() {
    const [items, setItems] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [favorites, setFavorites] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [cardOpened, setCardOpened] = useState(false);

    useEffect(() => {
        axios.get("https://640fa61c864814e5b63cb094.mockapi.io/items").then((res) =>{
            setItems(res.data)
        })
        axios.get("https://640fa61c864814e5b63cb094.mockapi.io/cart").then((res) =>{
            setCartItems(res.data)
        })
        axios.get("https://641220176e3ca31753076909.mockapi.io/favorites").then((res) =>{
            setFavorites(res.data)
        })
    }, [])
    const onAddToCart = (obj) => {
        axios.post("https://640fa61c864814e5b63cb094.mockapi.io/cart", obj)
            .then(res =>setCartItems(prev => [...prev, res.data]))
        // setCartItems(prev => [...prev, obj]);
    }
    const onDeleteItem = (id) => {
        axios.delete(`https://640fa61c864814e5b63cb094.mockapi.io/cart/${id}`)

        setCartItems(prev => prev.filter(item => item.id !== id));
    }
    const onAddToFavorites = (obj) => {
        if (favorites.find(obj => obj.id === obj.id)) {
            axios.delete(`https://641220176e3ca31753076909.mockapi.io/favorites/${obj.id}`)
        } else {
        axios.post("https://641220176e3ca31753076909.mockapi.io/favorites", obj)
        .then(res =>setFavorites(prev => [...prev, res.data]))
        }
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    return (
      <div className="wrapper">
          {cardOpened && <Drawer items={cartItems} setItems={setCartItems} onDelete={onDeleteItem} onCloseCart={()=>setCardOpened(false)}/>}
          <Header onClickCart={()=> setCardOpened(true)}/>
          {/*<Routes><Route path="/favorites" element='fdsgkmjsfjnfjns'/></Routes>*/}
          <Routes>
              <Route path="/" element={
                <Home
                  items={items}
                  searchValue={searchValue}
                  onChangeSearchInput={onChangeSearchInput}
                  onAddToFavorites={onAddToFavorites}
                  onAddToCart={onAddToCart}
                />}
              />
              <Route path="/favorites" element={
                  <Favorites
                      items={favorites}
                      onAddToCart={onAddToCart}
                  />}
              />
          </Routes>


      </div>
  );
}

export default App;
