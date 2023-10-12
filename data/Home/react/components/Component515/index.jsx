import React from "react";
import styled from "styled-components";
import { ArialroundedmtBoldVeniceBlue11px } from "../../styledMixins";


class Component515 extends React.Component {
  render() {
    return (
      <Component510>
        <RequestContact>Request Contact</RequestContact>
      </Component510>
    );
  }
}

const Component510 = styled.div`
  height: 30px;
  align-self: center;
  margin-top: 18px;
  margin-right: 23.5px;
  display: flex;
  padding: 6.5px 17px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 128px;
  background-color: var(--black-haze);
  border-radius: 43px;
  box-shadow: 0px 3px 6px #00000029;
`;

const RequestContact = styled.div`
  ${ArialroundedmtBoldVeniceBlue11px}
  min-height: 14px;
  min-width: 92px;
  letter-spacing: 0;
  line-height: 11px;
  white-space: nowrap;
`;

export default Component515;
