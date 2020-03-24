import React from 'react';
import PropTypes from 'prop-types'

function Result(props) {
    return (
        <div className="result">
            <h3>Você deve <span>{props.quizResult}</span>!</h3>
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;