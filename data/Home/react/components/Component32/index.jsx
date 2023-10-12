import React from "react";
import styled from "styled-components";
import { ArialroundedmtRegularNormalVeniceBl1, ArialroundedmtBoldVeniceBlue32px } from "../../styledMixins";


class Component32 extends React.Component {
  render() {
    const { smallBusiness, surname, resturantCafeSma } = this.props;

    return (
      <Component321>
        <OverlapGroup>
          <SmallBusiness src={smallBusiness} />
          <Surname>{surname}</Surname>
          <ResturantCafeSma>{resturantCafeSma}</ResturantCafeSma>
        </OverlapGroup>
      </Component321>
    );
  }
}

const Component321 = styled.div`
  height: 355px;
  margin-left: 73px;
  display: flex;
  align-items: flex-start;
  min-width: 286px;
  background-color: var(--white);
  border-radius: 71px;
`;

const OverlapGroup = styled.div`
  width: 286px;
  display: flex;
  flex-direction: column;
  padding: 40px 23px;
  align-items: center;
  min-height: 355px;
  background-color: var(--white);
  border-radius: 71px;
`;

const SmallBusiness = styled.img`
  width: 143px;
  height: 143px;
  margin-top: 25px;
  margin-right: 1px;
  object-fit: cover;
`;

const Surname = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  align-self: flex-end;
  margin-top: 24px;
  min-width: 238px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const ResturantCafeSma = styled.p`
  ${ArialroundedmtRegularNormalVeniceBl1}
  min-height: 40px;
  margin-top: 4px;
  margin-left: 2px;
  min-width: 208px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Component32;
