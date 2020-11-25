import { getAllByDisplayValue } from "@testing-library/react";
import React from "react";

function Phrase({ number, contents }) {
  return (
    <div>
      <span>{number}</span>
      {contents}
    </div>
  );
}

export default Phrase;
