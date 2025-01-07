import './FoodDisplay.css';
import {StoreContext} from '../../context/storeContent.jsx';
import { useContext } from 'react';
import FoodItem from '../foodItem/FoodItem.jsx';

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
    return (
        <div className='food-display' id='food-display'>
            <h2>Top disases near you</h2>
            <div className='food-display-list'>
                {
                    food_list.map((item, index) => {
                        console.log('Item:',category, item.category);
                        if(category ==='All' || category === item.category){
                            return (<FoodItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />)
                        }
                    })
                }
            </div>
        </div>
    )
}

export default FoodDisplay