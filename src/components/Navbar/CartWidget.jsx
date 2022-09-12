import '../Header/header.css';
import './NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function CartWidget() {
    return (
        <div className='cart-widget__container'>
            <ShoppingCartIcon
                fontSize='large'
            />
            <div className='cart-widget__counter'>
                <h2>0</h2>
            </div>
        </div>
    )
}

export default CartWidget;