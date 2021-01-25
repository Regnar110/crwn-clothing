import { Component } from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/previev-collection/PreviewCollection'

class ShopPage extends Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state
        return(
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => {
                        return(
                            <PreviewCollection key={id} {...otherCollectionProps} />
                        )
                    })
                }
            </div>
        )
    }
}

export default ShopPage;