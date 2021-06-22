import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const HeaderWrapper = styled.div<{
  theme?: Theme;
}>`
  background: ${(props) => props.theme.layout.background.secondary};
  padding: 15px 25px;
  box-shadow: 1px -20px 20px 17px rgb(26 26 26);
`;
