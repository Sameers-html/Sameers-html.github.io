import React from "react";
import X1TrolleyB2C from "../X1TrolleyB2C";
import styled from "styled-components";


class X1Trolly extends React.Component {
  render() {
    const { x1TrolleyB2CProps } = this.props;

    return (
      <X1Trolly1>
        <X1TrolleyB2C src={x1TrolleyB2CProps.src} />
      </X1Trolly1>
    );
  }
}

const X1Trolly1 = styled.div`
  margin-left: 9px;
  margin-right: 11px;
  flex: 1;
  max-height: 232px;
  position: relative;
  height: 232px;
  display: flex;
`;

export default X1Trolly;
