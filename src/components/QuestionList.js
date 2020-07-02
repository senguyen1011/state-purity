import React, { Component } from 'react';
import PurityQuestions from '../PurityQuestions';

class QuestionList extends Component {
  handleCheck = (e, question) => {
    let content = question.content;
    
    if (content === '?') {
      content = 'Sex number lol';
    }
    else {
      content = content.slice(0,-1);
    }

    if (e.target.checked) {
      this.props.onCheck(question.weight, content);
    }
    else {
      this.props.onCheck(question.weight * -1, content);
    }
  }

  render() {
    return (
      PurityQuestions.map((question, index) => {
        return (
          <label key={question.id} className='list-group-item list-group-item-action d-flex align-items-center pl-2 shadow-sm'>
            <span key={question.id} className='question-number'>{index + 1}</span>
            <input 
              key={question.id} 
              className='form-check-input mr-3' type='checkbox' 
              value={question.weight} onChange={ (e) => this.handleCheck(e, question) } 
            />
            {question.content}
          </label>
        );
      })
    );
  }
}

export default QuestionList;