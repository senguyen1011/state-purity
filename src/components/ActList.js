import React from 'react';

const ActList = (props) => {
  if (props.acts.length) {
    return (
      props.acts.map((act, index) => {
        return (
          <li key={index} className='list-group-item shadow-sm'>
            {act}
          </li>
        );
      })
    );
  }
  else {
    return (
      <li className='list-group-item shadow-sm text-center text-muted'>
        No acts commited of this severity
      </li>
    )
  }
  
}

export default ActList;