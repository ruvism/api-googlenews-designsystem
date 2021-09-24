import button from '../../styles/core-components/button';
import PropTypes from 'prop-types';

function Button (){

    return(
        <button className="button-default" styles={button}>
            Quero ler!
        </button>
    )
};

Button.propType ={
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    borderRadius: PropTypes.string,
    padding: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundHover: PropTypes.string
}

export default Button;