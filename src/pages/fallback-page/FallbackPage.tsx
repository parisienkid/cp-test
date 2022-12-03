import fallbackSvg from '../../assets/loader.svg';

import './fallback.scss'

const FallbackPage = () => {
    return (
        <section className="fallback">
            <img src={fallbackSvg} alt="Loader" />
        </section>
    );
};

export default FallbackPage;