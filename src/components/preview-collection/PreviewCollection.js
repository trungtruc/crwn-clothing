import React from 'react';
import './PreviewCollection.scss';
import CollectionItem from '../collection-item/CollectionItem';


const PreviewCollection = (props) => (
  <div className='collection-preview'>
    <h1 className='title'>{props.title.toUpperCase()}</h1>
    <div className='preview'>
      {
        props.items
        .filter((item,idx) => idx < 4)
        .map(item => (
        <CollectionItem imageUrl={item.imageUrl} name={item.name} price={item.price}/>
        ))
      }
    </div>
  </div>
)

export default PreviewCollection;