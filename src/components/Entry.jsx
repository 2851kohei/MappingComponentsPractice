import React from "react";

function Entry(props) {
  return (
    <div className="term">
      {/* dictionary term */}
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {/* emoji = <Entry emoji /> */}
          {props.emoji}
        </span>
        {/* name = <Entry name /> */}
        <span>{props.name}</span>
      </dt>
      {/* dictionary detail */}
      {/* meaning = <Entry meaning /> */}
      <dd>{props.meaning}</dd>
    </div>
  );
}

export default Entry;
