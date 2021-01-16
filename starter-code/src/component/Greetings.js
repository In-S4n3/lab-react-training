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
  return <div style={{ border: "1px solid black", margin: "10px", padding:"5px"}}>{hello} {props.children}</div>;
}

export default Greetings;
