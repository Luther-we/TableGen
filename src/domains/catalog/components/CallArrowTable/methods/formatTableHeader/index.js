const formatTableHeader = (headers) => {
  return [
    {
      Header: t(headers.col3),
      Cell: ({ cell }) => (
        <InputController
          variant={cell.typographyVariant}
          onClick={cell.onClick}
          value={cell.value}
        />
      ),
      accessor: "col3",
      sortingMethod: () => {},
    },
    {
      Header: header.value,
      accessor: "col2",
      Cell: ({ cell }) => cell.valid ?  <Typography value={cell} /> : ,
    },
  ];
};

export default formatTableHeader;
