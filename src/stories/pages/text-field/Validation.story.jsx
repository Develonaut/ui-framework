import React, { useState } from "react";
import { TextField } from "lib";

export const Validation = () => {
  const [value, setValue] = useState("Hello World");
  const handleOnChange = (e) => setValue(e.target.value);
  const error = value === "Hello World";
  const helperText = error ? 'Cannot be "Hello World"' : null;
  return (
    <form className="root root-centered">
      <TextField onChange={handleOnChange} value={value} error={error} />
      <TextField
        onChange={handleOnChange}
        value={value}
        helperText={helperText}
        error={error}
      />
    </form>
  );
};
