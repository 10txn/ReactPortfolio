import React from 'react';
import './Post.css';
import CardItem from '../Cards/CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
          </ul>
          <p className='postpara'>Come and explore the hidden waterfall deep inside the Amazon Jungle for only $25</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;