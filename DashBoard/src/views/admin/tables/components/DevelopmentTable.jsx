import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { DiApple } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiWindows } from "react-icons/di";

import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import Checkbox from "components/checkbox";
import { MdCancel, MdCheckCircle, MdOutlineError } from "react-icons/md";

const DevelopmentTable = (props) => {
  const { columnsData, dataSet } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => dataSet || [], [dataSet]);

  const tableInstance = useTable(
    {
      columns,
      data,
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
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;
  const handleDate = (dateString) => {
    const date = new Date(dateString);
    const normalDate = date.toISOString().split("T")[0];
    return normalDate;
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
            mb="24px"
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
                console.log(row);
                return (
                  <tr {...row.getRowProps()} key={index}>
                    {row.cells.map((cell, index) => {
                      let data = "";
                      if (cell.column.Header === "NAME") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {cell.value}
                          </p>
                        );
                      } else if (cell.column.Header === "Date") {
                        data = (
                          <p className="text-sm font-bold text-navy-700 dark:text-white">
                            {handleDate(cell.value)}
                          </p>
                        );
                      } else if (cell.column.Header === "Email") {
                        data = (
                          <div className="flex w-full items-center">
                            {cell.value}
                          </div>
                        );
                      }
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
      </div>
    </Card>
  );
};

export default DevelopmentTable;
