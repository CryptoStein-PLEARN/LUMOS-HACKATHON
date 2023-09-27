import { columnsDataDevelopment } from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from "./components/DevelopmentTable";
import { useSelector } from "react-redux";

const Tables = () => {
  const data = useSelector((state) => state.UserSlice.data);
  return (
    <div>
      <div className="mt-5 grid h-full grid-cols-1 gap-5">
        <DevelopmentTable
          dataSet={data}
          columnsData={columnsDataDevelopment}
          tableData={tableDataDevelopment}
        />
      </div>
    </div>
  );
};

export default Tables;
