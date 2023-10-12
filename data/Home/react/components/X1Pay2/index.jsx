import React from "react";
import styled from "styled-components";


class X1Pay2 extends React.Component {
  render() {
    const { className } = this.props;

    return <X1Pay className={`x1-pay-2 ${className || ""}`}></X1Pay>;
  }
}

const X1Pay = styled.div`
  width: 65px;
  height: 64px;
  align-self: flex-end;
  margin-left: 151px;
  background-image: url(/img/1pay-1@1x.png);
  background-size: cover;
  background-position: 50% 50%;

  &.x1-pay-2.x1-pay-3 {
    margin-right: 5px;
    align-self: unset;
    margin-left: unset;
  }
`;

export default X1Pay2;
