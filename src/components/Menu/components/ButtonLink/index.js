import React from 'react'

function ButtonLink(props) {
  return (
    <a 
      href={props.className.href}
      className={props.className}
    >
      {props.children}
    </a>
  );
}

export default ButtonLink;