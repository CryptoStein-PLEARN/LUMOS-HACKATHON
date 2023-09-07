import Card from "components/card";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
const General = ({ data }) => {
  const location = useLocation();
  const history = useNavigate();
  const user = location.pathname.split("/")[3];
  console.log(history);
  const handleClick = (e) => {
    history(`/admin/User/${e}`);
  };

  if (user) {
    return (
      <div className="grid grid-cols-2 gap-5">
        <Card extra={"w-full h-full p-3"}>
          {/* Header */}
          <div className="mt-2 w-full ">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              User - {user}
            </h4>
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 hover:cursor-pointer  dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Subject line</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                I'd like to ask a question
              </p>
            </div>
            <h3 className="mt-3 border-t-2   px-2 ">Message</h3>
            <p className="  px-2 pt-2 pb-8 text-base text-gray-600">
              As we live, our hearts turn colder. Cause pain is what we go
              through as we become older. We get insulted by others, lose trust
              for those others. We get back stabbed by friends. It becomes
              harder for us to give others a hand. We get our heart broken by
              people we love, even that we give them all .
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-2 gap-4  px-2">
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Email</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                sanskar@gmail.com
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Phone number</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                +93 6452839169
              </p>
            </div>
          </div>
        </Card>
      </div>
    );
  } else {
    if (data) {
      const components = data?.map((item) => (
        <Card
          key={item.id}
          onClick={() => {
            handleClick(item.name);
          }}
          extra={"w-full h-full p-3"}
        >
          <div className="mt-2 w-full ">
            <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
              User - {item.name}
            </h4>
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 hover:cursor-pointer  dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Subject line</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                I'd like to ask a question
              </p>
            </div>
            <h3 className="mt-3 border-t-2   px-2 ">Message</h3>
            <p className="  px-2 pt-2 pb-8 text-base text-gray-600">
              As we live, our hearts turn colder...
            </p>
          </div>
        </Card>
      ));
      return <div className="grid grid-cols-2 gap-5">{components} </div>;
    } else {
      return (
        <div className="mt-10 grid grid-cols-2 gap-5">
          <h2>Data is being load.. Please wait!</h2>
        </div>
      );
    }
  }
};

export default General;
