import React from 'react';
import PropTypes from 'prop-types'

function Result(props) {
    return (
        <div className="result">
            Você <span>{props.quizResult}</span>
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;