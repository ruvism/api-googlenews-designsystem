import paragraph from '../../styles/core-components/paragraph';
import PropTypes from 'prop-types';
function Paragraph () {
    return(
        <div className="card-content" style={paragraph}></div>
    )
};

Paragraph.propTypes={
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    marginBottom: PropTypes.string,
}

export default Paragraph;