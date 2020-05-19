import React, { useCallback, useRef, useEffect, useState } from "react";
import PugModel from "./models/pug";

// Clean functional component.
export function Pug({ pugUrl, onNewPug }) {
  return (
    <div>
      <button onClick={onNewPug}>new pug</button>
      <span>{pugUrl}</span>
      <img alt="current pug" src={pugUrl} />
    </div>
  );
}

// Adapter component to adapt Backbone world to React.
export default function PugAdapter({ pugModel = new PugModel() }) {
  // Avoid recreating a new model every render.
  const model = useRef(pugModel).current;

  const [pugUrl, setPugUrl] = useState(model.get("message"));

  // Avoid recreating a new function every render.
  const handleChange = useCallback(() => {
    setPugUrl(model.get("message"));
  }, []);

  useEffect(() => {
    model.on(`change:message`, handleChange);

    model.fetch();
    return () => {
      // Remove this component's specific handler in case model is used elsewhere.
      model.off(`change:message`, handleChange);
    };
  }, []);

  return <Pug pugUrl={pugUrl} onNewPug={() => model.fetch()} />;
}
