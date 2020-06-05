import React from 'react';

function Table(props){

  const partners = props.partners;
  const listItems = partners.map((partner, index) => 
  <li key={index}>
    {partner}
  </li>
  );

  return(
    <div>
      <ul>{listItems}</ul>
    </div>
  )
}
export default Table;