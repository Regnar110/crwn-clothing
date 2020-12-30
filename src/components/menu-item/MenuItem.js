import React from 'react';
import  { withRouter } from 'react-router-dom'
import './menuitem.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`menu-item ${size}`} style={
                {
                    backgroundImage: `url(${imageUrl})`,
                }
            } onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className='content'> 
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem); // withRouter to komponent wyższego rzędu który w rzeczywistości jest funkcją przyjmującą jako parametr komponent i zwracając komponent rozszerzony o rzeczy związane zRouterem w nnaszej aplikacji. Czyli MenuItem będzie miało dostep teraz do propsów routera czyli obiektów history, location i match