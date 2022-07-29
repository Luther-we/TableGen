import React from "react";
import useCallArrowTable from "./hooks/useCallArrowTable";

const headers = {
  lambor: "Hello",
  col2: "Yukulele",
  col3: "Paname",
};

const datas = [
  {
    uuid: "sstst",
    startDate: newDate(),
    col2: 'je ne sais pas'
  },
];

const CallArrowTable = ({ headers, datas }) => {
  const { columns, rows } = useCallArrowTable({
    headers,
    datas,
  });

  return <ArrowTable columns={columns} rows={rows} />;
};

export default CallArrowTable;
