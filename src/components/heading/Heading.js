import heading from '../../styles/core-components/heading';
import PropTypes from 'prop-types';

function Heading (){
    return(
        <div className="heading" styles={heading}>
          Título da Notícia
        </div>
    )
};

export default Heading;
Heading.propTypes ={
    fontSize: PropTypes.string,
    lineHeight: PropTypes.string,
    fontFamily: PropTypes.string,
    fontWeight: PropTypes.number,
    color: PropTypes.string,
    marginBottom: PropTypes.string,
}