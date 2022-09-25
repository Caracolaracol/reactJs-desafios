import React from 'react';
import './index.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Itemdetailcontainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <div>
            <div>
                <Header />
                {/* <ItemListContainer /> */}
                <Itemdetailcontainer />
            </div>

            <Footer/>
        </div>
        
    );
}

export default App;