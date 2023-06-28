import {useEffect, useState} from "react";
import {Row , Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./wedevelop.scss";
import {getAllDataWedevelop} from "../../../service/Apiservice";

const Wedevelop = () => {
    const [list,setList] = useState([])

    useEffect(() => {
        fetchListWedevelop();
    }, []);
    const fetchListWedevelop = async () => {
        let res = await getAllDataWedevelop();
        setList(res);
    };
    return (
        <div className="wdl_container">	
            <Row className="cover--container">
                <Col className="children--container">
                    <Row className="children--cover">
                        <Col className="children--cover__col ">
                                <h2 className="title--wedevelop">
                                    WE DEVELOP | WE SUPPORT | WE IMPROVE
                                </h2>
                                <h3 className="subtitle--wedevelop">
                                    Launch your ideas. Execute your plans. Maximize project success.
                                </h3>                            
                        </Col>
                    </Row>
                    <Row className="service--container" >
                                {list && list.map((item,index) =>{
                                    return(
                                        <Col className="service--block" xs={12} sm={4} md={4} key={item._id}>
                                            <Row className="service--icon">
                                                <img alt="" src={item.img}/>
                                            </Row>
                                            <Row className="service--content">
                                                <h3 className="service--title">  {item.title}</h3>
                                                <p className="service--desc"> {item.description}</p>
                                                <a  className="service--link" href= "#" > {item.link}</a>
                                            </Row>
                                        </Col>
                                    )})}
                    </Row>
                </Col>         
            </Row>
        </div>
    )
}

export default Wedevelop;