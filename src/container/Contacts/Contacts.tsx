import Footer from "../../components/Footer/Footer";
import "./Contacts.css"

const Contacts = () => {
    return (
        <div id="contacts-pic" className="vh-100">
            <h2 className="text-center pt-5 mb-5">Contacts:</h2>
            <p className="text-center">Phone: 0(706)66-44-43</p>
            <div className="contacts-map">
                <div style={{position: "relative", overflow: "hidden"}}><a
                    href="https://yandex.ru/maps/10309/bishkek/?utm_medium=mapframe&utm_source=maps"
                    style={{color: "#eee", fontSize: "12px", position: "absolute", top: "0px"}}>Бишкек</a><a
                    href="https://yandex.ru/maps/10309/bishkek/house/Y00YcAVhSUUFQFpofXRycHlhbA==/?ll=74.620954%2C42.831281&utm_medium=mapframe&utm_source=maps&z=17.24"
                    style={{color: "#eee", fontSize: "12px", position: "absolute", top: "14px"}}>Улица Юнусалиева, 177/2
                    —
                    Яндекс Карты</a>
                    <iframe title="Map"
                            src="https://yandex.ru/map-widget/v1/?ll=74.620954%2C42.831281&mode=whatshere&whatshere%5Bpoint%5D=74.620880%2C42.831389&whatshere%5Bzoom%5D=17&z=17.24"
                            width="560" height="400" style={{position: "relative"}}></iframe>
                </div>
            </div>
            <div className="mt-5 text-bg-light">
                <Footer/>
            </div>
        </div>
    );
};

export default Contacts;