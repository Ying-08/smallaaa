import React, { FC, ReactNode, memo } from "react";

interface IPros {
  children?: ReactNode;
}

const AnnEdit: FC<IPros> = () => {
  return <div>公告编辑</div>;
};

export default memo(AnnEdit);
