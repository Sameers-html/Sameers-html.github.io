import React from "react";
import styled from "styled-components";


class Mobile extends React.Component {
  render() {
    const { untitled11, untitled12 } = this.props;

    return (
      <Mobile1>
        <UntitledContainer>
          <Untitled1 src={untitled11} />
          <Untitled11 src={untitled12} />
        </UntitledContainer>
      </Mobile1>
    );
  }
}

const Mobile1 = styled.div`
  position: absolute;
  height: 1021px;
  top: 68px;
  left: 891px;
  display: flex;
  align-items: flex-start;
  min-width: 909px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translate(0, -9px);
  }
`;

const UntitledContainer = styled.div`
  width: 909px;
  height: 1021px;
  position: relative;
`;

const Untitled1 = styled.img`
  position: absolute;
  width: 909px;
  height: 894px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Untitled11 = styled.img`
  position: absolute;
  width: 909px;
  height: 894px;
  top: 127px;
  left: 0;
  object-fit: cover;
`;

export default Mobile;
