import React from 'react';

export const Favorite = (props) => {
  const storedPacks = JSON.parse(localStorage.getItem('storePacks')) || [];

  return (

    props.view ? (
    
      props.yes
    
    ) : (
      props.not
    )
     
  )
};

