import { useMemo } from "react";
import { tableData } from "@/data";
import { useTable } from "react-table";

const DataTable: React.FC<{
  setModal: (value: boolean) => void;
  setSideNavView: (value: boolean) => void;
}> = ({ setModal, setSideNavView }) => {
  const data = useMemo(() => tableData, [tableData]);

  const columns = useMemo(
    () => [
      {
        Header: "# ID",
        accessor: "id",
      },
      {
        Header: "TITLE",
        accessor: "title",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
      {
        Header: "CATEGORY",
        accessor: "category",
      },
      {
        Header: "ACTION",
        accessor: "",
      },
    ],
    []
  );
  const {
    getTableProps,

    getTableBodyProps,

    headerGroups,

    rows,

    prepareRow,
  } = useTable({ columns: columns as any, data });

  return (
    <table {...getTableProps()} className="w-full mt-5">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            className="bg-gray-200 font-medium text-gray-500"
          >
            {headerGroup.headers.map((column) => (
              <>
                {column.Header === "ACTION" ? (
                  <td
                    {...column.getHeaderProps()}
                    className="py-4 flex w-full justify-end pr-10"
                  >
                    {column.render("Header")}
                  </td>
                ) : (
                  <td {...column.getHeaderProps()} className="py-4 pl-10">
                    {column.render("Header")}
                  </td>
                )}
              </>
            ))}
          </tr>
        ))}
      </thead>

      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);

          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <>
                    {cell.column.Header === "ACTION" ? (
                      <td
                        {...cell.getCellProps()}
                        className="py-4 flex w-full justify-end pr-10"
                      >
                        <button
                          className="font-semibold text-blue-600"
                          onClick={() => setSideNavView(true)}
                        >
                          Edit
                        </button>
                        <button
                          className="ml-5 font-medium"
                          onClick={() => setModal(true)}
                        >
                          Delete
                        </button>
                      </td>
                    ) : (
                      <td
                        {...cell.getCellProps()}
                        className="py-4 pl-10 font-medium"
                      >
                        {cell.render("Cell")}
                      </td>
                    )}
                  </>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DataTable;
