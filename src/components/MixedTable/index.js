/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const ROW_VARIANTS = {
  arrow: ArrowRow,
  blue: BlueRow,
  borderBottom: BorderBottomRow,
  empty: EmptyRow,
  group: GroupRow,
  nested: NestedRow,
};

const MixedTable = ({ columns, formattedData }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data: formattedData,
    });

  return (
    <Container data-testid="TableGenerator">
      <table
        className={className}
        isExpanded={isExpanded}
        variant={rowVariant}
        {...getTableProps()}
      >
        <thead>
          {headerGroups.map((headerGroup, headerGroupKey) => (
            <tr key={headerGroupKey} {...headerGroup?.getHeaderGroupProps()}>
              {headerGroup.headers.map((header) => (
                <th header={header}></th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(({ rowVariant, cells }) => {
            const Component = ROW_VARIANTS[rowVariant];
            return <Component cells={cells} />;
          })}
        </tbody>
      </table>
    </Container>
  );
};

MixedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      accessor: PropTypes.oneOf([PropTypes.string, PropTypes.func]).isRequired,
      id: PropTypes.string,
      Cell: PropTypes.oneOf([PropTypes.func, PropTypes.elementType]),
    }),
  ),
  formattedData: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Optional variant for the row to be rendered, in some cases it will always be the same value
       */
      rowVariant: PropTypes.string,
      /**
       * Required cells, list of data to be consumed to render each cell
       */
      cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    }),
  ),
};

export default MixedTable;