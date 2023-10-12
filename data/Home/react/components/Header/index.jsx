import React from "react";
import styled from "styled-components";


class Header extends React.Component {
  render() {
    const { src } = this.props;

    return (
      <Header1>
        <AirbusXOConnectedFleet src={src} />
      </Header1>
    );
  }
}

const Header1 = styled.div`
  position: absolute;
  width: 1920px;
  height: 996px;
  top: 0;
  left: 0;
  display: flex;
  background: linear-gradient(66.08deg, #125c8f 19.53%, #06198d 79.04%, #06178d 89.59%);
`;

const AirbusXOConnectedFleet = styled.img`
  flex: 1;
  width: 1920px;
  border-radius: 0px 0px 150px 150px;
  object-fit: cover;
`;

export default Header;
