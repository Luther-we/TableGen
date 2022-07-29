import formatTableData from "../methods/formatTableData/index";
import formatTableHeader from '../methods/formatTableHeader/index';

const useCallArrowTable = ({ headers, datas }) => {

  return {
    columns: formatTableHeader(headers),
    rows: formatTableData(datas),
  };
};

return useCallArrowTable;
