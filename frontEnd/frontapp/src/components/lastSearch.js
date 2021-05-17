import React from "react";

export default function LastSearch(props) {
  const { lastReservers } = props;
  
//  console.log('lastReservers',lastReservers);

  return (
    <div className="container-sm mt-4">
      <div className="p-4">
        <div className="bg-light rounded p-4">
          <h4 className="fs-4">Results:</h4>
          {lastReservers.map((value,index) => {
            return (
              <div key={index} className="border rounded p-1 my-2 d-flex flex-column">
                <span>
                <strong className="fs-5">{value.texto}</strong>
                <small className="fw-normal text-secondary">{` (Text ${index+1})`} </small>
                </span>
                <small className="fw-normal">{`Reverse: ${value.text}`}</small>
                <small className="fw-normal">{`Palindrome: ${value.palindrome}`}</small>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
