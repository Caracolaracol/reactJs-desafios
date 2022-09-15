import './ItemListContainer.css';


function ItemListContainer(props) {
    return (
        <div className="item-list__container">
            <main className="item-list__main">
                <h1>{props.greeting}</h1>
                
            </main>
        </div>
    )
}

export default ItemListContainer