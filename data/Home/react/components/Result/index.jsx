import React from "react";
import Component57 from "../Component57";
import styled from "styled-components";
import { ArialroundedmtRegularNormalDoveGray1 } from "../../styledMixins";


class Result extends React.Component {
  render() {
    const { faq, fleet, isAPowerfulManage, component57Props } = this.props;

    return (
      <Result1>
        <Faq src={faq} />
        <Rectangle32></Rectangle32>
        <Group21>
          <Group20>
            <Fleet src={fleet} />
            <IsAPowerfulManage>{isAPowerfulManage}</IsAPowerfulManage>
            <Component57>{component57Props.children}</Component57>
          </Group20>
        </Group21>
      </Result1>
    );
  }
}

const Result1 = styled.div`
  position: absolute;
  height: 1288px;
  top: 125px;
  left: 400px;
  display: flex;
  align-items: flex-end;
  min-width: 2051px;
`;

const Faq = styled.img`
  width: 780px;
  height: 780px;
  object-fit: cover;
`;

const Rectangle32 = styled.div`
  width: 286px;
  height: 355px;
  align-self: flex-start;
  margin-left: 44px;
  background-color: #f8f8f8;
  border-radius: 71px;
  opacity: 0.1;
`;

const Group21 = styled.div`
  width: 613px;
  height: 683px;
  margin-left: 328px;
  margin-bottom: 48px;
  display: flex;
  background-color: var(--black-haze);
`;

const Group20 = styled.div`
  margin-top: 34px;
  margin-left: 28px;
  margin-right: 27px;
  flex: 1;
  margin-bottom: 34px;
  width: 560px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 68px);
`;

const Fleet = styled.img`
  width: 245px;
  height: 389px;
  margin-right: 1px;
  object-fit: cover;
`;

const IsAPowerfulManage = styled.p`
  ${ArialroundedmtRegularNormalDoveGray1}
  min-height: 59px;
  margin-top: 38px;
  min-width: 560px;
  text-align: center;
  letter-spacing: 0;
  line-height: 16px;
  white-space: nowrap;
`;

export default Result;
