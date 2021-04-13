import React from "react";
import { useParams } from "react-router";

function DetailedInfo({ i }) {
  const { procurement } = useParams();

  console.log({ i });

  return (
    <div>
      <h1>hello</h1>
      <button>Meld interesse</button>
      <div>
        <h3>Kunngjøringsdetaljer</h3>
        <p>kunngjøringsboks</p>
      </div>
      <div>
        <h3>Beskrivelse av anbud</h3>
        <p>text</p>
      </div>
      <div>
        <h3>Dokumenter</h3>
        <p>text</p>
      </div>
      <div>
        <h3>Behov for sortiment</h3>
        <p>text</p>
      </div>
      <button>Meld interesse</button>
    </div>
  );
}

export default DetailedInfo;
