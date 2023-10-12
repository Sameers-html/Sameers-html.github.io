import React from "react";
import Header from "../Header";
import Solutions from "../Solutions";
import Mobile from "../Mobile";
import Survey from "../Survey";
import Result from "../Result";
import X1Trolly from "../X1Trolly";
import X1TrolleyB2C from "../X1TrolleyB2C";
import X1Pay from "../X1Pay";
import Component57 from "../Component57";
import styled from "styled-components";
import {
  ArialroundedmtBoldVeniceBlue40px,
  ArialroundedmtNormalDoveGray40px,
  ArialroundedmtRegularNormalWhite16p,
  ArialroundedmtBoldVeniceBlue16px,
  ArialroundedmtBoldWhite16px,
} from "../../styledMixins";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    const {
      x1TbLogo,
      place,
      title,
      throughDigitalTransformation,
      award14X,
      award24X,
      x1StPortfolioCompan,
      ebrdStarVentureAw,
      x1TbIcon4X,
      becauseTheCompetit,
      ourPassionForThe,
      letUsHelpYouThro,
      toFullfillYourBus,
      notYourAverageSaasCompany,
      spanText1,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      spanText6,
      spanText7,
      spanText8,
      spanText9,
      someOfOurClients,
      clients,
      letsMakeItAllHappen,
      ifYoureReadyToS,
      fullName,
      companySName,
      email,
      phoneNumber,
      spanText10,
      spanText11,
      x20221TrolleyBusi,
      x1234,
      headerProps,
      solutions1Props,
      mobileProps,
      solutions2Props,
      surveyProps,
      resultProps,
      x1TrollyProps,
      x1TrolleyB2CProps,
      x1PayProps,
      component57Props,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home-page screen">
          <OverlapGroup6>
            <Header src={headerProps.src} />
            <X1TBLogo src={x1TbLogo} />
            <Place>{place}</Place>
            <HomeText>
              <OverlapGroup1>
                <Title>{title}</Title>
                <ThroughDigitalTransformation>{throughDigitalTransformation}</ThroughDigitalTransformation>
              </OverlapGroup1>
              <AwardContainer>
                <Award14x src={award14X} />
                <Award24x src={award24X} />
              </AwardContainer>
              <FlexRow>
                <X1stPortfolioCompan>{x1StPortfolioCompan}</X1stPortfolioCompan>
                <EBRDStarVentureAw>{ebrdStarVentureAw}</EBRDStarVentureAw>
              </FlexRow>
            </HomeText>
            <Solutions line1={solutions1Props.line1} component11Props={solutions1Props.component11Props} />
            <Mobile untitled11={mobileProps.untitled11} untitled12={mobileProps.untitled12} />
            <Solutions
              line1={solutions2Props.line1}
              className={solutions2Props.className}
              component11Props={solutions2Props.component11Props}
            />
          </OverlapGroup6>
          <Text1>
            <FlexRow1>
              <X1TBIcon4x src={x1TbIcon4X} />
              <Group1>
                <BecauseTheCompetit>{becauseTheCompetit}</BecauseTheCompetit>
                <OurPassionForThe>{ourPassionForThe}</OurPassionForThe>
              </Group1>
            </FlexRow1>
            <LetUsHelpYouThro>{letUsHelpYouThro}</LetUsHelpYouThro>
          </Text1>
          <OverlapGroup7>
            <ToFullfillYourBusinessNeedsYouNeed></ToFullfillYourBusinessNeedsYouNeed>
            <Group25>
              <ToFullfillYourBus>{toFullfillYourBus}</ToFullfillYourBus>
            </Group25>
            <Survey {...surveyProps} />
            <Result
              faq={resultProps.faq}
              fleet={resultProps.fleet}
              isAPowerfulManage={resultProps.isAPowerfulManage}
              component57Props={resultProps.component57Props}
            />
          </OverlapGroup7>
          <Text2>
            <NotYourAverageSaaSCompany>{notYourAverageSaasCompany}</NotYourAverageSaaSCompany>
            <WeContinueToRecog>
              <span className="arialroundedmt-regular-normal-venice-blue-32px">{spanText1}</span>
              <span className="arialroundedmt-bold-venice-blue-32px">{spanText2}</span>
              <span className="arialroundedmt-regular-normal-venice-blue-32px">{spanText3}</span>
            </WeContinueToRecog>
          </Text2>
          <FlexRow2>
            <X1Trolley>
              <X1Trolly x1TrolleyB2CProps={x1TrollyProps.x1TrolleyB2CProps} />
              <X1TROLLEYMARKETPLACE>
                <span className="arialroundedmt-bold-venice-blue-40px">{spanText4}</span>
                <span className="arialroundedmt-regular-normal-dove-gray-16px">{spanText5}</span>
              </X1TROLLEYMARKETPLACE>
            </X1Trolley>
            <Flock>
              <X1TrolleyB2C src={x1TrolleyB2CProps.src} className={x1TrolleyB2CProps.className} />
              <X1TROLLEYMARKETPLACE>
                <span className="arialroundedmt-bold-venice-blue-40px">{spanText6}</span>
                <span className="arialroundedmt-regular-normal-dove-gray-16px">{spanText7}</span>
              </X1TROLLEYMARKETPLACE>
            </Flock>
            <X1Pay1>
              <X1Pay src={x1PayProps.src} />
              <X1PAYBLOCKCHAINPAYMENTGATEWAY>
                <span className="arialroundedmt-bold-venice-blue-40px">{spanText8}</span>
                <span className="arialroundedmt-regular-normal-dove-gray-16px">{spanText9}</span>
              </X1PAYBLOCKCHAINPAYMENTGATEWAY>
            </X1Pay1>
          </FlexRow2>
          <Clients>
            <SomeOfOurClients>{someOfOurClients}</SomeOfOurClients>
            <Clients1 src={clients} />
          </Clients>
          <Footer>
            <OverlapGroup>
              <Rectangle5></Rectangle5>
              <LetsMakeItAllHappen>{letsMakeItAllHappen}</LetsMakeItAllHappen>
              <IfYoureReadyToS>{ifYoureReadyToS}</IfYoureReadyToS>
              <Rectangle11></Rectangle11>
              <Rectangle6></Rectangle6>
              <Rectangle7></Rectangle7>
              <Rectangle8></Rectangle8>
              <Rectangle9></Rectangle9>
              <Rectangle10></Rectangle10>
              <FullName>{fullName}</FullName>
              <CompanysName>{companySName}</CompanysName>
              <Email>{email}</Email>
              <PhoneNumber>{phoneNumber}</PhoneNumber>
              <RequestACustomized>
                <span className="arialroundedmt-bold-venice-blue-16px">{spanText10}</span>
                <Span14>{spanText11}</Span14>
              </RequestACustomized>
              <Component57 className={component57Props.className}>{component57Props.children}</Component57>
              <X20221TrolleyBusi>{x20221TrolleyBusi}</X20221TrolleyBusi>
              <X1234 src={x1234} />
            </OverlapGroup>
          </Footer>
        </div>
      </div>
    );
  }
}

const OverlapGroup6 = styled.div`
  width: 1920px;
  height: 1089px;
  position: relative;
  margin-top: -1px;
`;

const X1TBLogo = styled.img`
  position: absolute;
  width: 310px;
  height: 68px;
  top: 49px;
  left: 140px;
  object-fit: cover;
`;

const Place = styled.div`
  ${ArialroundedmtRegularNormalWhite16p}
  position: absolute;
  top: 48px;
  left: 1519px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const HomeText = styled.div`
  position: absolute;
  width: 757px;
  top: 379px;
  left: 136px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 402px;
`;

const OverlapGroup1 = styled.div`
  width: 757px;
  height: 103px;
  position: relative;
  margin-top: 5px;
`;

const Title = styled.h1`
  position: absolute;
  top: 0;
  left: 0;
  font-family: var(--font-family-arialrounded_mt-bold);
  font-weight: 700;
  color: var(--white);
  font-size: 60px;
  letter-spacing: 0;
  line-height: 60px;
  white-space: nowrap;
`;

const ThroughDigitalTransformation = styled.div`
  position: absolute;
  top: 69px;
  left: 4px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  letter-spacing: 2.8px;
  line-height: 28px;
  white-space: nowrap;
`;

const AwardContainer = styled.div`
  margin-top: 132px;
  margin-left: 56.5px;
  display: flex;
  align-items: flex-start;
  min-width: 426px;
`;

const Award14x = styled.img`
  width: 130px;
  height: 98px;
  object-fit: cover;
`;

const Award24x = styled.img`
  width: 130px;
  height: 98px;
  margin-left: 166px;
  object-fit: cover;
`;

const FlexRow = styled.div`
  ${ArialroundedmtRegularNormalWhite16p}
  height: 40px;
  margin-top: 29px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 556px;
`;

const X1stPortfolioCompan = styled.p`
  min-height: 40px;
  min-width: 237px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const EBRDStarVentureAw = styled.p`
  min-height: 40px;
  margin-left: 35px;
  min-width: 284px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Text1 = styled.div`
  width: 1640px;
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 553px;
`;

const FlexRow1 = styled.div`
  margin-left: 2px;
  display: flex;
  align-items: center;
  min-width: 1642px;
`;

const X1TBIcon4x = styled.img`
  width: 477px;
  height: 346px;
  object-fit: cover;
`;

const Group1 = styled.div`
  width: 1024px;
  height: 241px;
  margin-left: 141px;
  margin-top: 1px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BecauseTheCompetit = styled.div`
  ${ArialroundedmtBoldVeniceBlue40px}
  margin-right: -2px;
  flex: 1;
  max-height: 94px;
  margin-top: 6px;
  height: 94px;
  letter-spacing: 2px;
  line-height: 40px;
  white-space: nowrap;
`;

const OurPassionForThe = styled.div`
  margin-right: 54px;
  flex: 1;
  max-height: 130px;
  margin-bottom: -10px;
  height: 130px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--dove-gray);
  font-size: var(--font-size-xxxl);
  letter-spacing: 1.4px;
  line-height: 28px;
  white-space: nowrap;
`;

const LetUsHelpYouThro = styled.div`
  min-height: 48px;
  margin-top: 164px;
  margin-left: 2px;
  min-width: 942px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--venice-blue);
  font-size: var(--font-size-xxxxxl);
  text-align: center;
  letter-spacing: 2px;
  line-height: 40px;
  white-space: nowrap;
`;

const OverlapGroup7 = styled.div`
  width: 3304px;
  height: 1413px;
  position: relative;
  align-self: flex-end;
  margin-top: 41px;
  margin-right: -1532px;
`;

const ToFullfillYourBusinessNeedsYouNeed = styled.div`
  position: absolute;
  width: 904px;
  height: 155px;
  top: 513px;
  left: 342px;
  background-color: var(--black-haze);
`;

const Group25 = styled.div`
  position: absolute;
  width: 800px;
  height: 46px;
  top: 610px;
  left: 413px;
  display: flex;
`;

const ToFullfillYourBus = styled.div`
  ${ArialroundedmtBoldVeniceBlue40px}
  margin-top: 3px;
  margin-right: -2px;
  flex: 1;
  margin-bottom: -5px;
  width: 800px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const Text2 = styled.div`
  width: 1500px;
  margin-top: 153px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 162px;
`;

const NotYourAverageSaaSCompany = styled.div`
  ${ArialroundedmtBoldVeniceBlue40px}
  min-height: 48px;
  margin-top: 3px;
  min-width: 650px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const WeContinueToRecog = styled.div`
  min-height: 76px;
  margin-top: 42px;
  min-width: 1500px;
  font-family: var(--font-family-arial_rounded_mt);
  color: var(--venice-blue);
  font-size: var(--font-size-xxxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
  font-weight: 400;
`;

const FlexRow2 = styled.div`
  margin-top: 85px;
  margin-right: 20.21px;
  display: flex;
  align-items: flex-end;
  min-width: 1112px;
`;

const X1Trolley = styled.div`
  width: 254px;
  height: 326px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const X1TROLLEYMARKETPLACE = styled.div`
  ${ArialroundedmtNormalDoveGray40px}
  margin-right: -2px;
  flex: 1;
  max-height: 86px;
  margin-bottom: -20px;
  height: 86px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Flock = styled.div`
  width: 292px;
  height: 313px;
  position: relative;
  margin-left: 167px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const X1Pay1 = styled.div`
  width: 202px;
  height: 310px;
  position: relative;
  margin-left: 197px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const X1PAYBLOCKCHAINPAYMENTGATEWAY = styled.div`
  ${ArialroundedmtNormalDoveGray40px}
  margin-left: 8px;
  margin-right: 5.8px;
  flex: 1;
  max-height: 86px;
  margin-bottom: -20px;
  height: 86px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Clients = styled.div`
  width: 1640px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 270px;
`;

const SomeOfOurClients = styled.div`
  ${ArialroundedmtBoldVeniceBlue40px}
  min-height: 48px;
  margin-top: 3px;
  margin-left: 2px;
  min-width: 388px;
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const Clients1 = styled.img`
  width: 1640px;
  height: 176px;
  margin-top: 43px;
  object-fit: cover;
`;

const Footer = styled.div`
  margin-top: 87px;
  display: flex;
  align-items: flex-start;
  min-width: 1920px;
`;

const OverlapGroup = styled.div`
  width: 1920px;
  height: 996px;
  position: relative;
  border-radius: 0px 0px 150px 150px;
`;

const Rectangle5 = styled.div`
  position: absolute;
  width: 1920px;
  height: 996px;
  top: 0;
  left: 0;
  border-radius: 0px 0px 150px 150px;
  transform: rotate(180deg);
  background: linear-gradient(129.72deg, #125c8f 15.36%, #06198d 91.04%, #06178d 104.46%);
`;

const LetsMakeItAllHappen = styled.div`
  position: absolute;
  top: 66px;
  left: 719px;
  font-family: var(--font-family-arialrounded_mt-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 40px;
  white-space: nowrap;
`;

const IfYoureReadyToS = styled.div`
  position: absolute;
  top: 131px;
  left: 453px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxxxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

const Rectangle11 = styled.div`
  position: absolute;
  width: 1034px;
  height: 606px;
  top: 263px;
  left: 443px;
  background-color: var(--white);
  border-radius: 48px;
  box-shadow: 13px 7px 12px #00000029;
`;

const Rectangle6 = styled.div`
  position: absolute;
  width: 197px;
  height: 63px;
  top: 384px;
  left: 530px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const Rectangle7 = styled.div`
  position: absolute;
  width: 205px;
  height: 63px;
  top: 384px;
  left: 732px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 407px;
  height: 63px;
  top: 498px;
  left: 530px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const Rectangle9 = styled.div`
  position: absolute;
  width: 407px;
  height: 63px;
  top: 606px;
  left: 530px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const Rectangle10 = styled.div`
  position: absolute;
  width: 407px;
  height: 284px;
  top: 384px;
  left: 986px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const FullName = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  position: absolute;
  top: 357px;
  left: 530px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const CompanysName = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  position: absolute;
  top: 357px;
  left: 734px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const Email = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  position: absolute;
  top: 472px;
  left: 532px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const PhoneNumber = styled.div`
  ${ArialroundedmtBoldVeniceBlue16px}
  position: absolute;
  top: 585px;
  left: 532px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const RequestACustomized = styled.p`
  position: absolute;
  top: 357px;
  left: 988px;
  font-family: var(--font-family-arial_rounded_mt);
  color: var(--geyser);
  font-size: var(--font-size-xl);
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
  font-weight: 700;
`;

const Span14 = styled.span`
  font-family: var(--font-family-arialrounded_mt-bold);
`;

const X20221TrolleyBusi = styled.p`
  ${ArialroundedmtBoldWhite16px}
  position: absolute;
  top: 935px;
  left: 782px;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

const X1234 = styled.img`
  position: absolute;
  width: 161px;
  height: 27px;
  top: 929px;
  left: 1619px;
  object-fit: cover;
`;

export default HomePage;
