import subtitle from '../../styles/core-components/subtitle';
import PropTypes from 'prop-types';

function Subtitle (){
    return(
        <div className="subtitle" style={subtitle}></div>
    )
};

Subtitle.propTypes={
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    marginBottom: PropTypes.string,
};

export default Subtitle;