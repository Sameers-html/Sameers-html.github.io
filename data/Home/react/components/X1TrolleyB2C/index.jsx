import React from "react";
import styled from "styled-components";


class X1TrolleyB2C extends React.Component {
  render() {
    const { src, className } = this.props;

    return (
      <X1TrolleyB2C1
        className={`x1-trolley-b2-c ${className || ""}`}
        style={{ backgroundImage: `url(${src})` }}
      ></X1TrolleyB2C1>
    );
  }
}

const X1TrolleyB2C1 = styled.div`
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 11.5px;
  flex: 1;
  margin-bottom: 12.1px;
  width: 207.53851318359375px;
  background-size: cover;
  background-position: 50% 50%;

  &.x1-trolley-b2-c.flock-1 {
    margin-left: 41px;
    margin-right: 41.5px;
    flex: 1;
    max-height: 206.8818359375px;
    height: 206.8818359375px;
    margin-top: unset;
    margin-bottom: unset;
    width: unset;
  }
`;

export default X1TrolleyB2C;
