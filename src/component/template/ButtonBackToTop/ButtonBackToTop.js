import {useEffect, useState} from "react";
import './ButtonBaktoTop.scss'

const ButtonBackToTop = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () =>{
        if (window.scrollY > 100) {
            setBackToTopButton(true)
        } else {
            setBackToTopButton(false)

        }
        })
    }, [window.scrollY])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",

        })
    }
    return (
        <>{setBackToTopButton &&
            <button className={backToTopButton ? "btn-scroll-up" : "btn-scroll-down"}
                    onClick={scrollUp}
            >
                <i className="fal fa-angle-up icon__scroll-up " style={{
                    font: "normal normal normal 14px/1 FontAwesome",
                    fontSize: "inherit",
                    display: "flex",
                    justifyContent: "center",
                }}/>
            </button>
        }
        </>
    )
}
export default ButtonBackToTop