import { FC } from 'react';

import Container from '../../components/container/Container';
import ShoeCard from '../../components/shoe-card/ShoeCard';

import { shoesData } from '../../core/data/shoesData';



import './catalogPage.scss';

const CatalogPage: FC = () => {

    return (
        <Container>
            <section className="catalog">
                {shoesData.map(item => {
                    return <ShoeCard key={item.id} url={item.url} name={item.name} price={item.price} id={item.id}/>
                })}
            </section>
        </Container>
    );
};

export default CatalogPage;