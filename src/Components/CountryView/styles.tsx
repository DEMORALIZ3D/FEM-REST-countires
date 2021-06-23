import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const CountryViewWrapper = styled.div<{
  theme?: Theme;
  flag: string;
}>`
  ${(props) => `
    button {
        background: ${props.theme.layout.background.secondary};
        padding: 10px 20px;
        border: 6px solid ${props.theme.layout.border};
        border-radius: 15px;
        color: ${props.theme.layout.color}
    }
    
    .flag {
      width: 80%;
      height: 400px;
      background: url(${props.flag}) no-repeat center center / cover;
      border-radius: 15px;
      border: 16px solid ${props.theme.layout.border};
      overflow: hidden;
    }
    
    ul {
      list-style: none;
      padding-left: 0;
    }
`}
`;
