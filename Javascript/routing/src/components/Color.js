import React from 'react';

const Color = props => {
  const {string, colorOne, colorTwo} = props;
  if (isNaN(string)) {
    return(
      <h1 style={{ color: colorOne, backgroundColor: colorTwo }}>
        Word is: {string}
      </h1>
    );
  } else {
  return <h1>Number is: {string}</h1>;
  }
};


export default Color;