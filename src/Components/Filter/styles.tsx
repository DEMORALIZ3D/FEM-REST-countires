import styled from "@emotion/styled";
import { Theme } from "@emotion/react";

export const FilterWrapper = styled.div<{
  theme?: Theme;
}>`
  width: 300px;
  ${(props) => `
  border: 6px solid ${props.theme.layout.border};
  border-radius: 10px;
  user-select: none;
  
  overflow: hidden;
  cursor: pointer;
  
      .select-button {
        position: relative;
        background: ${props.theme.layout.background.secondary};
        padding: 10px;
        border-radius: 5px;
      }
      
      .dropdown {
        position: absolute;
        border-radius: 5px;
        background: ${props.theme.layout.background.secondary};
        padding: 10px 0;
        width: 289px;
        margin-top: 5px;
        font-size: 14px;
      }
      
      .dropdown-item {
        color: ${props.theme.layout.color};
      }
      
      .dropdown-item:hover {
        background:  ${props.theme.layout.background.primary};
      }
  `}
`;
