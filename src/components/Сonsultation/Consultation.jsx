import Button from '../UI/Button/Button';
import GradientText from '../UI/GradientText/GradientText';
import PropTypes from 'prop-types';
import classes from './Consultation.module.scss';

const Consultation = ({ appWidth }) => {
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.titleBlock}>
                    <p className={classes.title}>
                        Зарабатывайте больше <br />
                        {<GradientText>с WELBEX</GradientText>}
                    </p>
                    <p className={classes.postTitle}>
                        Развиваем и контролируем продажи за вас
                    </p>
                </div>
                <div className={classes.info}>
                    <p className={classes.title}>
                        Вместе c <GradientText>бесплатной консультацией</GradientText> мы дарим:
                    </p>
                    <ul className={classes.gifts}>
                        <li>
                            <p className={classes.name}>{appWidth > 720 ? "Виджеты" : "30 виджетов"}</p>
                            <p className={classes.description}>30 готовых решений</p>
                        </li>
                        <li>
                            <p className={classes.name}>Dashboard</p>
                            <p className={classes.description}>с показателями вашего бизнеса</p>
                        </li>
                        <li>
                            <p className={classes.name}>Skype Аудит</p>
                            <p className={classes.description}>отдела продаж и CRM системы</p>
                        </li>
                        <li>
                            <p className={classes.name}>{appWidth > 720 ? "35 дней" : "Месяц аmoCRM"}</p>
                            <p className={classes.description}>использования CRM</p>
                        </li>
                    </ul>
                    {appWidth > 720 &&
                        <Button>Получить консультацию</Button>
                    }
                </div>
            </div>
        </div>
    );
};

Consultation.propTypes={
    appWidth: PropTypes.number.isRequired,
}

export default Consultation;