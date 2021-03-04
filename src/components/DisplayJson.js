import React from "react";

function DisplayJson({ totalValuation }) {
  return (
    <div
      className="display-json"
      style={{
        display: totalValuation.length === 0 ? "none" : "block",
      }}
    >
      <pre>{JSON.stringify(totalValuation, null, 4).replace(/"/g, "")}</pre>
    </div>
  );
}

export default DisplayJson;
