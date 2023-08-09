import './App.css'
import { getData } from './constants/db'
import Card from './components/card/card'
import Cart from './components/cart/cart'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'


const cources = getData();

const telegram = window.Telegram.WebApp;

function App() {

  const [cartItems,setCartItems] = useState([]);

  useEffect(()=>{
    telegram.ready();
  });

  const onAddItem = item => {
    const existItem = cartItems.find(c => c.id == item.id);

    if(existItem){
      const newData = cartItems.map(c => c.id == item.id ? {...existItem,quantity: existItem.quantity + 1} : c)
    setCartItems(newData)

    }else{
      const newData = [...cartItems, {...item,quantity : 1}];
      setCartItems(newData)
    }

  }

  const onRemove = item => {
    const existItem = cartItems.find(c => c.id == item.id);

    if(existItem.quantity === 1){
      const newData = cartItems.filter(c => c.id !== existItem.id);
      setCartItems(newData)
    }else{
      const newData = cartItems.map(c => c.id === existItem.id ? {...existItem, quantity: existItem.quantity - 1} : c);
      setCartItems(newData)
    }

  };

  const oncheckout = () =>{
    telegram.MainButton.text = 'Sotib olish';
    telegram.MainButton.show();
  }

  const onSendData = useCallback(()=> {
    telegram.sendData(JSON.stringify(cartItems));
  },[cartItems]);

  useEffect(()=>{
    telegram.onEvent('mainButtonClicked', onSendData);
    console.log('123');
    return () => telegram.offEvent('mainButtonClicked', onSendData);
  },[onSendData]);

  return (
    <>
      <h1 className='heading'>Sammi kurslari</h1>
      <Cart cartItems={cartItems} oncheckout={oncheckout}/>
      <div className='cards__container'>
        {
          cources.map(cources => (
            <Card key={cources.id} cources={cources} onAddItem={onAddItem} onRemove={onRemove}/>
          ))
        }
      </div>
    </>
  )
}

export default App