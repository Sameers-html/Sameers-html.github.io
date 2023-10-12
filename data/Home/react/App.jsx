import "./App.css";
import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import IPadHomePage from "./components/IPadHomePage";
import PhoneHomePage from "./components/PhoneHomePage";
import Artboard1 from "./components/Artboard1";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home-page">
            <HomePage {...homePageData} />
          </Route>
          <Route path="/ipad-home-page">
            <IPadHomePage {...iPadHomePageData} />
          </Route>
          <Route path="/:path(|phone-home-page-all-breakpoints)">
            <PhoneHomePage {...phoneHomePageData} />
          </Route>
          <Route path="/artboard-1">
            <Artboard1 />
          </Route>
          <Route path="/artboard-2">
            <Artboard1 />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const headerData = {
    src: "/img/airbus-xo-connected-fleet@1x.png",
};

const component111Data = {
    children: "Solutions",
    className: "",
};

const solutions1Data = {
    line1: "/img/line-1@1x.png",
    component11Props: component111Data,
};

const mobileData = {
    untitled11: "/img/untitled-1@1x.png",
    untitled12: "/img/untitled-1-1@1x.png",
};

const component112Data = {
    children: "About",
    className: "component-1-1-1",
};

const solutions2Data = {
    line1: "/img/line-1-1@1x.png",
    className: "about",
    component11Props: component112Data,
};

const component32Data = {
    smallBusiness: "/img/small-business-1@1x.png",
    surname: "Small Business",
    resturantCafeSma: <React.Fragment>Resturant, Cafe, Small Shop<br />Online Store, Home cook</React.Fragment>,
};

const component34Data = {
    smallBusiness: "/img/small-business-1@1x.png",
    zoka: "Zoka",
    resturantCafeSma: <React.Fragment>Resturant, Cafe, Small Shop<br />Online Store, Home cook</React.Fragment>,
};

const surveyData = {
    whichOneAreYou: "Which one are you?",
    enterprise1: "/img/enterprise-1@1x.png",
    place1: "Enterprise",
    fmcgCgp1: "FMCG, CGP",
    rider1: "/img/rider-1@1x.png",
    rider2: "Rider",
    motorBikeTruck1: "Motor Bike, Truck",
    consumer1: "/img/consumer-1@1x.png",
    consumer2: "Consumer",
    lookingForABetter1: <React.Fragment>Looking for a better local<br />shopping experience</React.Fragment>,
    shitoSito: "Shito Sito",
    enterprise2: "/img/enterprise-1@1x.png",
    hamdy: "Hamdy",
    fmcgCgp2: "FMCG, CGP",
    rider3: "/img/rider-1@1x.png",
    place2: "Dany",
    motorBikeTruck2: "Motor Bike, Truck",
    consumer3: "/img/consumer-1@1x.png",
    sameer: "Sameer",
    lookingForABetter2: <React.Fragment>Looking for a better local<br />shopping experience</React.Fragment>,
    component32Props: component32Data,
    component34Props: component34Data,
};

const component571Data = {
    children: "LEARN MORE",
};

const resultData = {
    faq: "/img/faq@1x.png",
    fleet: "/img/fleet@1x.png",
    isAPowerfulManage: <React.Fragment>is a powerful management, reporting and admin dashboard system<br />built as a mobile first web based platform. Meaning, it works just as great on<br />mobile devices and computers, to let you control your delivery system</React.Fragment>,
    component57Props: component571Data,
};

const x1TrolleyB2C1Data = {
    src: "/img/1trolley-b2c-1x-png-1x-png@1x.png",
};

const x1TrollyData = {
    x1TrolleyB2CProps: x1TrolleyB2C1Data,
};

const x1TrolleyB2C2Data = {
    src: "/img/flock-1x-png-1x-png@1x.png",
    className: "flock-1",
};

const x1PayData = {
    src: "/img/1pay@1x.png",
};

const component572Data = {
    children: "Request Contact",
    className: "component-5-8",
};

const homePageData = {
    x1TbLogo: "/img/1tb-logo@1x.png",
    place: "Home",
    title: "Empowering communities",
    throughDigitalTransformation: "through digital transformation...",
    award14X: "/img/award-1-4x@1x.png",
    award24X: "/img/award-2-4x@1x.png",
    x1StPortfolioCompan: <React.Fragment>1st Portfolio Company Joining<br />SOSV from Africa &amp; Middle East</React.Fragment>,
    ebrdStarVentureAw: <React.Fragment>EBRD Star Venture Award<br />Only Winner from Africa &amp; Middle East</React.Fragment>,
    x1TbIcon4X: "/img/1tb-icon-4x@1x.png",
    becauseTheCompetit: <React.Fragment>Because the competitive edge is gained TODAY,<br />not in 24-48 hours.</React.Fragment>,
    ourPassionForThe: <React.Fragment>Our passion for the delivery industry started with 1Trolley the B2C<br />application, Then we realized that our core is the last-mile delivery<br />service. It’s what we do the best so we came up with Flock to serve<br />small shops and business and Fleet to manage the delivery services</React.Fragment>,
    letUsHelpYouThro: "Let us help you through your success journey!",
    toFullfillYourBus: "to fullfill your business needs, you need...",
    notYourAverageSaasCompany: "Not Your Average SaaS Company",
    spanText1: <React.Fragment>We continue to recognize needs and our innovative team rises to the challenge every time.<br />Ask us about these execiting and </React.Fragment>,
    spanText2: "AWARD WINNING PRODUCTS",
    spanText3: ", we'd love to tell you all about them.",
    spanText4: <React.Fragment>1TROLLEY<br /></React.Fragment>,
    spanText5: <React.Fragment>MARKETPLACE &amp; DELIVERY FOR<br />NEIGHBORHOOD SHOPS</React.Fragment>,
    spanText6: <React.Fragment>FLOCK<br /></React.Fragment>,
    spanText7: <React.Fragment>ON-DEMAND DELIVERY SERVICE FOR<br />SMALL BUSINESSES</React.Fragment>,
    spanText8: <React.Fragment>1PAY<br /></React.Fragment>,
    spanText9: <React.Fragment>BLOCKCHAIN PAYMENT<br />GATEWAY</React.Fragment>,
    someOfOurClients: "Some of Our Clients",
    clients: "/img/clients@1x.png",
    letsMakeItAllHappen: "Let’s Make It All Happen!",
    ifYoureReadyToS: <React.Fragment>If you’re ready to see how we can support your company, book a call<br />to chat with our sales team or request a customized solution</React.Fragment>,
    fullName: "Full Name",
    companySName: "Company's Name",
    email: "Email",
    phoneNumber: "Phone Number",
    spanText10: "Request a Customized Solution ",
    spanText11: "(Optional)",
    x20221TrolleyBusi: "2022 © 1Trolley Business. All rights reserved.",
    x1234: "/img/1234@1x.png",
    headerProps: headerData,
    solutions1Props: solutions1Data,
    mobileProps: mobileData,
    solutions2Props: solutions2Data,
    surveyProps: surveyData,
    resultProps: resultData,
    x1TrollyProps: x1TrollyData,
    x1TrolleyB2CProps: x1TrolleyB2C2Data,
    x1PayProps: x1PayData,
    component57Props: component572Data,
};

const iPadHomePageData = {
    artboard2: "/img/artboard---2@1x.png",
    untitled1: "/img/untitled-1-2@1x.png",
    empoweringCommunities: "Empowering communities",
    throughDigitalTransformation: "through digital transformation...",
    award14X: "/img/award-1-4x-1@1x.png",
    award24X: "/img/award-2-4x-1@1x.png",
    x1StPortfolioCompan: <React.Fragment>1st Portfolio Company<br />Joining SOSV from<br />Africa &amp; Middle East</React.Fragment>,
    ebrdStarVentureAw: <React.Fragment>EBRD Star Venture<br />Award Only Winner from<br />Africa &amp; Middle East</React.Fragment>,
    x1TbLogo: "/img/1tb-logo-1-1x-png@1x.png",
    line4: "/img/line-4-1@1x.png",
    line5: "/img/line-4-1@1x.png",
    line6: "/img/line-4-1@1x.png",
    x1TbIcon4X: "/img/1tb-icon-4x-1@1x.png",
    becauseTheCompetit: <React.Fragment>Because the competitive edge is<br />gained TODAY, not in 24-48 hours.</React.Fragment>,
    ourPassionForThe: <React.Fragment>Our passion for the delivery industry started with<br />1Trolley the B2C application, Then we realized that<br />our core is the last-mile delivery service. It’s what<br />we do the best so we came up with Flock to serve<br />small shops and business and Fleet to manage the<br />delivery services.</React.Fragment>,
    letUsHelpYouThro: <React.Fragment>Let us help you through your<br />success journey!</React.Fragment>,
    whichOneAreYou: "Which one are you?",
    shitoSito: "Shito Sito",
    enterprise: "/img/enterprise-2@1x.png",
    hamdy: "Hamdy",
    fmcgCgp: "FMCG, CGP",
    smallBusiness: "/img/small-business-2@1x.png",
    zoka: "Zoka",
    surname: <React.Fragment>Small Shop, Cafe,<br />Resturant  and etc...</React.Fragment>,
    rider: "/img/rider-2@1x.png",
    place: "Dany",
    motorBikeTruck: "Motor Bike, Truck",
    consumer: "/img/consumer-2@1x.png",
    sameer: "Sameer",
    lookingForABetter: <React.Fragment>Looking for a better local<br />shopping experience</React.Fragment>,
    toFullfillYourBus: "to fullfill your business needs, you need...",
    faq: "/img/faq-1@1x.png",
    notYourAverageSaasCompany: "Not Your Average SaaS Company",
    spanText1: <React.Fragment>We continue to recognize needs and our innovative team rises to the<br />challenge every time. Ask us about these execiting and<br /></React.Fragment>,
    spanText2: "AWARD WINNING PRODUCTS",
    spanText3: ", we'd love to tell you all about them.",
    x1TrolleyB2C: "/img/1trolley-b2c-1-1x-png@1x.png",
    flock: "/img/flock-1-1x-png@1x.png",
    spanText4: <React.Fragment>1TROLLEY<br /></React.Fragment>,
    spanText5: <React.Fragment>MARKETPLACE &amp;<br />DELIVERY FOR<br />NEIGHBORHOOD SHOPS</React.Fragment>,
    spanText6: <React.Fragment>FLOCK<br /></React.Fragment>,
    spanText7: <React.Fragment>ON-DEMAND DELIVERY<br />SERVICE FOR<br />SMALL BUSINESSES</React.Fragment>,
    spanText8: <React.Fragment>1PAY<br /></React.Fragment>,
    spanText9: <React.Fragment>BLOCKCHAIN<br />PAYMENT GATEWAY</React.Fragment>,
    someOfOurClients: "Some of Our Clients",
    clients: "/img/clients-1@1x.png",
};

const x1Pay22Data = {
    className: "x1-pay-3",
};

const phoneHomePageData = {
    overlapGroup5: "/img/artboard---1-1x-png-1x-png@1x.png",
    x1TbLogo: "/img/1tb-logo-2-1x-png@1x.png",
    empoweringCommunities: <React.Fragment>Empowering<br />communities</React.Fragment>,
    throughDigitalTransformation: "through digital transformation...",
    award14X: "/img/award-1-4x-2@1x.png",
    award24X: "/img/award-2-4x-2@1x.png",
    x1StPortfolioCompan: <React.Fragment>1st Portfolio Company<br />Joining SOSV from<br />Africa &amp; Middle East</React.Fragment>,
    ebrdStarVentureAw: <React.Fragment>EBRD Star Venture<br />Award Only Winner from <br />Africa &amp; Middle East</React.Fragment>,
    line4: "/img/line-4-1@1x.png",
    line5: "/img/line-4-1@1x.png",
    line6: "/img/line-4-1@1x.png",
    becauseTheCompetit: <React.Fragment>Because the competitive edge is<br />gained TODAY, not in 24-48 hours.</React.Fragment>,
    ourPassionForThe: <React.Fragment>Our passion for the delivery industry started with 1Trolley the<br />B2C application, Then we realized that our core is the<br />last-mile delivery service. It’s what we do the best so we came<br />up with Flock to serve small shops and business and Fleet to<br />manage the delivery services.</React.Fragment>,
    letUsHelpYouThro: <React.Fragment>Let us help you through your<br />success journey!</React.Fragment>,
    whichOneAreYou: "Which one are you?",
    shitoSito: "Shito Sito",
    enterprise: "/img/enterprise-2@1x.png",
    hamdy: "Hamdy",
    fmcgCgp: "FMCG, CGP",
    smallBusiness: "/img/small-business-2@1x.png",
    zoka: "Zoka",
    surname: <React.Fragment>Small Shop, Cafe,<br />Resturant  and etc...</React.Fragment>,
    rider: "/img/rider-2@1x.png",
    place: "Dany",
    motorBikeTruck: "Motor Bike, Truck",
    consumer: "/img/consumer-2@1x.png",
    sameer: "Sameer",
    lookingForABetter: <React.Fragment>Looking for a better local<br />shopping experience</React.Fragment>,
    toFullfillYourBus: "to fullfill your business needs, you need...",
    faq: "/img/faq-2@1x.png",
    notYourAverageSaasCompany: "Not Your Average SaaS Company",
    spanText1: <React.Fragment>We continue to recognize needs and our innovative team rises to the<br />challenge every time. Ask us about these execiting and<br /></React.Fragment>,
    spanText2: "AWARD WINNING PRODUCTS",
    spanText3: ", we'd love to tell you all about them.",
    x1TrolleyB2C: "/img/1trolley-b2c-1-1x-png@1x.png",
    spanText4: <React.Fragment>1TROLLEY<br /></React.Fragment>,
    spanText5: <React.Fragment>MARKETPLACE &amp; DELIVERY FOR<br />NEIGHBORHOOD SHOPS</React.Fragment>,
    flock: "/img/flock-1-1x-png@1x.png",
    spanText6: <React.Fragment>FLOCK<br /></React.Fragment>,
    spanText7: <React.Fragment>ON-DEMAND DELIVERY SERVICE FOR<br />SMALL BUSINESSES</React.Fragment>,
    spanText8: <React.Fragment>1PAY<br /></React.Fragment>,
    spanText9: <React.Fragment>BLOCKCHAIN PAYMENT<br />GATEWAY</React.Fragment>,
    someOfOurClients: "Some of Our Clients",
    clients: "/img/clients-2@1x.png",
    letsMakeItAllHappen: "Let’s Make It All Happen!",
    ifYoureReadyToS: <React.Fragment>If you’re ready to see how we can support your company, book a call<br />to chat with our sales team or request a customized solution</React.Fragment>,
    x20221TrolleyBusi: "2022 © 1Trolley Business. All rights reserved.",
    x1234: "/img/1234-2@1x.png",
    overlapGroup: "/img/path-1-1x-png@1x.png",
    fullName: "Full Name",
    companySName: "Company's Name",
    email: "Email",
    phoneNumber: "Phone Number",
    spanText10: "Request a Customized Solution ",
    spanText11: "(Optional)",
    x1Pay2Props: x1Pay22Data,
};

