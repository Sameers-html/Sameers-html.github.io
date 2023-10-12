import React from "react";
import { Link } from "react-router-dom";
import X1Pay2 from "../X1Pay2";
import Component515 from "../Component515";
import styled from "styled-components";
import {
  ArialroundedmtBoldVeniceBlue8px,
  ArialroundedmtRegularNormalVeniceBl,
  ArialroundedmtBoldVeniceBlue11px,
  ArialroundedmtBoldWhite11px,
  ArialroundedmtBoldVeniceBlue16px,
  ArialroundedmtBoldGeyser8px,
  ArialroundedmtRegularNormalDoveGray,
  ArialroundedmtRegularNormalWhite16p,
  ArialroundedmtRegularNormalVeniceBl1,
  ArialroundedmtNormalDoveGray16px,
  ArialroundedmtRegularNormalWhite11p,
  ArialroundedmtBoldWhite16px,
} from "../../styledMixins";
import "./PhoneHomePage.css";

class PhoneHomePage extends React.Component {
  render() {
    const {
      overlapGroup5,
      x1TbLogo,
      empoweringCommunities,
      throughDigitalTransformation,
      award14X,
      award24X,
      x1StPortfolioCompan,
      ebrdStarVentureAw,
      line4,
      line5,
      line6,
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
      spanText4,
      spanText5,
      flock,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      someOfOurClients,
      clients,
      letsMakeItAllHappen,
      ifYoureReadyToS,
      x20221TrolleyBusi,
      x1234,
      overlapGroup,
      fullName,
      companySName,
      email,
      phoneNumber,
      spanText10,
      spanText11,
      x1Pay2Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="phone-home-page-all-breakpoints screen">
          <OverlapGroup5 style={{ backgroundImage: `url(${overlapGroup5})` }}>
            <FlexCol>
              <X1TBLogo src={x1TbLogo} />
              <OverlapGroup9>
                <Empoweringcommunities>{empoweringCommunities}</Empoweringcommunities>
                <ThroughDigitalTransformation>{throughDigitalTransformation}</ThroughDigitalTransformation>
              </OverlapGroup9>
              <AwardContainer>
                <Award14x src={award14X} />
                <Award24x src={award24X} />
              </AwardContainer>
              <FlexRow>
                <X1stPortfolioCompan>{x1StPortfolioCompan}</X1stPortfolioCompan>
                <EBRDStarVentureAw>{ebrdStarVentureAw}</EBRDStarVentureAw>
              </FlexRow>
            </FlexCol>
            <a href="javascript:ShowOverlay('artboard-2', 'animate-appear');">
              <Group42>
                <Line4 src={line4} />
                <Line5 src={line5} />
                <Line5 src={line6} />
              </Group42>
            </a>
          </OverlapGroup5>
          <BecauseTheCompetit>{becauseTheCompetit}</BecauseTheCompetit>
          <OurPassionForThe>{ourPassionForThe}</OurPassionForThe>
          <LetUsHelpYouThro>{letUsHelpYouThro}</LetUsHelpYouThro>
          <WhichOneAreYou>{whichOneAreYou}</WhichOneAreYou>
          <ShitoSito>{shitoSito}</ShitoSito>
          <OverlapGroup3>
            <Enterprise src={enterprise} />
            <FlexCol1>
              <Hamdy>{hamdy}</Hamdy>
              <FMCGCGP>{fmcgCgp}</FMCGCGP>
            </FlexCol1>
          </OverlapGroup3>
          <OverlapGroup6>
            <SmallBusiness src={smallBusiness} />
            <FlexCol2>
              <Zoka>{zoka}</Zoka>
              <Surname>{surname}</Surname>
            </FlexCol2>
          </OverlapGroup6>
          <OverlapGroup7>
            <Enterprise src={rider} />
            <FlexCol3>
              <Place>{place}</Place>
              <MotorBikeTruck>{motorBikeTruck}</MotorBikeTruck>
            </FlexCol3>
          </OverlapGroup7>
          <OverlapGroup8>
            <SmallBusiness src={consumer} />
            <FlexCol4>
              <Sameer>{sameer}</Sameer>
              <LookingForABetter>{lookingForABetter}</LookingForABetter>
            </FlexCol4>
          </OverlapGroup8>
          <Group25>
            <ToFullfillYourBus>{toFullfillYourBus}</ToFullfillYourBus>
          </Group25>
          <Faq src={faq} />
          <NotYourAverageSaaSCompany>{notYourAverageSaasCompany}</NotYourAverageSaaSCompany>
          <WeContinueToRecog>
            <span className="arialroundedmt-regular-normal-venice-blue-11px">{spanText1}</span>
            <span className="arialroundedmt-bold-venice-blue-11px">{spanText2}</span>
            <span className="arialroundedmt-regular-normal-venice-blue-11px">{spanText3}</span>
          </WeContinueToRecog>
          <Group45>
            <X1TrolleyB2C src={x1TrolleyB2C} />
            <X1TROLLEYMARKETPLACE>
              <span className="arialroundedmt-bold-venice-blue-16px">{spanText4}</span>
              <span className="arialroundedmt-regular-normal-dove-gray-11px">{spanText5}</span>
            </X1TROLLEYMARKETPLACE>
          </Group45>
          <Group44>
            <Flock src={flock} />
            <FLOCKONDEMANDDELI>
              <span className="arialroundedmt-bold-venice-blue-16px">{spanText6}</span>
              <span className="arialroundedmt-regular-normal-dove-gray-11px">{spanText7}</span>
            </FLOCKONDEMANDDELI>
          </Group44>
          <Group43>
            <X1Pay2 className={x1Pay2Props.className} />
            <X1PAYBLOCKCHAINPAYMENTGATEWAY>
              <span className="arialroundedmt-bold-venice-blue-16px">{spanText8}</span>
              <span className="arialroundedmt-regular-normal-dove-gray-11px">{spanText9}</span>
            </X1PAYBLOCKCHAINPAYMENTGATEWAY>
          </Group43>
          <SomeOfOurClients>{someOfOurClients}</SomeOfOurClients>
          <Clients src={clients} />
          <OverlapGroup4>
            <Rectangle42></Rectangle42>
            <LetsMakeItAllHappen>{letsMakeItAllHappen}</LetsMakeItAllHappen>
            <IfYoureReadyToS>{ifYoureReadyToS}</IfYoureReadyToS>
            <X20221TrolleyBusi>{x20221TrolleyBusi}</X20221TrolleyBusi>
            <X1234 src={x1234} />
            <OverlapGroup style={{ backgroundImage: `url(${overlapGroup})` }}>
              <FlexRow1>
                <FlexCol5>
                  <FullName>{fullName}</FullName>
                  <Rectangle6></Rectangle6>
                </FlexCol5>
                <FlexCol6>
                  <CompanysName>{companySName}</CompanysName>
                  <Rectangle7></Rectangle7>
                </FlexCol6>
              </FlexRow1>
              <OverlapGroup1>
                <Rectangle8></Rectangle8>
                <Email>{email}</Email>
              </OverlapGroup1>
              <OverlapGroup1>
                <Rectangle8></Rectangle8>
                <PhoneNumber>{phoneNumber}</PhoneNumber>
              </OverlapGroup1>
              <RequestACustomized>
                <span className="arialroundedmt-bold-venice-blue-8px">{spanText10}</span>
                <span className="arialroundedmt-bold-geyser-8px-2">{spanText11}</span>
              </RequestACustomized>
              <Rectangle10></Rectangle10>
              <Component515 />
            </OverlapGroup>
          </OverlapGroup4>
        </div>
      </div>
    );
  }
}

const OverlapGroup5 = styled.div`
  height: 731px;
  margin-top: -57px;
  margin-left: 1px;
  display: flex;
  padding: 97px 37px;
  align-items: flex-start;
  min-width: 429px;
  border-radius: 60px;
  background-size: cover;
  background-position: 50% 50%;
`;

const FlexCol = styled.div`
  width: 323px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  min-height: 448px;
`;

const X1TBLogo = styled.img`
  width: 136px;
  height: 30px;
  align-self: flex-start;
  object-fit: cover;
`;

const OverlapGroup9 = styled.div`
  width: 283px;
  height: 105px;
  position: relative;
  margin-top: 157px;
  margin-right: 3.03px;
`;

const Empoweringcommunities = styled.div`
  position: absolute;
  top: 0;
  left: 28px;
  font-family: var(--font-family-arialrounded_mt-bold);
  font-weight: 700;
  color: var(--white);
  font-size: 36px;
  text-align: center;
  letter-spacing: 0;
  line-height: 36px;
  white-space: nowrap;
`;

const ThroughDigitalTransformation = styled.div`
  ${ArialroundedmtRegularNormalWhite16p}
  position: absolute;
  top: 84px;
  left: 0;
  letter-spacing: 1.6px;
  line-height: 16px;
  white-space: nowrap;
`;

const AwardContainer = styled.div`
  align-self: center;
  margin-top: 57px;
  margin-left: 30.53px;
  display: flex;
  align-items: flex-start;
  min-width: 225px;
`;

const Award14x = styled.img`
  width: 63px;
  height: 48px;
  object-fit: cover;
`;

const Award24x = styled.img`
  width: 63px;
  height: 48px;
  margin-left: 99px;
  object-fit: cover;
`;

const FlexRow = styled.div`
  ${ArialroundedmtRegularNormalWhite11p}
  height: 44px;
  margin-top: 7px;
  display: flex;
  align-items: flex-start;
  min-width: 283px;
`;

const X1stPortfolioCompan = styled.p`
  min-height: 44px;
  min-width: 114px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const EBRDStarVentureAw = styled.p`
  min-height: 44px;
  margin-left: 41px;
  min-width: 128px;
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
`;

const Group42 = styled.div`
  width: 21px;
  margin-left: 10px;
  margin-top: 8px;
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

const BecauseTheCompetit = styled.p`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 38px;
  margin-top: 33px;
  margin-left: 2px;
  min-width: 294px;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 16px;
  white-space: nowrap;
`;

const OurPassionForThe = styled.p`
  ${ArialroundedmtRegularNormalDoveGray}
  min-height: 74px;
  margin-top: 4px;
  margin-left: 2px;
  min-width: 350px;
  text-align: center;
  letter-spacing: 0.55px;
  line-height: 15px;
  white-space: nowrap;
`;

const LetUsHelpYouThro = styled.p`
  ${ArialroundedmtRegularNormalVeniceBl1}
  min-height: 40px;
  margin-top: 34px;
  margin-left: 2px;
  min-width: 234px;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 16px;
  white-space: nowrap;
`;

const WhichOneAreYou = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  margin-top: 38px;
  margin-left: 2px;
  min-width: 154px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const ShitoSito = styled.div`
  ${ArialroundedmtBoldVeniceBlue11px}
  min-height: 14px;
  margin-top: 12px;
  margin-left: 3px;
  min-width: 53px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  height: 65px;
  margin-top: 6px;
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

const FlexCol1 = styled.div`
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

const OverlapGroup6 = styled.div`
  height: 65px;
  margin-top: 6px;
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

const FlexCol2 = styled.div`
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

const OverlapGroup7 = styled.div`
  height: 65px;
  margin-top: 6px;
  display: flex;
  padding: 12px 32px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 240px;
  background-color: var(--white);
  border-radius: 15px;
`;

const FlexCol3 = styled.div`
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

const OverlapGroup8 = styled.div`
  height: 65px;
  margin-top: 6px;
  display: flex;
  padding: 5px 13px;
  justify-content: flex-end;
  align-items: center;
  min-width: 240px;
  background-color: var(--white);
  border-radius: 15px;
`;

const FlexCol4 = styled.div`
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

const Group25 = styled.div`
  width: 322px;
  height: 18px;
  margin-top: 59px;
  margin-left: 2px;
  display: flex;
`;

const ToFullfillYourBus = styled.p`
  ${ArialroundedmtBoldVeniceBlue16px}
  margin-top: 1px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -3px;
  width: 322px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Faq = styled.img`
  width: 232px;
  height: 232px;
  margin-top: 3px;
  object-fit: cover;
`;

const NotYourAverageSaaSCompany = styled.p`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  margin-top: 47px;
  margin-left: 2px;
  min-width: 262px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const WeContinueToRecog = styled.p`
  min-height: 44px;
  margin-top: 10px;
  margin-left: 2px;
  min-width: 348px;
  font-family: var(--font-family-arial_rounded_mt);
  color: var(--venice-blue);
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0;
  line-height: 15px;
  white-space: nowrap;
  font-weight: 400;
`;

const Group45 = styled.div`
  width: 176px;
  margin-top: 40px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 119px;
`;

const X1TrolleyB2C = styled.img`
  width: 67px;
  height: 67px;
  margin-right: 2.93px;
  object-fit: cover;
`;

const X1TROLLEYMARKETPLACE = styled.p`
  ${ArialroundedmtNormalDoveGray16px}
  min-height: 44px;
  margin-top: 15px;
  min-width: 176px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const Group44 = styled.div`
  width: 200px;
  margin-top: 46px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 119px;
`;

const Flock = styled.img`
  width: 67px;
  height: 67px;
  margin-right: 2.78px;
  object-fit: cover;
`;

const FLOCKONDEMANDDELI = styled.p`
  ${ArialroundedmtNormalDoveGray16px}
  min-height: 44px;
  margin-top: 14px;
  min-width: 200px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const Group43 = styled.div`
  width: 130px;
  position: relative;
  margin-top: 46px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 116px;
`;

const X1PAYBLOCKCHAINPAYMENTGATEWAY = styled.div`
  ${ArialroundedmtNormalDoveGray16px}
  min-height: 44px;
  margin-top: 14px;
  min-width: 130px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const SomeOfOurClients = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  min-height: 20px;
  margin-top: 88px;
  margin-left: 2px;
  min-width: 156px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Clients = styled.img`
  width: 354px;
  height: 137px;
  margin-top: 11px;
  margin-right: 0.06px;
  object-fit: cover;
`;

const OverlapGroup4 = styled.div`
  width: 428px;
  height: 996px;
  position: relative;
  margin-top: 21px;
  border-radius: 0px 0px 60px 60px;
`;

const Rectangle42 = styled.div`
  position: absolute;
  width: 428px;
  height: 996px;
  top: 0;
  left: 0;
  border-radius: 0px 0px 60px 60px;
  transform: rotate(180deg);
  background: linear-gradient(164.98deg, #125c8f 6.23%, #06198d 104.86%, #06178d 122.35%);
`;

const LetsMakeItAllHappen = styled.p`
  ${ArialroundedmtBoldWhite16px}
  position: absolute;
  top: 58px;
  left: 117px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const IfYoureReadyToS = styled.p`
  ${ArialroundedmtRegularNormalWhite11p}
  position: absolute;
  top: 84px;
  left: 40px;
  text-align: center;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const X20221TrolleyBusi = styled.p`
  ${ArialroundedmtBoldWhite11px}
  position: absolute;
  top: 600px;
  left: 92px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const X1234 = styled.img`
  position: absolute;
  width: 95px;
  height: 17px;
  top: 566px;
  left: 167px;
  object-fit: cover;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 378px;
  top: 139px;
  left: 37px;
  display: flex;
  flex-direction: column;
  padding: 30px 43px;
  align-items: flex-start;
  min-height: 426px;
  background-size: cover;
  background-position: 50% 50%;
`;

const FlexRow1 = styled.div`
  height: 52px;
  margin-left: 1.5px;
  display: flex;
  align-items: flex-start;
  min-width: 269px;
`;

const FlexCol5 = styled.div`
  width: 129px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 52px;
`;

const FullName = styled.div`
  ${ArialroundedmtBoldVeniceBlue8px}
  min-height: 12px;
  margin-left: 0.5px;
  min-width: 40px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const Rectangle6 = styled.div`
  width: 129px;
  height: 37px;
  margin-top: 2px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const FlexCol6 = styled.div`
  width: 133px;
  margin-left: 7px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 52px;
`;

const CompanysName = styled.div`
  ${ArialroundedmtBoldVeniceBlue8px}
  min-height: 12px;
  margin-left: 1.5px;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const Rectangle7 = styled.div`
  width: 133px;
  height: 37px;
  margin-top: 2px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const OverlapGroup1 = styled.div`
  width: 271px;
  height: 48px;
  position: relative;
  margin-top: 16px;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 271px;
  height: 37px;
  top: 11px;
  left: 0;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const Email = styled.div`
  ${ArialroundedmtBoldVeniceBlue8px}
  position: absolute;
  top: 0;
  left: 1px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const PhoneNumber = styled.div`
  ${ArialroundedmtBoldVeniceBlue8px}
  position: absolute;
  top: 0;
  left: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const RequestACustomized = styled.p`
  ${ArialroundedmtBoldGeyser8px}
  min-height: 12px;
  margin-top: 16px;
  margin-left: 2px;
  min-width: 164px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const Rectangle10 = styled.div`
  width: 270px;
  height: 84px;
  margin-top: 2px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

export default PhoneHomePage;
