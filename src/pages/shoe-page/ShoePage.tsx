import { FC, useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";

import { shoesData } from '../../core/data/shoesData';
import { shoesDataItemI } from '../../core/data/shoesData';

import Container from '../../components/container/Container';
import BackBtn from '../../components/UI/back-btn/BackBtn';
import AddBtn from '../../components/UI/add-btn/AddBtn';

import './shoePage.scss';


const ShoePage: FC = () => {

    const {shoeId} = useParams();

    const [shoe, setShoe] = useState<shoesDataItemI>({
        id: 0,
        url: '',
        name: '',
        price: 0,
    });

    useEffect(() => {
        if (shoeId !== undefined) { 
            shoesData.some(item => {
                if (item.id === +shoeId) {
                    setShoe(item);
                    return true;
                }
            })
        }
    }, []);

    const renderContent = () => {
        if (shoe) {
            return (
                <>
                    <img className='shoe-page__image' src={shoe.url} alt="Shoe" />
                    <h3 className='shoe-page__title'>{shoe.name}</h3>
                    <h5 className='shoe-page__subtitle'>Item model number: MT91547</h5>
                    <div className="shoe-page__footer">
                        <AddBtn id={shoe.id}/>
                        <div className="shoe-page__price">{shoe.price} $</div>
                    </div>
                </>
            )
        }
    };

    return (
        <Container>
             <div className="shoe-page">
                <Link to='/'>
                    <BackBtn/>
                </Link> 
                {renderContent()}
            </div>
        </Container>
    );
};

export default ShoePage;