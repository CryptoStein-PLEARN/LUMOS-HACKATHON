import { columnsDataDevelopment } from "./variables/columnsData";
import tableDataDevelopment from "./variables/tableDataDevelopment.json";
import DevelopmentTable from "./components/DevelopmentTable";
import { useEffect, useState } from "react";
import axios from "axios";

const Tables = () => {
  const [data, setData] = useState();
  const getGetInTouchDetails = async () => {
    const res = await axios.get(
      "https://plearn-backend.onrender.com/getGetInTouchDetails"
    );

    console.log(res.data);
    setData(res.data);
  };
  useEffect(() => {
    getGetInTouchDetails();
  }, []);
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
