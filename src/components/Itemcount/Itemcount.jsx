import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import './Itemcount.css'
import React from 'react';


function Itemcount() {
    let [clickCount, setClickCount] = React.useState(1)

    function plusClick() {
        let stock = 5
        if (clickCount < stock) {
            setClickCount(clickCount+1)
        }
    }

    function minusClick(){
        if (clickCount > 1){
            setClickCount(clickCount-1)
        }
    }

    return (
        <div className='item-count__container'>
            <div className="item-count__inner">
                <div className='item-count__minus'>
                    <button className='item-count__btn'><RemoveIcon onClick={minusClick}/></button>
                </div>
                <div className='item-count__number'>{clickCount}</div>
                <div className='item-count__plus'>
                    <button className='item-count__btn'><AddIcon onClick={plusClick} /></button>
                </div>
            </div>
            <div className='item-count__add-container'>
                <button className='item-count__btn-add'>
                    add to cart
                </button>
            </div>
        </div>
    )
}

export default Itemcount