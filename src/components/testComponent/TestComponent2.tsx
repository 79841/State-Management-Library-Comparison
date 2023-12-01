import { memo } from "react";
import { RenderingDisplayedWrapper } from "./RenderingDisplayedWrapper";

export const TestComponent2 = memo(function TestComponent2() {
  return (
    <RenderingDisplayedWrapper>test component 2</RenderingDisplayedWrapper>
  );
});
