import * as React from "react";
import { FilterWrapper } from "./styles";
import { regions } from "../../lib/config";

const Filter: React.FC<{
  value: string;
  callback: (query: string) => void;
}> = ({ value, callback }) => {
  const [dropdown, setDropdown] = React.useState(false);

  const onClick = () => {
    setDropdown(!dropdown);
  };

  const onChange = (region) => {
    callback(region);
    setDropdown(!dropdown);
  };

  return (
    <div className="d-flex">
      <FilterWrapper>
        <div
          className="select-button d-flex align-items-center"
          onClick={onClick}
        >
          {value === "" ? "Filter by region" : value}
          <div className="d-flex flex-grow-1 justify-content-end align-items-center">
            <span className="dd-icon material-icons">
              {!dropdown ? "unfold_more" : "unfold_less"}
            </span>
          </div>
        </div>
        {dropdown && (
          <div className="dropdown">
            {regions.map((region) => (
              <div className="dropdown-item" onClick={() => onChange(region)}>
                {region}
              </div>
            ))}
          </div>
        )}
      </FilterWrapper>
      <div className="clear ms-3 mt-3" style={{ width: "25px" }}>
        {value && <div onClick={() => callback("")}>Clear</div>}
      </div>
    </div>
  );
};

export default Filter;
