import React from "react";
import styled from "styled-components";


class X1Pay extends React.Component {
  render() {
    const { src } = this.props;

    return <X1Pay1 style={{ backgroundImage: `url(${src})` }}></X1Pay1>;
  }
}

const X1Pay1 = styled.div`
  margin-right: 0;
  flex: 1;
  max-height: 200px;
  height: 200px;
  background-size: cover;
  background-position: 50% 50%;
`;

export default X1Pay;
