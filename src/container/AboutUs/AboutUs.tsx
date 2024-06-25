import Footer from "../../components/Footer/Footer";
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="row about-pic vh-100">
            <h2 className="col-12 text-center mt-4 text-white">About Profession</h2>
            <div className="col-5 card m-2 p-2">
                <span>
                    Мы начали свою работу Системными администраторами в 2015 году. Сначала мы обслуживали небольшие офисы.
                    Меняли windows,
                    устанавливали и настраивали компьютеры. Продавали новые. Потом мы начали брать более объемные заказы,
                    Делали все тоже самое, только уже в больших объемах. И наконец к нам обратился человек с крупным заказом
                    и сказал, что хотел бы компьютерный клуб. Потом был карантин. И после карантина мы начали уже заниматься
                    клубами компьютерными в приоритете.
                </span>
            </div>
            <div className="col-5 card m-2 p-2">
                <span>
                    Первые компьютерные клубы давались нелегко, так как были проблемы в их настройке. Далее уже было проще.
                    Мы стали достаточно популярны в городе и нас позвали в Джалал-Абад собрать и настроить клуб + Антикино.
                    Клуб назывался genius, с ним было очень много мароки так как проектировали его други ребята, возможно без опыта
                    и это вызывало у нас много проблем. Но мы успешно запустили этот клуб.
                    Мы собрали под ключь такие клубы как: CyberGrizzly, Tron, Genius, Secret, Enigma, Vortex помогли в
                    донастройке клуба Hatori.
                    Работаем в этом направлении и по сей день, в проекте еще 3 клуба.
                </span>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutUs;