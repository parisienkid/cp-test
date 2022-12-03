import { FC } from 'react';
import { Link } from 'react-router-dom';
import AddBtn from '../UI/add-btn/AddBtn';

import './shoeCard.scss';

interface ShoeCardI {
    url: string,
    name: string,
    price: number,
    id: number,
}

const ShoeCard: FC<ShoeCardI> = ({url, name, price, id}) => {

    return (
        <div className="shoe">
            <Link to={`/${id}`}>
                <img className='shoe__img' src={url} alt="Shoe" />
                <div className="shoe__name">{name}</div>
            </Link>
            <div className="shoe__footer">
                <AddBtn id={id}/>
                <div className="shoe__price">$ {price}</div>
            </div>
        </div>
    );
};

export default ShoeCard;