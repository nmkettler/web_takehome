import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './promptStyles.css';
import { submitField } from "../madlibs";
import { FIELDS } from '../constants';

const Prompt = ({ fieldName, submitChangedField }) => (
  <div className='prompt-wrapper'>
    <div className='prompt-label' htmlFor={fieldName}>{FIELDS[fieldName]}</div>
    <input
      className='prompt-input'
      type="text"
      id={fieldName}
      onBlur={(e) => submitChangedField({ id: fieldName, answer: e.target.value })}
    />
  </div>
)

Prompt.propTypes = {
  submitChangedField: PropTypes.func.isRequired,
  fieldName: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    submitChangedField: (id, answer) => dispatch(submitField(id, answer))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Prompt);