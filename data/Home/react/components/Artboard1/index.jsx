import React from "react";
import styled from "styled-components";
import { ArialroundedmtRegularNormalWhite11p, ArialroundedmtRegularNormalNavyBlue } from "../../styledMixins";
import "./Artboard1.css";

class Artboard1 extends React.Component {
  render() {
    return (
      <div className="container-center-horizontal">
        <div className="artboard-1 screen">
          <OverlapGroup1>
            <Group63>
              <FlexRow>
                <Place>Home</Place>
                <OverlapGroup>
                  <Line6 src="/img/line-6-1@1x.png" />
                </OverlapGroup>
              </FlexRow>
              <Line4 src="/img/line-4-1@1x.png" />
              <Solutions>Solutions</Solutions>
              <About>About</About>
            </Group63>
            <Line7 src="/img/line-4-1@1x.png" />
          </OverlapGroup1>
        </div>
      </div>
    );
  }
}

const OverlapGroup1 = styled.div`
  width: 136px;
  height: 96px;
  position: relative;
  border-radius: 15px;
`;

const Group63 = styled.div`
  position: absolute;
  width: 136px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 3px 15.6px;
  align-items: center;
  min-height: 96px;
  background-color: var(--supernova);
  border-radius: 15px;
`;

const FlexRow = styled.div`
  height: 18px;
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  min-width: 67px;
`;

const Place = styled.div`
  ${ArialroundedmtRegularNormalNavyBlue}
  min-height: 14px;
  min-width: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup = styled.div`
  align-self: flex-end;
  margin-left: 22px;
  display: flex;
  padding: 0px 0;
  align-items: flex-start;
  min-width: 13px;
  background-image: url(/img/line-4-4@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Line6 = styled.img`
  width: 13px;
  height: 13px;
  object-fit: cover;
`;

const Line4 = styled.img`
  width: 85px;
  height: 1px;
  margin-top: 12px;
  margin-left: 1px;
  object-fit: cover;
`;

const Solutions = styled.div`
  ${ArialroundedmtRegularNormalWhite11p}
  margin-bottom: -16px;
  min-height: 14px;
  margin-left: 2px;
  min-width: 48px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const About = styled.div`
  ${ArialroundedmtRegularNormalWhite11p}
  margin-bottom: -16px;
  min-height: 14px;
  margin-top: 17px;
  margin-left: 2px;
  min-width: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Line7 = styled.img`
  position: absolute;
  width: 85px;
  height: 1px;
  top: 63px;
  left: 26px;
  object-fit: cover;
`;

const OverlapGroup11 = styled.div`
  width: 136px;
  height: 96px;
  position: relative;
  border-radius: 15px;
`;

const Group631 = styled.div`
  position: absolute;
  width: 136px;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 3px 15.6px;
  align-items: center;
  min-height: 96px;
  background-color: var(--supernova);
  border-radius: 15px;
`;

const FlexRow1 = styled.div`
  height: 18px;
  align-self: flex-end;
  display: flex;
  align-items: flex-start;
  min-width: 67px;
`;

const Place1 = styled.div`
  ${ArialroundedmtRegularNormalNavyBlue}
  min-height: 14px;
  min-width: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const OverlapGroup2 = styled.div`
  align-self: flex-end;
  margin-left: 22px;
  display: flex;
  padding: 0px 0;
  align-items: flex-start;
  min-width: 13px;
  background-image: url(/img/line-4-4@1x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Line61 = styled.img`
  width: 13px;
  height: 13px;
  object-fit: cover;
`;

const Line41 = styled.img`
  width: 85px;
  height: 1px;
  margin-top: 12px;
  margin-left: 1px;
  object-fit: cover;
`;

const Solutions1 = styled.div`
  ${ArialroundedmtRegularNormalWhite11p}
  margin-bottom: -16px;
  min-height: 14px;
  margin-left: 2px;
  min-width: 48px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const About1 = styled.div`
  ${ArialroundedmtRegularNormalWhite11p}
  margin-bottom: -16px;
  min-height: 14px;
  margin-top: 17px;
  margin-left: 2px;
  min-width: 32px;
  text-align: center;
  letter-spacing: 0;
  line-height: 30px;
  white-space: nowrap;
`;

const Line71 = styled.img`
  position: absolute;
  width: 85px;
  height: 1px;
  top: 63px;
  left: 26px;
  object-fit: cover;
`;

export default Artboard1;
