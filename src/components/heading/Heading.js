import heading from '../../styles/core-components/heading';
import PropTypes from 'prop-types';
function Heading (){
    return(
        <div className="card-content" style={heading}></div>
    )
};
Heading.propTypes ={
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    marginBottom: PropTypes.string,
}

export default Heading;