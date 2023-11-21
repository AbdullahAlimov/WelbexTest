import classes from './Footer.module.scss';

import telegramIcon from "../../assets/icon/telegram.svg";
import viberIcon from "../../assets/icon/viber.svg";
import whatsappIcon from "../../assets/icon/whatsapp.svg";

const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.aboutCompany}>
                    <p className={classes.title}>О компании</p>
                    <ul className={classes.list}>
                        <li>Партнёрская программа</li>
                        <li>Вакансии</li>
                    </ul>
                </div>
                <div className={classes.menu}>
                    <p className={classes.title}>Меню</p>
                    <ul className={classes.list}>
                        <li>Расчёт стоимости</li>
                        <li>Кейсы</li>
                        <li>Услуги</li>
                        <li>Благодарственные письма</li>
                        <li>Виджеты</li>
                        <li>Сертификаты</li>
                        <li>Интеграции</li>
                        <li>Блог на Youtube</li>
                        <li>Наши клиенты</li>
                        <li>Вопрос / Ответ</li>
                    </ul>
                </div>
                <div className={classes.contact}>
                    <p className={classes.title}>Контакты</p>
                    <ul className={classes.list}>
                        <li>
                            <a href="tel:+75555555555" className={classes.telNumber}>+7 555 555-55-55</a>
                        </li>
                        <div className={classes.iconGroup}>
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
                        </div>
                        <li>
                            <address>Москва, Путевой проезд 3с1, к 902</address>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={classes.copyright}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <a className={classes.link} href="#">Политика конфиденциальности</a>
            </div>
        </div>
    );
};

export default Footer;