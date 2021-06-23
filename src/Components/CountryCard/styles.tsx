import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const CountryCardWrapper = styled.div<{
  theme?: Theme;
  selected: boolean;
  flag: string;
}>`
  ${(props) => `
    width: 100%;
    background: ${props.theme.layout.background.secondary};
    border-radius: 15px;
    overflow: hidden;
    border: 6px solid ${props.theme.layout.border};
    
    .country-flag {
        background: url(${props.flag}) no-repeat center center / cover;
        height: 300px;
        width: 100%;
    }
    
    .info-area {
        p:not(:last-of-type) {
            margin-bottom:  0
        }
    }
`}
`;
