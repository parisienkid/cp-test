import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';
import Order from '../order/Order';

import './basket.scss';

const Basket: FC = () => {
    
    const {bag} = useSelector((state: RootState) => state.bag);

    const renderBasket = () => {
        if (bag.every(item => item.count === 0)) {
            return 'Select sneakers!'
        } else {
            return (
                bag.map(item => {
                    if (item.count > 0) {
                        return <Order key={item.id} id={item.id} count={item.count} url={item.url} price={item.price} name={item.name}/>
                    } 
                })
            )
        }
    }
    
    return (
        <div className="basket">
            <div className="basket__title">My basket</div>
            {renderBasket()}
        </div>
    );
};

export default Basket;