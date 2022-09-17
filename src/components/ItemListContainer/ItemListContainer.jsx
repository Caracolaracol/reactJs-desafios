import './ItemListContainer.css';
import Itemcount from '../Itemcount/Itemcount'

function ItemListContainer(props) {
    return (
        <div className="item-list__container">
            <main className="item-list__main">
                <h1>{props.greeting}</h1>
                <Itemcount stock="5" initial="1" />
            </main>
        </div>
    )
}

export default ItemListContainer