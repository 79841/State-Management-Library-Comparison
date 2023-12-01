"use client";
import { PropsWithChildren, memo, useEffect, useState } from "react";

type TRenderingDisplayedWrapperProps = PropsWithChildren;
export const RenderingDisplayedWrapper = function RenderingDisplayedWrapper({
  children,
}: TRenderingDisplayedWrapperProps) {
  const [borderColor, setBorderColor] = useState("border-gray-700");

  useEffect(() => {
    setBorderColor((prev) => "border-sky-300");
    setTimeout(() => setBorderColor((prev) => "border-gray-700"), 500);
  });
  return (
    <div className={`m-2 border-2 border-solid rounded-md ${borderColor}`}>
      {children}
    </div>
  );
};
