const formatTableData = ({ datas, remove }) => {
  return datas.map((data) => ({
    col1: formatDate(data.lambo),
    col2: addCurrency(data.col2),
    col3: {
      value: "toto",
      onClick: remove(data.uuid),
      typographyVariant: "p",
      valid: true
    },
    col4: {
      value: "toto",
      onClick: remove(data.uuid),
      typographyVariant: "bold",
    },
  }));
};
