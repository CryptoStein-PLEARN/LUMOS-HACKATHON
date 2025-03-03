import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { useNavigate } from "react-router-dom";
import { FcNext, FcPrevious } from "react-icons/fc";
const DevelopmentTable = (props) => {
  const history = useNavigate();
  const { columnsData, dataSet } = props;
  function getNameIdByName(inputName, arrayOfObjects) {
    const foundObject = arrayOfObjects.find((obj) => obj.name === inputName);
    return foundObject ? foundObject._id : null;
  }

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => dataSet || [], [dataSet]);
  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 11 },
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
    canNextPage,
    canPreviousPage,
    prepareRow,
    initialState,
  } = tableInstance;

  const handleDate = (dateString) => {
    const date = new Date(dateString);
    const normalDate = date.toISOString().split("T")[0];
    return normalDate;
  };
  const NameId = data?.map((obj) => ({
    name: obj.name,
    _id: obj._id,
  }));
  const handleClick = (e) => {
    const url = getNameIdByName(e, NameId);
    history(`/admin/User/${e}_${url}`);
  };
  return (
    <Card extra={"w-full h-full p-4"}>
      <div class="relative flex items-center justify-between">
        <div class="text-xl font-bold text-navy-700 dark:text-white">
          Request Table
        </div>
        <CardMenu />
      </div>

      <div class="h-full overflow-x-scroll xl:overflow-x-hidden">
        {dataSet ? (
          <table
            {...getTableProps()}
            className="mt-8 h-max w-full"
            variant="simple"
            color="gray-500"
          >
            <thead>
              {headerGroups.map((headerGroup, index) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                  {headerGroup.headers.map((column, index) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      className="border-b border-gray-200 pr-32 pb-[10px] text-start dark:!border-navy-700 "
                      key={index}
                    >
                      <div className="text-xs font-bold tracking-wide text-gray-600">
                        {column.render("Header")}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row, index) => {
                prepareRow(row);

                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      let data = "";
                      if (cell.column.Header === "NAME") {
                        data = (
                          <p
                            onClick={() => {
                              handleClick(cell.value);
                            }}
                            className="text-sm font-bold text-navy-700 hover:cursor-pointer dark:text-white"
                          >
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "Date") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {handleDate(cell.value)}
                          </p>
                        );
                      } else if (cell.column.Header === "Type") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "Email") {
                        data = (
                          <div className="flex w-full items-center">
                            {cell.value}
                          </div>
                        );
                      } else if (cell.column.Header === "Status") {
                        data = (
                          <div className="flex w-full items-center font-bold text-green-400">
                            {cell.value}
                          </div>
                        );
                      } else if (cell.column.Header === "Priority") {
                        data = (
                          <div className="flex w-full items-center font-bold text-red-400">
                            {cell.value}
                          </div>
                        );
                      }
                      // }
                      return (
                        <td
                          {...cell.getCellProps()}
                          key={index}
                          className="pt-[14px] pb-3 text-[14px]"
                        >
                          {data}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <span className="mt-8">Data is loading... please wait</span>
        )}
        <div className="flex w-full items-center justify-start gap-4 border-t-2">
          <button
            className="cursor-pointer rounded-full p-2 hover:bg-blue-100"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            <FcPrevious />
          </button>{" "}
          <button
            className="cursor-pointer rounded-full p-2 hover:bg-blue-100"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            <FcNext />
          </button>{" "}
          <span>
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default DevelopmentTable;
