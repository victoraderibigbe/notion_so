import React from "react";

const Star = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m668-340 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM294-247l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM173-80l65-281L20-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L173-80Zm247-340Z"
      />
    </svg>
  );
};

export default Star;
