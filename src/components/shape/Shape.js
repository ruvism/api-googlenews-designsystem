import shape from '../../styles/core-components/shape';
import PropTypes from 'prop-types';
function Shape (){
    return(
        <div className="card-shape" styles={shape}> </div>
    )
};

Shape.propTypes={
    borderRadius: PropTypes.string,
    padding: PropTypes.string,
    borderWidth: PropTypes.string,
    borderColor: PropTypes.string,
    backgroundColor: PropTypes.string
}


export default Shape;