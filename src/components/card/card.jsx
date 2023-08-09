import React from 'react'
import './card.css'
import Button from '../button/button';
import { useState } from 'react';

function card(props) {

    const {cources,onAddItem,onRemove} = props;

    const [count,setCount] = useState(0);

    const handleIncrement = () => {
      setCount(prev => prev + 1);
      onAddItem(cources);
    };
  
    const handleDecrement = () => {
      setCount(prev => prev - 1);
      onRemove(cources);
    };

  return (
    <div className='card'>
        <span className={`${count !== 0 ? 'card__badge' : 'card__bagde_hidden'}`}>{count}</span>
        <div className='image__container'>
            <img src={cources.Image} alt={cources.title} width={'100%'} height={'230px'} />
        </div>
        <div className='card__body'>
            <h2 className='card__title'>{cources.title}</h2>
            <div className='card-price'>{cources.price.toLocaleString("en-US", {
                style: 'currency',
                currency: 'USD'
            })}</div>
        </div>
        <div className='hr'></div>
        <div className='btn__container'>
        <Button title={'+'} onClick={handleIncrement} type={'add'} />{count !== 0 && (        <Button title={'-'} onClick={handleDecrement} type={'remove'} />)}
        </div>
    </div>
  )
}

export default card