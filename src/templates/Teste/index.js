import React, { useCallback, useState } from "react";

export const UseCallBackTest = () => {
  const [text, setText] = useState("");

  const onChangeText = useCallback((event) => {
    setText(event.target.value);
  }, []);

  return (
    <div style={{ padding: "10px 25px" }}>
      <input value={text} onChange={onChangeText} />
    </div>
  );
};
