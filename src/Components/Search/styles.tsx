import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const SearchWrapper = styled.div<{
  theme?: Theme;
}>`
  ${(props) => `
      background: ${props.theme.layout.background.secondary};
      padding-left: 15px;
      border-radius: 10px;
      width: 500px;
      border: 6px solid ${props.theme.layout.border};
      user-select: none;
      
      .search-icon {
        margin: 10px 0;
        color: ${props.theme.layout.placeholder};
      }
      
      &:focus {
         border: 6px solid ${props.theme.layout.border};
      }
  
      input {
        background: none;
        border: none;
        width: 100%;
        min-height: 42px;
        color: ${props.theme.layout.color};
        font-weight: 600;
        padding: 0 10px;
      }
      
      input:focus {
        outline: none;
      }
      
      input::placeholder {
        font-weight: 600;
        color: ${props.theme.layout.placeholder};
      }
  `}
`;
