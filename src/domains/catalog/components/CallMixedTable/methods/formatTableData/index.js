const formatTableData = ({ datas, remove }) => {
  return datas.map((data) => ({
    col1: formatDate(data.col1),
    col2: addCurrency(data.col2),
    col3: {
      value: "toto",
      onClick: remove(data.uuid),
      typographyVariant: "p",
    },
    rowVariant: data.col2 === "valid" ? "highlight" : "empty",
  }));
};

export default formatTableData;
