const formatTableHeader = (headers) => {
  return [
    {
      Header: "",
      Cell: ({ cell }) => <Icon onClick={cell.onClick} />,
      accessor: "col1",
      sortingMethod: () => {},
    },
    {
      Header: header.value,
      accessor: "col2",
      Cell: ({ cell }) => <Typography value={cell} />,
    },
  ];
};

export default formatTableHeader;
