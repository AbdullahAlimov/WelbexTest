import classes from './Header.module.scss';
import PropTypes from "prop-types";

import logoImage from "../../assets/logo_welbex.svg";
import telegramIcon from "../../assets/icon/telegram.svg";
import viberIcon from "../../assets/icon/viber.svg";
import whatsappIcon from "../../assets/icon/whatsapp.svg";

const Header = ({ appWidth }) => {
    return (
        <div className={classes.container}>
            <div className={classes.logo}>
                <img src={logoImage} alt="logo" />
            </div>
            <p className={classes.logoDescription}>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            <nav className={classes.navList}>
                <ul>
                    <li>Услуги</li>
                    <li>Виджеты</li>
                    <li>Интеграции</li>
                    <li>Кейсы</li>
                    {appWidth > 780 && <li>Сертификаты</li>}
                </ul>
            </nav>
            <a href="tel:+75555555555" className={classes.telNumber}>+7 555 555-55-55</a>
            <ul className={classes.social}>
                <li>
                    <a href="https://t.me/+75555555555" className={classes.icon} role="button">
                        <img src={telegramIcon} alt="telegram" />
                    </a>
                </li>
                <li>
                    <a href="viber://chat?number=+75555555555" className={classes.icon} role="button">
                        <img src={viberIcon} alt="viber" />
                    </a>
                </li>
                <li>
                    <a href="https://wa.me/+75555555555" className={classes.icon} role="button">
                        <img src={whatsappIcon} alt="whatsapp" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

Header.propTypes = {
    appWidth: PropTypes.number.isRequired
}


export default Header;