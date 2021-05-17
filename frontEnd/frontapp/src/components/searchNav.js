import React, { useState } from "react";
import { url_api } from "../config";

export default function SearchNav(props) {
  const [inptext, setInptext] = useState("");
  const { process } = props;

  const gerReverse = (event) => {
    event.preventDefault();

    try {
      const _texto = inptext.trim();
      if (inptext.trim().length > 0) {
        fetch(`${url_api}${_texto}`)
          .then((res) => res.json())
          .then((data) => {
            process({ ...data, texto: _texto });
            setInptext("");
          })
          .catch((err) => console.log("fecth error", err));
      } else {
        alert("Text no valid");
      }
    } catch (error) {
      console.log("try catch", error);
    }
  };

  return (
    <div className="bg-danger">
      <div className="container-sm d-flex justify-content-center ">
        <form
          className="container-sm d-flex justify-content-center my-2"
          onSubmit={gerReverse}
        >
          <input
            type="text"
            className="form-control mx-1 w-75"
            id="impText"
            placeholder="Insert Text"
            required
            onChange={(event) => setInptext(event.target.value)}
            value={inptext}
          />
          <button type="submit" className="btn btn-primary ">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
