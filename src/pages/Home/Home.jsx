import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Consultation from "../../components/Сonsultation/Consultation";
import PropTypes from 'prop-types';
import classes from "./Home.module.scss"

const Home = ({appWidth}) => {
    return (
        <div className={classes.container}>
            <Header appWidth={appWidth}></Header>
            <div className={classes.content}>
                <Consultation appWidth={appWidth}></Consultation>
            </div>
            <Footer></Footer>
        </div>
    );
};

Home.propTypes={
    appWidth:PropTypes.number.isRequired
}

export default Home;