import axios from '../utils/AxiosCustomize'
//--------------------Bang------------------------
const getAllDataFE02 = () => {
    return axios.get('fe02-typical')
}
const getAllDataFE07Div1 = () => {
    return axios.get('fe07-div1')
}
const getAllDataFE07Div2 = () => {
    return axios.get('fe07-div2')
}

//----------------------------------------------------//
//--------------------Digital------------------------//
const getAllDataPortfolio = () => {
    return axios.get('portfolio')
}

//--------------------Digital------------------------//
const getAllDataStDigitalIcon = () => {
    return axios.get('st-digital-icon')
}
const getAllDataStDigitalImage = () => {
    return axios.get('st-digital-image')
}

//----------------------------------------------------//

//--------------------Partner------------------------//

const getAllDataPartner =() =>{
    return axios.get('partner')
}

//---------------------------------------------------//

//--------------------Join Us-----------------------//
const getAllDataJoinUs =() =>{
    return axios.get('join-us')

//--------------------------------------------------//

//--------------------Develop----------------------  //
}
const getAllDataWedevelop =() =>{
    return axios.get('we-develop')
}

//--------------------------------------------------- //

//--------------------Incubation----------------------//
const getAllDataIncubationText =() =>{
    return axios.get('incubation-1')
}
const getAllDataIncubation =() =>{
    return axios.get('incubation')
//------------------------------------------------------//
}
//--------------------Who We Are----------------------//
const getAllDataDescription =() =>{
    return axios.get('who-we-are-d1')
}
const getAllDataDescription2 =() => {
    return axios.get('who-we-are-d2')
}
const getAllDataWhoWeAreUser =() => {
    return axios.get('who-we-are-user')
}

//----------------------------------------------------//

export {getAllDataFE02,getAllDataFE07Div1,getAllDataFE07Div2,getAllDataPortfolio,
        getAllDataStDigitalIcon,getAllDataStDigitalImage,getAllDataPartner,
        getAllDataJoinUs,getAllDataWedevelop,getAllDataIncubationText,getAllDataIncubation
        ,getAllDataDescription2,getAllDataDescription,getAllDataWhoWeAreUser
}