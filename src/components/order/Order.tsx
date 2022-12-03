import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../core/store/store';
import { setNewBag } from '../../core/reducers/bagSlice';

import { updateBag } from '../../core/utils/updateBag';

import deleteSvg from '../../assets/delete.svg';
import minusSvg from '../../assets/minus.svg';
import plusSvg from '../../assets/plus.svg';

import './order.scss';

interface orderI {
    id: number,
    count: number,
    url: string,
    name: string,
    price: number
}

const Order: FC<orderI> = ({id,count,url,name,price}) => {

    const dispatch = useDispatch();
    const [bouncePlus, setBouncePlus] = useState(0);
    const [bounceMinus, setBounceMinus] = useState(0);
    const {bag} = useSelector((state: RootState) => state.bag);

    function increaseCont() {
        dispatch(setNewBag(updateBag(id, 'plus', bag)))
        setBouncePlus(1);
    }

    function decreaseCount() {
        dispatch(setNewBag(updateBag(id, 'minus', bag)))
        setBounceMinus(1)
    }

    function deleteFromBag() {
        dispatch(setNewBag(updateBag(id, 'delete', bag)))
    }

    return (
        <div key={id} className="order">
            <img className='order__image' src={url} alt="Shoe" />
            <div>
                <div className="order__caption">{name}</div>
                <div className="order__footer">
                    <button data-bounce={bounceMinus} onAnimationEnd={() => setBounceMinus(0)} onClick={decreaseCount}>
                        <img src={minusSvg} alt="Minus" />
                    </button>
                    <div className="order__counter">{count}</div>
                    <button data-bounce={bouncePlus} onAnimationEnd={() => setBouncePlus(0)} onClick={increaseCont}>
                        <img src={plusSvg} alt="Plus" />
                    </button>
                    <div className="order__price">{price} $</div>
                </div>
            </div>
            <button onClick={deleteFromBag}>
                <img className='order__delete' src={deleteSvg} alt="Delete" />
            </button>
        </div>
    );
};

export default Order;