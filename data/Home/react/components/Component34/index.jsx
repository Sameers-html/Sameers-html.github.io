import React from "react";
import styled from "styled-components";
import { ArialroundedmtRegularNormalVeniceBl1, ArialroundedmtBoldVeniceBlue32px } from "../../styledMixins";


class Component34 extends React.Component {
  render() {
    const { smallBusiness, zoka, resturantCafeSma } = this.props;

    return (
      <Component341>
        <SmallBusiness src={smallBusiness} />
        <Zoka>{zoka}</Zoka>
        <ResturantCafeSma>{resturantCafeSma}</ResturantCafeSma>
      </Component341>
    );
  }
}

const Component341 = styled.div`
  width: 286px;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  padding: 40px 38px;
  align-items: flex-end;
  min-height: 355px;
  background-color: var(--white);
  border-radius: 71px;
`;

const SmallBusiness = styled.img`
  width: 143px;
  height: 143px;
  margin-top: 25px;
  margin-right: 34px;
  object-fit: cover;
`;

const Zoka = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  align-self: center;
  margin-top: 24px;
  margin-left: 2px;
  min-width: 80px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const ResturantCafeSma = styled.p`
  ${ArialroundedmtRegularNormalVeniceBl1}
  min-height: 40px;
  margin-top: 4px;
  min-width: 208px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Component34;
