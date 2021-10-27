import React, { useReducer } from "react";

export function Checkbox() {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <label htmlFor="checkbox">
        {checked
          ? "Perfect! One of our salepersons would be in touch"
          : "Click Here"}
      </label>
      <input id="checkbox" type="checkbox" value="checked" onChange={toggle} />
    </>
  );
}
