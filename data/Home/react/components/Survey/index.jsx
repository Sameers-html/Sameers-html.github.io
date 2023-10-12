import React from "react";
import Component32 from "../Component32";
import Component34 from "../Component34";
import styled from "styled-components";
import {
  ArialroundedmtRegularNormalVeniceBl1,
  ArialroundedmtBoldVeniceBlue40px,
  ArialroundedmtBoldVeniceBlue32px,
} from "../../styledMixins";


class Survey extends React.Component {
  render() {
    const {
      whichOneAreYou,
      enterprise1,
      place1,
      fmcgCgp1,
      rider1,
      rider2,
      motorBikeTruck1,
      consumer1,
      consumer2,
      lookingForABetter1,
      shitoSito,
      enterprise2,
      hamdy,
      fmcgCgp2,
      rider3,
      place2,
      motorBikeTruck2,
      consumer3,
      sameer,
      lookingForABetter2,
      component32Props,
      component34Props,
    } = this.props;

    return (
      <Survey1>
        <OverlapGroup5>
          <Group17>
            <WhichOneAreYou>{whichOneAreYou}</WhichOneAreYou>
            <FlexRow>
              <Group2>
                <Enterprise src={enterprise1} />
                <Place>{place1}</Place>
                <FMCGCGP>{fmcgCgp1}</FMCGCGP>
              </Group2>
              <Component32
                smallBusiness={component32Props.smallBusiness}
                surname={component32Props.surname}
                resturantCafeSma={component32Props.resturantCafeSma}
              />
              <Group4>
                <Rider src={rider1} />
                <Rider1>{rider2}</Rider1>
                <MotorBikeTruck>{motorBikeTruck1}</MotorBikeTruck>
              </Group4>
              <Group5>
                <Consumer src={consumer1} />
                <Consumer1>{consumer2}</Consumer1>
                <LookingForABetter>{lookingForABetter1}</LookingForABetter>
              </Group5>
            </FlexRow>
          </Group17>
          <Group19>
            <ShitoSito>{shitoSito}</ShitoSito>
            <FlexRow>
              <Group21>
                <Rider src={enterprise2} />
                <Hamdy>{hamdy}</Hamdy>
                <FMCGCGP>{fmcgCgp2}</FMCGCGP>
              </Group21>
              <Component34
                smallBusiness={component34Props.smallBusiness}
                zoka={component34Props.zoka}
                resturantCafeSma={component34Props.resturantCafeSma}
              />
              <Group4>
                <Rider src={rider3} />
                <Place1>{place2}</Place1>
                <MotorBikeTruck>{motorBikeTruck2}</MotorBikeTruck>
              </Group4>
              <Group5>
                <Consumer src={consumer3} />
                <Sameer>{sameer}</Sameer>
                <LookingForABetter>{lookingForABetter2}</LookingForABetter>
              </Group5>
            </FlexRow>
          </Group19>
          <Rectangle28></Rectangle28>
        </OverlapGroup5>
      </Survey1>
    );
  }
}

const Survey1 = styled.div`
  position: absolute;
  height: 527px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 3304px;
`;

const OverlapGroup5 = styled.div`
  width: 3304px;
  height: 527px;
  position: relative;
`;

const Group17 = styled.div`
  position: absolute;
  width: 1656px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 32px 146px;
  align-items: flex-end;
  min-height: 527px;
  background-color: var(--black-haze);
`;

const WhichOneAreYou = styled.div`
  ${ArialroundedmtBoldVeniceBlue40px}
  min-height: 48px;
  align-self: center;
  margin-left: 3px;
  min-width: 383px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 355px;
  position: relative;
  margin-top: 45px;
  display: flex;
  align-items: flex-start;
  min-width: 1363px;
`;

const Group2 = styled.div`
  width: 286px;
  display: flex;
  flex-direction: column;
  padding: 60.5px 59px;
  align-items: center;
  min-height: 355px;
  background-color: var(--white);
  border-radius: 71px;
`;

const Enterprise = styled.img`
  width: 143px;
  height: 143px;
  margin-top: 4px;
  margin-right: 1px;
  object-fit: cover;
`;

const Place = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  align-self: flex-end;
  margin-top: 24px;
  min-width: 166px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const FMCGCGP = styled.div`
  ${ArialroundedmtRegularNormalVeniceBl1}
  min-height: 21px;
  margin-top: 2px;
  margin-left: 2px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group4 = styled.div`
  width: 286px;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  padding: 60.5px 71px;
  align-items: center;
  min-height: 355px;
  background-color: var(--white);
  border-radius: 71px;
`;

const Rider = styled.img`
  width: 143px;
  height: 143px;
  align-self: flex-start;
  margin-top: 4px;
  object-fit: cover;
`;

const Rider1 = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  margin-top: 24px;
  margin-left: 2px;
  min-width: 86px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const MotorBikeTruck = styled.div`
  ${ArialroundedmtRegularNormalVeniceBl1}
  min-height: 21px;
  margin-top: 2px;
  margin-left: 2px;
  min-width: 132px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group5 = styled.div`
  width: 286px;
  margin-left: 73px;
  display: flex;
  flex-direction: column;
  padding: 40px 49px;
  align-items: center;
  min-height: 355px;
  background-color: var(--white);
  border-radius: 71px;
`;

const Consumer = styled.img`
  width: 143px;
  height: 143px;
  margin-top: 25px;
  margin-right: 1px;
  object-fit: cover;
`;

const Consumer1 = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  margin-top: 24px;
  margin-left: 2px;
  min-width: 162px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const LookingForABetter = styled.p`
  ${ArialroundedmtRegularNormalVeniceBl1}
  min-height: 40px;
  align-self: flex-end;
  margin-top: 4px;
  min-width: 186px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Group19 = styled.div`
  position: absolute;
  width: 1656px;
  top: 0;
  left: 1648px;
  display: flex;
  flex-direction: column;
  padding: 32px 146px;
  align-items: flex-end;
  min-height: 527px;
  background-color: var(--black-haze);
`;

const ShitoSito = styled.div`
  ${ArialroundedmtBoldVeniceBlue40px}
  min-height: 48px;
  align-self: center;
  margin-right: 192px;
  min-width: 188px;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const Group21 = styled.div`
  width: 286px;
  display: flex;
  flex-direction: column;
  padding: 60.5px 71px;
  align-items: center;
  min-height: 355px;
  background-color: var(--white);
  border-radius: 71px;
`;

const Hamdy = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  margin-top: 24px;
  margin-left: 2px;
  min-width: 110px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Place1 = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  margin-top: 24px;
  margin-left: 2px;
  min-width: 82px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Sameer = styled.div`
  ${ArialroundedmtBoldVeniceBlue32px}
  min-height: 39px;
  margin-top: 24px;
  margin-left: 2px;
  min-width: 122px;
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Rectangle28 = styled.div`
  position: absolute;
  width: 286px;
  height: 356px;
  top: 125px;
  left: 506px;
  background-color: var(--white);
  border-radius: 65px;
  opacity: 0.05;
`;

export default Survey;
