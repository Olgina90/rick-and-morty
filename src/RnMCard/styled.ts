"use client";

import styled, { css } from "styled-components";

type CardWrapperProps = {
  color?: "red" | "pink" | "green" | "yellow";
};
export const CardWrapper = styled("div")<CardWrapperProps>`
  ${({ color }) =>
    color !== undefined
      ? css`
          background-color: ${color};
        `
      : undefined}
  padding: 8px
`;
