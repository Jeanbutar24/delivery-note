import { useMemo } from 'react';
import { useTable } from 'react-table';
const TableWrapper = ({ data, header, action, children }) => {
  const columns = useMemo(
    () => header,
    //eslint-disable-next-line
    []
  );
  const dataTable = useMemo(
    () => (data ? data : [{}]),
    //eslint-disable-next-line
    []
  );
  const tableInstance = useTable({ columns, data: dataTable });
  const { getTableBodyProps, getTableProps, headerGroups, rows, prepareRow } = tableInstance;

  return (
    <div className='w-full'>
      <div className='rounded-[6px]  h-[66vh] bg-white p-2 overflow-scroll '>
        <table className='w-full' {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr className='bg-[#eeeeee]' key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <th key={i} {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </th>
                ))}
                {action && <th>Action</th>}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);
              return children(row);
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableWrapper;
