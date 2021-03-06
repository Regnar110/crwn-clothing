import React from 'react'
import './previewcollection.scss'
import CollectionItem from '../collection-item/CollectionItem'

const PreviewCollection = ({title, items}) => {
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
               {
                   items.filter((item, index) => index < 4)
                   .map((item) => {
                       return (
                           <CollectionItem key={item.id} item={item}/>
                       )
                   })
               }
               
            </div>
        </div>
    )
}

export default PreviewCollection;