import React from "react";
import empty from "../../../../images/empty.gif";
import { EmptyViewWrap } from "./EmptyViewComponent";

function EmptyView() {
  return (
    <EmptyViewWrap>
      <img src={empty} alt="empty" />
    </EmptyViewWrap>
  );
}

export default EmptyView;
