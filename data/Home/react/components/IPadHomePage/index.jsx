import React from "react";
import { Link } from "react-router-dom";
import X1Pay2 from "../X1Pay2";
import Group27 from "../Group27";
import styled from "styled-components";
import {
  ArialroundedmtNormalDoveGray16px,
  ArialroundedmtRegularNormalVeniceBl,
  ArialroundedmtBoldVeniceBlue11px,
  ArialroundedmtRegularNormalWhite11p,
  ArialroundedmtBoldVeniceBlue16px,
  ArialroundedmtBoldVeniceBlue20px,
} from "../../styledMixins";
import "./IPadHomePage.css";

class IPadHomePage extends React.Component {
  render() {
    const {
      artboard2,
      untitled1,
      empoweringCommunities,
      throughDigitalTransformation,
      award14X,
      award24X,
      x1StPortfolioCompan,
      ebrdStarVentureAw,
      x1TbLogo,
      line4,
      line5,
      line6,
      x1TbIcon4X,
      becauseTheCompetit,
      ourPassionForThe,
      letUsHelpYouThro,
      whichOneAreYou,
      shitoSito,
      enterprise,
      hamdy,
      fmcgCgp,
      smallBusiness,
      zoka,
      surname,
      rider,
      place,
      motorBikeTruck,
      consumer,
      sameer,
      lookingForABetter,
      toFullfillYourBus,
      faq,
      notYourAverageSaasCompany,
      spanText1,
      spanText2,
      spanText3,
      x1TrolleyB2C,
      flock,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      someOfOurClients,
      clients,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="ipad-home-page screen">
          <OverlapGroup3>
            <Artboard2 src={artboard2} />
            <Untitled1 src={untitled1} />
            <EmpoweringCommunities>{empoweringCommunities}</EmpoweringCommunities>
            <ThroughDigitalTransformation>{throughDigitalTransformation}</ThroughDigitalTransformation>
            <Award14x src={award14X} />
            <Award24x src={award24X} />
            <X1stPortfolioCompan>{x1StPortfolioCompan}</X1stPortfolioCompan>
            <EBRDStarVentureAw>{ebrdStarVentureAw}</EBRDStarVentureAw>
            <X1TBLogo src={x1TbLogo} />
            <a href="javascript:ShowOverlay('artboard-1', 'animate-appear');">
              <Group65>
                <Line4 src={line4} />
                <Line5 src={line5} />
                <Line5 src={line6} />
              </Group65>
            </a>
          </OverlapGroup3>
          <FlexRow>
            <X1TBIcon4x src={x1TbIcon4X} />
            <TheContainer>
              <BecauseTheCompetit>{becauseTheCompetit}</BecauseTheCompetit>
              <OurPassionForThe>{ourPassionForThe}</OurPassionForThe>
            </TheContainer>
          </FlexRow>
          <LetUsHelpYouThro>{letUsHelpYouThro}</LetUsHelpYouThro>
          <WhichOneAreYou>{whichOneAreYou}</WhichOneAreYou>
          <ShitoSito>{shitoSito}</ShitoSito>
          <GroupContainer>
            <Group50>
              <Enterprise src={enterprise} />
              <FlexCol>
                <Hamdy>{hamdy}</Hamdy>
                <FMCGCGP>{fmcgCgp}</FMCGCGP>
              </FlexCol>
            </Group50>
            <Group51>
              <SmallBusiness src={smallBusiness} />
              <FlexCol1>
                <Zoka>{zoka}</Zoka>
                <Surname>{surname}</Surname>
              </FlexCol1>
            </Group51>
          </GroupContainer>
          <GroupContainer1>
            <Group52>
              <Enterprise src={rider} />
              <FlexCol2>
                <Place>{place}</Place>
                <MotorBikeTruck>{motorBikeTruck}</MotorBikeTruck>
              </FlexCol2>
            </Group52>
            <Group53>
              <SmallBusiness src={consumer} />
              <FlexCol3>
                <Sameer>{sameer}</Sameer>
                <LookingForABetter>{lookingForABetter}</LookingForABetter>
              </FlexCol3>
            </Group53>
          </GroupContainer1>
          <OverlapGroup4>
            <ToFullfillYourBus>{toFullfillYourBus}</ToFullfillYourBus>
            <Faq src={faq} />
          </OverlapGroup4>
          <NotYourAverageSaaSCompany>{notYourAverageSaasCompany}</NotYourAverageSaaSCompany>
          <WeContinueToRecog>
            <span className="arialroundedmt-regular-normal-venice-blue-14px">{spanText1}</span>
            <span className="arialroundedmt-bold-venice-blue-14px">{spanText2}</span>
            <span className="arialroundedmt-regular-normal-venice-blue-14px">{spanText3}</span>
          </WeContinueToRecog>
          <FlexRow1>
            <X1TrolleyB2C src={x1TrolleyB2C} />
            <Flock src={flock} />
            <X1Pay2 />
          </FlexRow1>
          <FlexRow2>
            <X1TROLLEYMARKETPLACE>
              <span className="arialroundedmt-bold-venice-blue-16px">{spanText4}</span>
              <span className="arialroundedmt-regular-normal-dove-gray-11px">{spanText5}</span>
            </X1TROLLEYMARKETPLACE>
            <FLOCKONDEMANDDELI>
              <span className="arialroundedmt-bold-venice-blue-16px">{spanText6}</span>
              <span className="arialroundedmt-regular-normal-dove-gray-11px">{spanText7}</span>
            </FLOCKONDEMANDDELI>
            <X1PAYBLOCKCHAINPAYMENTGATEWAY>
              <span className="arialroundedmt-bold-venice-blue-16px">{spanText8}</span>
              <span className="arialroundedmt-regular-normal-dove-gray-11px">{spanText9}</span>
            </X1PAYBLOCKCHAINPAYMENTGATEWAY>
          </FlexRow2>
          <SomeOfOurClients>{someOfOurClients}</SomeOfOurClients>
          <Clients src={clients} />
          <Group27 />
        </div>
      </div>
    );
  }
}

const OverlapGroup3 = styled.div`
  width: 769px;
  height: 462px;
  position: relative;
  margin-top: -57px;
  margin-right: 1px;
`;

const Artboard2 = styled.img`
  position: absolute;
  width: 769px;
  height: 439px;
  top: 0;
  left: 0;
  border-radius: 60px;
  object-fit: cover;
`;

const Untitled1 = styled.img`
  position: absolute;
  width: 293px;
  height: 288px;
  top: 174px;
  left: 396px;
  object-fit: cover;
`;

const EmpoweringCommunities = styled.div`
  position: absolute;
  top: 199px;
  left: 81px;
  font-family: var(--font-family-arialrounded_mt-bold);
  font-weight: 700;
  color: var(--white);
  font-size: 30px;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const ThroughDigitalTransformation = styled.div`
  position: absolute;
  top: 242px;
  left: 81px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxl);
  letter-spacing: 2px;
  line-height: 20px;
  white-space: nowrap;
`;

const Award14x = styled.img`
  position: absolute;
  width: 62px;
  height: 47px;
  top: 310px;
  left: 106px;
  object-fit: cover;
`;

const Award24x = styled.img`
  position: absolute;
  width: 62px;
  height: 47px;
  top: 310px;
  left: 252px;
  object-fit: cover;
`;

const X1stPortfolioCompan = styled.p`
  ${ArialroundedmtRegularNormalWhite11p}
  position: absolute;
  top: 368px;
  left: 81px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const EBRDStarVentureAw = styled.p`
  ${ArialroundedmtRegularNormalWhite11p}
  position: absolute;
  top: 368px;
  left: 221px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const X1TBLogo = styled.img`
  position: absolute;
  width: 183px;
  height: 40px;
  top: 91px;
  left: 81px;
  object-fit: cover;
`;

const Group65 = styled.div`
  position: absolute;
  width: 21px;
  top: 105px;
  left: 668px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: 14px;
  cursor: pointer;
`;

const Line4 = styled.img`
  width: 23px;
  height: 2px;
  margin-left: -1px;
  object-fit: cover;
`;

const Line5 = styled.img`
  width: 23px;
  height: 2px;
  margin-top: 5px;
  margin-left: -1px;
  object-fit: cover;
`;

const FlexRow = styled.div`
  height: 155px;
  margin-top: 46px;
  margin-right: 7px;
  display: flex;
  align-items: flex-start;
  min-width: 601px;
`;

const X1TBIcon4x = styled.img`
  width: 193px;
  height: 140px;
  margin-top: 2px;
  object-fit: cover;
`;

const TheContainer = styled.div`
  width: 367px;
  margin-left: 41px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 155px;
`;

const BecauseTheCompetit = styled.div`
  ${ArialroundedmtBoldVeniceBlue20px}
  min-height: 48px;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const OurPassionForThe = styled.p`
  min-height: 98px;
  margin-top: 9px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--dove-gray);
  font-size: var(--font-size-l);
  letter-spacing: 0.7px;
  line-height: 14px;
  white-space: nowrap;
`;

const LetUsHelpYouThro = styled.div`
  min-height: 48px;
  margin-top: 42px;
  margin-left: 2px;
  min-width: 292px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--venice-blue);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const WhichOneAreYou = styled.div`
  ${ArialroundedmtBoldVeniceBlue20px}
  min-height: 25px;
  margin-top: 54px;
  margin-left: 2px;
  min-width: 192px;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const ShitoSito = styled.div`
  ${ArialroundedmtBoldVeniceBlue11px}
  min-height: 14px;
  margin-top: 20px;
  margin-left: 3px;
  min-width: 53px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const GroupContainer = styled.div`
  height: 69px;
  margin-top: 12px;
  display: flex;
  align-items: flex-start;
  min-width: 514px;
`;

const Group50 = styled.div`
  height: 65px;
  align-self: flex-end;
  display: flex;
  padding: 12px 44px;
  align-items: flex-start;
  min-width: 240px;
  background-color: var(--white);
  border-radius: 15px;
`;

const Enterprise = styled.img`
  width: 37px;
  height: 37px;
  object-fit: cover;
`;

const FlexCol = styled.div`
  width: 62px;
  align-self: center;
  margin-left: 51px;
  margin-bottom: 2.5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 34px;
`;

const Hamdy = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  margin-left: 3px;
  min-width: 56px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const FMCGCGP = styled.div`
  ${ArialroundedmtRegularNormalVeniceBl}
  min-height: 14px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const Group51 = styled.div`
  height: 65px;
  margin-left: 34px;
  display: flex;
  padding: 8px 25px;
  justify-content: flex-end;
  align-items: center;
  min-width: 240px;
  background-color: var(--white);
  border-radius: 15px;
`;

const SmallBusiness = styled.img`
  width: 37px;
  height: 37px;
  margin-bottom: 4px;
  object-fit: cover;
`;

const FlexCol1 = styled.div`
  width: 104px;
  align-self: flex-end;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 47px;
`;

const Zoka = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  min-width: 40px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Surname = styled.p`
  ${ArialroundedmtRegularNormalVeniceBl}
  min-height: 26px;
  margin-top: 1px;
  min-width: 104px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const GroupContainer1 = styled.div`
  height: 68px;
  margin-top: 21px;
  display: flex;
  align-items: flex-start;
  min-width: 514px;
`;

const Group52 = styled.div`
  height: 65px;
  display: flex;
  padding: 12px 32px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 240px;
  background-color: var(--white);
  border-radius: 15px;
`;

const FlexCol2 = styled.div`
  width: 90px;
  align-self: center;
  margin-left: 37px;
  margin-top: 1.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 34px;
`;

const Place = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  min-width: 42px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const MotorBikeTruck = styled.div`
  ${ArialroundedmtRegularNormalVeniceBl}
  min-height: 14px;
  min-width: 90px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const Group53 = styled.div`
  height: 65px;
  align-self: flex-end;
  margin-left: 34px;
  display: flex;
  padding: 5px 13px;
  justify-content: flex-end;
  align-items: center;
  min-width: 240px;
  background-color: var(--white);
  border-radius: 15px;
`;

const FlexCol3 = styled.div`
  width: 128px;
  align-self: flex-end;
  margin-left: 21px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 47px;
`;

const Sameer = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  min-width: 62px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const LookingForABetter = styled.p`
  ${ArialroundedmtRegularNormalVeniceBl}
  min-height: 26px;
  margin-top: 1px;
  min-width: 128px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const OverlapGroup4 = styled.div`
  width: 402px;
  height: 362px;
  position: relative;
  margin-top: 64px;
  margin-left: 2px;
`;

const ToFullfillYourBus = styled.div`
  ${ArialroundedmtBoldVeniceBlue20px}
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Faq = styled.img`
  position: absolute;
  width: 340px;
  height: 340px;
  top: 22px;
  left: 24px;
  object-fit: cover;
`;

const NotYourAverageSaaSCompany = styled.div`
  ${ArialroundedmtBoldVeniceBlue20px}
  min-height: 25px;
  margin-top: 54px;
  margin-left: 2px;
  min-width: 326px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const WeContinueToRecog = styled.p`
  min-height: 50px;
  margin-top: 8px;
  margin-left: 2px;
  min-width: 444px;
  font-family: var(--font-family-arial_rounded_mt);
  color: var(--venice-blue);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
  font-weight: 400;
`;

const FlexRow1 = styled.div`
  height: 72px;
  position: relative;
  margin-top: 41px;
  margin-left: 3px;
  display: flex;
  align-items: flex-start;
  min-width: 499px;
`;

const X1TrolleyB2C = styled.img`
  width: 67px;
  height: 67px;
  object-fit: cover;
`;

const Flock = styled.img`
  width: 67px;
  height: 67px;
  margin-left: 149px;
  margin-top: 1px;
  object-fit: cover;
`;

const FlexRow2 = styled.div`
  ${ArialroundedmtNormalDoveGray16px}
  height: 57px;
  margin-top: 10px;
  margin-right: 6px;
  display: flex;
  align-items: flex-start;
  min-width: 554px;
`;

const X1TROLLEYMARKETPLACE = styled.div`
  min-height: 56px;
  min-width: 134px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const FLOCKONDEMANDDELI = styled.div`
  min-height: 56px;
  align-self: flex-end;
  margin-left: 86px;
  min-width: 126px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const X1PAYBLOCKCHAINPAYMENTGATEWAY = styled.div`
  min-height: 44px;
  align-self: center;
  margin-left: 98px;
  margin-bottom: 2px;
  min-width: 110px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const SomeOfOurClients = styled.div`
  ${ArialroundedmtBoldVeniceBlue20px}
  min-height: 25px;
  margin-top: 99px;
  margin-left: 2px;
  min-width: 194px;
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const Clients = styled.img`
  width: 478px;
  height: 185px;
  margin-top: 13px;
  margin-right: 25.94px;
  object-fit: cover;
`;

export default IPadHomePage;
