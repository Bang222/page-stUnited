//Layouts
import Home from '../pages/Home/home';
import StDigitalPage from '../pages/STDigital/stDigital';
import Portfolio from '../pages/Portfolio/portforlio';
import WhoWeAre from '../pages/WhoWeAre/index';
import JoinUsPage from '../pages/JoinUsPage/JoinUsPage';
import StSortWarePage from '../pages/STSoftWarePage/STSoftWarePage';
import STIncubation from '../pages/STIncubation/STIncubation';
import LetsTalkPage from '../pages/LetsTalk/index';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/st-software', component: StSortWarePage },
    { path: '/st-digital', component: StDigitalPage },
    { path: '/st-incubation', component: STIncubation },
    { path: '/portfolio', component: Portfolio },
    { path: '/who-we-are', component: WhoWeAre },
    { path: '/join-us', component: JoinUsPage },
    { path: '/lets-talk', component: LetsTalkPage },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
