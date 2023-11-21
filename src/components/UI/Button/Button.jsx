import classes from "./Button.module.scss"
import PropTypes from "prop-types";

const Button = ({ children, ...restProps }) => {
    return (
        <div className={classes.button}>
            <button {...restProps}>{children}</button>
        </div>
    );
};

Button.propTypes={
    children:PropTypes.string.isRequired
}

export default Button;