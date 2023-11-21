import classes from "./GradientText.module.scss"
import PropTypes from "prop-types";

const GradientText = ({children, className}) => {
    return (
        <span className={`${classes.gradient} ${className}`}>
            {children}
        </span>
    );
};

GradientText.propTypes={
    children:PropTypes.string.isRequired,
    className:PropTypes.string
}
export default GradientText;