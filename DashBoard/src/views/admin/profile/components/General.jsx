import axios from "axios";
import Card from "components/card";
import Radio from "components/radio";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
const General = ({ data }) => {
  const location = useLocation();
  const history = useNavigate();
  const user = location.pathname.split("/")[3];
  console.log(history);
  const handleClick = (e) => {
    history(`/admin/User/${e}`);
  };
  const handleReslove = (_id, e) => {
    const data = {
      _id: _id,
    }
    if (!e) {
      axios.post("https://plearn-backend.onrender.com/markAsResolved", data)
      .then((response) => {
        console.log(response )
      })
    }
  };
  if (user) {
    const userInput = user.toLowerCase();
    const userData = data?.filter((item) =>
      item.name.toLowerCase().includes(userInput)
    );
    const components = userData?.map(
      (item) =>
        !item?.resolved && (
          <Card key={item.id} extra={"w-full h-full p-3"}>
            <div className="mt-2 w-full ">
              <div className="flex  items-start justify-between px-3 py-4  ">
                <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
                  User - {item.name}
                </h4>{" "}
                <div className="flex items-center gap-3">
                  <span className="text-orange-400">Mark as Done</span>{" "}
                  <Radio
                    onClick={() => {
                      handleReslove(item._id, item.resolved);
                    }}
                  ></Radio>
                </div>
              </div>
              <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Subject line</p>
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  {item.subject}
                </p>
              </div>
              <h3 className="mt-3 border-t-2 px-2 ">Message</h3>
              <p className="  px-2 pt-2 pb-8 text-base text-gray-600">
                {item.description}
              </p>
            </div>
            {/* Cards */}
            <div className="grid grid-cols-2 gap-4  px-2">
              <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Email</p>
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  {item.email}
                </p>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
                <p className="text-sm text-gray-600">Phone number</p>
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  {item.phoneNumber}
                </p>
              </div>
            </div>
          </Card>
        )
    );
    return (
      <div>
        <BtnBack>
          <button
            onClick={() => history(`/admin/User/`)}
            className="my-3 rounded-xl"
          >
            <svg
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 1024 1024"
            >
              <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
            </svg>
            <span>Back</span>
          </button>
        </BtnBack>
        <div className="grid grid-cols-2 gap-5">{components} </div>
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
          extra={
            "shadow mt-6  hover:-translate-y-2 transition-all delay-150 hover:cursor-pointer  w-full h-full p-3"
          }
        >
          <div className=" mt-2 w-full ">
            <h4 className="px-2 text-xl font-bold  text-navy-700   dark:text-white">
              User - {item.name}
            </h4>
            <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Subject line</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                {item.subject}
              </p>
            </div>
            <h3 className="mt-3 border-t-2   px-2 ">Message</h3>
            <p className="  px-2 pt-2 pb-8 text-base text-gray-600">
              {item.description}
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
const BtnBack = styled.div`
  button {
    display: flex;
    height: 2.5em;
    width: 90px;
    align-items: center;
    justify-content: center;
    background-color: black;
    color: white;
    letter-spacing: 1px;
    transition: all 0.2s linear;
    cursor: pointer;
    border: none;
  }

  button > svg {
    margin-right: 5px;
    margin-left: 5px;
    color: white;
    fill: white;
    font-size: 20px;
    transition: all 0.4s ease-in;
  }

  button:hover > svg {
    font-size: 1.2em;
    transform: translateX(-5px);
  }

  button:hover {
    box-shadow: 9px 9px 33px #d1d1d1, -9px -9px 33px #ffffff;
    transform: translateY(-2px);
  }
`;
