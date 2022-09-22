
import './ItemListContainer.css';
import Itemlist from "../Itemlist/ItemList"




function ItemListContainer() {
    return (
        <div className="item-list__container">
            <main className="item-list__outer">
                
                <Itemlist/>
            </main>
        </div>
    )
} 

export default ItemListContainer