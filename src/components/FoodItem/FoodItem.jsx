import { useContext } from 'react';
import { assets } from '../../assets/assets.js';
import './FoodItem.css';
import { StoreContext } from '../../context/storeContent.jsx';


const FoodItem = ({id, name, price, description, image}) => {
    // const [itemCount, setItemCount] = useState(0)
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext)
    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt={name} />
                {
                    !cartItems[id] ? <img onClick={() => addToCart(id)} className='add' src={assets.add_icon_white} />
                        : <div className='food-item-counter'>
                            <img onClick={ () => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                            <p>{cartItems[id]}</p>
                            <img  onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt='star' />
                </div>
                <p className='food-item-description'>{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    )
}


export default FoodItem