import React, { ComponentProps } from "react";

const SectionTitle = ({ className, children }: ComponentProps<"h2">) => {
  return (
    <h2
      className={className + " text-3xl lg:text-5xl lg:leading-tight font-bold"}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
