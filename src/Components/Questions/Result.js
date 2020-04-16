import React from 'react';
import PropTypes from 'prop-types'

function Result(props) {
    return (
        <div className="result">
            <h4><span>{props.quizResult}</span></h4>
        </div>
    );
}

Result.propTypes = {
    quizResult: PropTypes.string.isRequired,
};

export default Result;