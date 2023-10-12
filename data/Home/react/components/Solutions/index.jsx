import React from "react";
import Component11 from "../Component11";
import styled from "styled-components";


class Solutions extends React.Component {
  render() {
    const { line1, className, component11Props } = this.props;

    return (
      <Solutions1 className={`solutions ${className || ""}`}>
        <OverlapGroup2 className="overlap-group2">
          <Component11 className={component11Props.className}>{component11Props.children}</Component11>
          <Line1 className="line-1" src={line1} />
        </OverlapGroup2>
      </Solutions1>
    );
  }
}

const Solutions1 = styled.div`
  position: absolute;
  height: 19px;
  top: 46px;
  left: 1615px;
  display: flex;
  align-items: flex-end;
  min-width: 68px;

  &.solutions.about {
    left: 1736px;
    min-width: 44px;
  }
`;

const OverlapGroup2 = styled.div`
  width: 70px;
  height: 20px;
  position: relative;
  margin-bottom: -1px;
`;

const Line1 = styled.img`
  position: absolute;
  width: 57px;
  height: 2px;
  top: 18px;
  left: 0;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  .solutions.about & {
    width: 46px;
  }
`;

const Line11 = styled.img`
  .solutions.about & {
    width: 36px;
  }
`;

export default Solutions;
