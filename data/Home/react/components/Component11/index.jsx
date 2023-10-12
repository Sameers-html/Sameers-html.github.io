import React from "react";
import styled from "styled-components";
import { ArialroundedmtRegularNormalWhite16p } from "../../styledMixins";


class Component11 extends React.Component {
  render() {
    const { children, className } = this.props;

    return (
      <Component111 className={`component-1-1 ${className || ""}`}>
        <Solutions className="solutions-1">{children}</Solutions>
      </Component111>
    );
  }
}

const Component111 = styled.div`
  position: absolute;
  width: 70px;
  height: 19px;
  top: 0;
  left: 0;
  display: flex;

  &.component-1-1.component-1-1-1 {
    width: 46px;
  }
`;

const Solutions = styled.div`
  ${ArialroundedmtRegularNormalWhite16p}
  margin-top: 1.5px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -3.5px;
  width: 70px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const About = styled.div`
  ${ArialroundedmtRegularNormalWhite16p}

  .component-1-1.component-1-1-1  & {
    width: 46px;
  }
`;

export default Component11;
