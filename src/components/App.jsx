import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

// 1. create Entry Component
// 2. Create props to replace data
// 3. Map through emojipedia array and render Entry components

// console.log(emojipedia);

function createCard(emojipedia) {
  return (
    <Entry
      //emojipedia.oo: oo = render enter
      key={emojipedia.key}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      {/* dictionary list */}
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
