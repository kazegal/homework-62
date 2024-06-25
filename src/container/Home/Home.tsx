import Footer from "../../components/Footer/Footer";
import "./Home.css"

const Home = () => {
    return (
        <div className="row vh-100" id="home-page">
            <div className="col-12 text-center text-white mt-5 mb-5">
                <h1 className="fs-1">Нужен компьютерный клуб?</h1>
                <h3 className="fs-1">Мы вам поможем</h3>
                <span className="fs-5 opacity-50 d-block">Выезд на объект, замер и рассчет посадочных мест,
                    подготовка комплектуюющих и сборка
                </span>
                <span className="fs-5 opacity-50 mb-5">
                    с гарантией качества оказываемых услуг.
                </span>
                <div className="home-info">
                    <img className="home-pic"
                         src="https://dreamisland.ru/upload/iblock/2dd/z9u4phhnhizq0ztzxg2dgcf5q1xlxfr3.jpg"
                         alt="ny"/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;