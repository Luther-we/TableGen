import React from "react";
import useCallMixedTable from "./hooks/useCallMixedTable";

const CallMixedTable = ({ headers, datas }) => {
  const { columns, rows } = useCallMixedTable({
    headers,
    datas,
  });

  return <MixedTable columns rows />;
};

export default CallMixedTable;
