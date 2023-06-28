import './Home.module.scss';
import Banner from '../../component/template/Banner/index';
import Typical from '../../component/template/Typical/Typical';
import Wedevelop from '../../component/template/WeDevelop/wedevelop';
import Partner from '../../component/template/Partners/partner';
import { Helmet } from 'react-helmet';

function Home() {
    return (
        <>
            <Helmet>
                <title>ST United – United to grow up</title>
            </Helmet>
            <Banner />
            <Typical />
            <Wedevelop />
            <Partner />
        </>
    );
}

export default Home;
