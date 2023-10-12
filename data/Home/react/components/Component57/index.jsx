import React from "react";
import styled from "styled-components";
import { ArialroundedmtBoldVeniceBlue32px } from "../../styledMixins";


class Component57 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Component571 className={`component-5-7 ${className || ""}`}>
        <LEARNMORE className="learn-more">{children}</LEARNMORE>
      </Component571>
    );
  }
}

const Component571 = styled.div`
  height: 86px;
  margin-top: 44px;
  margin-right: 2px;
  display: flex;
  padding: 19.5px 61px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 342px;
  background-color: var(--black-haze);
  border-radius: 43px;
  box-shadow: 0px 3px 6px #00000029;

  &.component-5-7.component-5-8 {
    position: absolute;
    top: 721px;
    left: 771px;
    padding: 19.5px 38px;
    transition: all 0.2s ease;
    cursor: pointer;
    margin-top: unset;
    margin-right: unset;
  }
`;

const LEARNMORE = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  min-width: 217px;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const RequestContact = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}

  .component-5-7.component-5-8  & {
    min-width: 263px;
  }
`;

export default Component57;
