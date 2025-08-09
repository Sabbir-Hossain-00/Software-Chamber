import React, { forwardRef } from "react";

export const IconBox = forwardRef(({ src, alt = "", size = "w-9" }, ref) => {
  return (
    <span
      ref={ref}
      className="rounded p-2 bg-black w-fit"
      style={{
        boxShadow: "inset 0 2px 10px 4px rgba(13, 148, 136, 0.5)",
      }}
    >
      <img className={size} src={src} alt={alt} />
    </span>
  );
});
