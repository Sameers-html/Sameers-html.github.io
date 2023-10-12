import React from "react";
import Component514 from "../Component514";
import styled from "styled-components";
import {
  ArialroundedmtBoldGeyser8px,
  ArialroundedmtBoldVeniceBlue8px,
  ArialroundedmtBoldWhite11px,
} from "../../styledMixins";


class Group27 extends React.Component {
  render() {
    return (
      <Group271>
        <OverlapGroup2>
          <Rectangle42></Rectangle42>
          <LetsMakeItAllHappen>Let’s Make It All Happen!</LetsMakeItAllHappen>
          <IfYoureReadyToS>
            If you’re ready to see how we can support your company, book a call
            <br />
            to chat with our sales team or request a customized solution
          </IfYoureReadyToS>
          <X20221TrolleyBusi>2022 © 1Trolley Business. All rights reserved.</X20221TrolleyBusi>
          <X1234 src="/img/1234-1@1x.png" />
          <Group26>
            <FlexRow>
              <FlexCol>
                <FullName>Full Name</FullName>
                <Rectangle6></Rectangle6>
                <OverlapGroup1>
                  <Rectangle8></Rectangle8>
                  <Email>Email</Email>
                </OverlapGroup1>
                <RequestACustomized>
                  <span className="arialroundedmt-bold-venice-blue-8px">Request a Customized Solution </span>
                  <span className="arialroundedmt-bold-geyser-8px-2">(Optional)</span>
                </RequestACustomized>
              </FlexCol>
              <FlexCol1>
                <CompanysName>Company&#39;s Name</CompanysName>
                <Rectangle7></Rectangle7>
                <OverlapGroup1>
                  <Rectangle8></Rectangle8>
                  <Email>Phone Number</Email>
                </OverlapGroup1>
              </FlexCol1>
            </FlexRow>
            <Rectangle10></Rectangle10>
          </Group26>
          <Component514 />
        </OverlapGroup2>
      </Group271>
    );
  }
}

const Group271 = styled.div`
  margin-top: 37px;
  display: flex;
  align-items: flex-start;
  min-width: 768px;
`;

const OverlapGroup2 = styled.div`
  width: 768px;
  height: 996px;
  position: relative;
  border-radius: 0px 0px 60px 60px;
`;

const Rectangle42 = styled.div`
  position: absolute;
  width: 768px;
  height: 996px;
  top: 0;
  left: 0;
  border-radius: 0px 0px 60px 60px;
  transform: rotate(180deg);
  background: linear-gradient(154.29deg, #125c8f 8.79%, #06198d 100.97%, #06178d 117.32%);
`;

const LetsMakeItAllHappen = styled.div`
  position: absolute;
  top: 70px;
  left: 263px;
  font-family: var(--font-family-arialrounded_mt-bold);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxl);
  text-align: center;
  letter-spacing: 0;
  line-height: 20px;
  white-space: nowrap;
`;

const IfYoureReadyToS = styled.p`
  position: absolute;
  top: 102px;
  left: 162px;
  font-family: var(--font-family-arialrounded_mt-regular);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-l);
  text-align: center;
  letter-spacing: 0;
  line-height: 14px;
  white-space: nowrap;
`;

const X20221TrolleyBusi = styled.p`
  ${ArialroundedmtBoldWhite11px}
  position: absolute;
  top: 606px;
  left: 262px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

const X1234 = styled.img`
  position: absolute;
  width: 127px;
  height: 21px;
  top: 570px;
  left: 321px;
  object-fit: cover;
`;

const Group26 = styled.div`
  position: absolute;
  width: 608px;
  top: 157px;
  left: 80px;
  display: flex;
  flex-direction: column;
  padding: 30px 75.5px;
  align-items: flex-start;
  min-height: 363px;
  background-color: var(--white);
  border-radius: 25px;
  box-shadow: 13px 12px 7px #00000029;
`;

const FlexRow = styled.div`
  height: 145px;
  display: flex;
  align-items: flex-start;
  min-width: 456px;
`;

const FlexCol = styled.div`
  width: 222px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 145px;
`;

const FullName = styled.div`
  ${ArialroundedmtBoldVeniceBlue8px}
  min-height: 12px;
  margin-left: 2.5px;
  min-width: 40px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const Rectangle6 = styled.div`
  width: 220px;
  height: 37px;
  margin-top: 2px;
  margin-left: 2px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const OverlapGroup1 = styled.div`
  width: 222px;
  height: 48px;
  position: relative;
  margin-top: 16px;
`;

const Rectangle8 = styled.div`
  position: absolute;
  width: 222px;
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
  left: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const RequestACustomized = styled.p`
  ${ArialroundedmtBoldGeyser8px}
  min-height: 12px;
  margin-top: 17px;
  margin-left: 1.5px;
  min-width: 164px;
  text-align: center;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const FlexCol1 = styled.div`
  width: 222px;
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 116px;
`;

const CompanysName = styled.div`
  ${ArialroundedmtBoldVeniceBlue8px}
  min-height: 12px;
  margin-left: 2.5px;
  letter-spacing: 0;
  line-height: 8px;
  white-space: nowrap;
`;

const Rectangle7 = styled.div`
  width: 221px;
  height: 37px;
  margin-top: 2px;
  margin-left: 1px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

const Rectangle10 = styled.div`
  width: 456px;
  height: 84px;
  margin-top: 2px;
  border-radius: 8px;
  border: 3px solid;
  border-color: var(--geyser);
`;

export default Group27;
