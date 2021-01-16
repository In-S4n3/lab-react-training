import React from "react";

function Greetings(props) {
  let hello = '';
  switch (props.lang) {
    case "fr":
      hello = 'Bonjour'
      break;
    case "de":
      hello = 'Hallo'
      break;
    default:
      hello = 'Olá';
  }
  return <div>{hello} {props.children}</div>;
}

export default Greetings;
