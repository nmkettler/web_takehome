import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { clearFields } from "../madlibs";

import Prompt from './Prompt';

import './paneStyles.css'

const App = ({ clearAllFields, essayText, fieldOrder, allFieldsAnswered }) => {
  const [ isEditing, setIsEditing ] = useState(false);

  const editableEssayText = () => {
    return essayText.replace(/(<([^>]+)>)/ig, '');
  }

  const startOver = () => {
    clearAllFields();
    setIsEditing(!isEditing);
  }

  return (
    <>
      {!isEditing ?
        <>
          <div className='main-pane'>
            <h3 className='title'>About Me</h3>
            {fieldOrder.map(fieldName => {
              return (
                <Prompt key={fieldName} fieldName={fieldName} />
              );
            })}
          </div>
          <div className='right-pane'>
            <h3 className='title'>Your essay text</h3>
            <div className='preview-text' dangerouslySetInnerHTML={{__html: essayText}}></div>
            {allFieldsAnswered &&
              <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
            }
          </div>
        </>
        :
        <div className='edit-pane'>
          <div className='edit-container'>
            <div className='edit-title'>Your essay text</div>
            <textarea className='preview-box' value={editableEssayText()} onChange={e => console.log(e)} />
            <button onClick={() => startOver()}>Start Over</button>
          </div>
        </div>
      }
      
    </>
  );
}

App.propTypes = {
  clearAllFields: PropTypes.func.isRequired,
  essayText: PropTypes.string.isRequired,
  fieldOrder: PropTypes.array.isRequired,
  allFieldsAnswered: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    clearAllFields: () => dispatch(clearFields())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
