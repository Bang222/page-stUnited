import images from '../assets/images/index';
export const menuItems = [
    { id: 1, content: 'Home', to: '/' },
    {
        id: 2,
        content: 'What we do',
        to: '/st-software',
        childrens: [
            { id: 1, content: 'St Software', to: '/st-software' },
            { id: 2, content: 'St Digital', to: '/st-digital' },
            { id: 3, content: 'St Incubation', to: '/st-incubation' },
        ],
    },
    { id: 3, content: 'Who we are', to: '/who-we-are' },
    { id: 4, content: 'Portfolio', to: '/portfolio' },
    { id: 5, content: 'Join us', to: '/join-us' },
    { id: 6, content: `Let's talk`, to: '/lets-talk' },
];

export const bannerItems = [
    { id: 0, content: 'Collaborate to kick-start your software project', img: images.banner1 },
    { id: 1, content: 'We code, we care', img: images.banner2 },
    { id: 2, content: 'We also do digital marketing', img: images.banner3 },
    { id: 3, content: 'And we are incubating startup projects too...', img: images.banner4 },
];
export const incubationItems = [
    {
        id: '639adccbe9b624a9a3aa7293',
        icons: [
            { id: 0, icon: 'fa-brands fa-square-facebook', link: 'https://www.facebook.com/iotcoworkingspace' },
            { id: 1, icon: 'fa-brands fa-linkedin', link: '#' },
        ],
    },
    {
        id: '639adda2e9b624a9a3aa7295',
        icons: [
            { id: 0, icon: 'fa-brands fa-square-facebook', link: 'https://www.facebook.com/nomadspacevietnam' },
            { id: 1, icon: 'fa-brands fa-linkedin', link: '#' },
        ],
    },
    {
        id: '639ade27e9b624a9a3aa7297',
        icons: [
            { id: 0, icon: 'fa-brands fa-square-facebook', link: 'https://www.facebook.com/dienhoatructuyen.vn' },
            { id: 1, icon: 'fa-brands fa-square-twitter', link: 'https://twitter.com/ciaoflora' },
            { id: 3, icon: 'fa-brands fa-square-google-plus', link: '#' },
        ],
    },
    {
        id: '639ade80e9b624a9a3aa7299',
        icons: [
            { id: 0, icon: 'fa-brands fa-square-facebook', link: 'https://www.facebook.com/www.cafedat.vn/' },
            { id: 1, icon: 'fa-brands fa-square-google-plus', link: '#' },
        ],
    },
];
