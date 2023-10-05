import Card from "components/card";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { IoInformation } from "react-icons/io5";
import { MdCallToAction } from "react-icons/md";
import { PiArrowFatLineUpDuotone } from "react-icons/pi";
import { getGetInTouchDetails } from "Store/Slice/userSlice";
import { useDispatch } from "react-redux";
const General = ({ data }) => {
  const location = useLocation();
  const history = useNavigate();
  const [l1, setL1] = useState(true);
  const [l2, setL2] = useState(true);
  const [l3, setL3] = useState(true);
  const [l4, setL4] = useState(true);
  const user = location.pathname?.split("/")[3]?.replace(/-/g, " ");
  const single = location.pathname?.split("/")[3];
  const idArray = single?.split("_");
  const handleClick = (e) => {
    const name = e?.replace(/ /g, "-");
    history(`/admin/User/${name}`);
  };
  const handleClose = () => {
    const val = isOpen;
    setOpen(!val);
  };
  const [modalData, SetModal] = useState();
  const [isOpen, setOpen] = useState(false);
  const userInput = user?.toLowerCase();
  const userData = data?.filter((item) =>
    item.name?.toLowerCase().includes(userInput)
  );
  const dispatch = useDispatch();
  const handleStatus = (_id, status) => {
    const data = {
      _id: _id,
      status: status,
    };
    axios
      .post("https://plearn-backend.onrender.com/changeStatus", data)
      .then((response) => {
        dispatch(getGetInTouchDetails());
        toast.success(`Status has been set ${status}  sucessfully`, {
          duration: 1500,
        });
        console.log(response.data);
      });
  };
  const isSingleReq = idArray?.length > 1;
  const handlePriority = (_id, priority) => {
    const data = {
      _id: _id,
      priority: priority,
    };
    axios
      .post("https://plearn-backend.onrender.com/changePriority", data)
      .then((response) => {
        dispatch(getGetInTouchDetails());
        toast.success(`Priority has been set ${priority}  sucessfully`, {
          duration: 1500,
        });
        console.log(response.data);
      });
  };
  if (isSingleReq) {
    const userInput = idArray[0]?.toLowerCase()?.replace(/-/g, " ");
    const userData = data?.filter((item) =>
      item.name?.toLowerCase().includes(userInput)
    );
    const CurrentReq = userData.filter((user) => user?._id === idArray[1]);
    console.log(CurrentReq, "current req");
    const components = (
      <>
        <Card extra={"w-full h-full py-5 px-5"}>
          <div className="mt-2 w-full ">
            <div className="relative flex items-start justify-between   py-2 px-2 pt-4  ">
              <div className="absolute -top-0 left-0 mt-3 flex w-full items-center justify-between px-2 ">
                <h4 className="text-xl  font-bold capitalize text-navy-700 dark:text-white">
                  User :{" "}
                  <span className="font-bold text-gray-700">
                    {CurrentReq[0]?.name}
                  </span>
                </h4>
                <div className="flex gap-2">
                  <div className="relative">
                    <div
                      onClick={() => {
                        setL1(!l1);
                        setL2(true);
                      }}
                      className="relative flex rounded-full border-2 border-green-400 p-1.5"
                    >
                      <IoInformation className="relative" />
                    </div>

                    <div
                      className={`${
                        l1 ? "hidden  opacity-0 " : "block"
                      } absolute   mt-2  min-w-[15rem] divide-y divide-gray-200 rounded-lg bg-white p-2 shadow-md transition-[opacity,margin] dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800`}
                    >
                      <div className="py-2 first:pt-0 last:pb-0">
                        <span className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          Date :{" "}
                          <span className="text-navy-800 underline underline-offset-2">
                            {CurrentReq[0]?.datePosted.slice(0, 10)}
                          </span>{" "}
                        </span>{" "}
                        <span className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          Request id : {CurrentReq[0]?._id.slice(0, 5)}
                        </span>
                        <span className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          Request topic : {CurrentReq[0]?.topic}
                        </span>
                        <span className="flex cursor-pointer items-center gap-x-3.5 whitespace-nowrap rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          Email : {CurrentReq[0]?.email}
                        </span>
                        <span className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300">
                          Phone : {CurrentReq[0]?.countryCode}{" "}
                          {CurrentReq[0]?.phoneNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div
                      onClick={() => {
                        setL2(!l2);
                        setL1(true);
                      }}
                      className="relative flex justify-center   rounded-full border-2 border-yellow-400 p-1.5"
                    >
                      <MdCallToAction />
                    </div>
                    <div
                      className={`${
                        l2 ? "hidden  opacity-0 " : "block"
                      } absolute   mt-2  min-w-[12rem] divide-y divide-gray-200 rounded-lg bg-white p-2 shadow-md transition-[opacity,margin] dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800`}
                    >
                      <div className="py-2 first:pt-0 last:pb-0">
                        <span
                          onClick={() => {
                            setL3(!l3);
                            setL4(true);
                          }}
                          className="group flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Priority : {CurrentReq[0]?.priority}
                          <PiArrowFatLineUpDuotone className="transition-transform delay-75 group-hover:rotate-90" />
                        </span>{" "}
                        <div
                          className={`${
                            l3 ? "hidden  opacity-0 " : "block"
                          } absolute top-8 left-20  mt-2  min-w-[12rem] divide-y divide-gray-200 rounded-lg bg-white p-2 shadow-md transition-[opacity,margin] dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800`}
                        >
                          <div className="py-2 first:pt-0 last:pb-0">
                            <span
                              onClick={() => {
                                handlePriority(CurrentReq[0]?._id, "High");
                                setL3(true);
                                setL2(true);
                                toast(
                                  `Setting Priority as High! \n  please wait....`,
                                  { duration: 1000 }
                                );
                              }}
                              className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              High
                            </span>{" "}
                            <span
                              onClick={() => {
                                handlePriority(CurrentReq[0]?._id, "Medium");
                                setL3(true);
                                setL2(true);
                                toast(
                                  `Setting Priority as Medium! \n  please wait....`,
                                  { duration: 1000 }
                                );
                              }}
                              className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              Medium
                            </span>
                            <span
                              onClick={() => {
                                handlePriority(CurrentReq[0]?._id, "Low");
                                setL3(true);
                                setL2(true);
                                toast(
                                  `Setting Priority as Low! \n  please wait....`,
                                  { duration: 1000 }
                                );
                              }}
                              className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              Low
                            </span>
                          </div>
                        </div>
                        <span
                          onClick={() => {
                            setL4(!l4);
                            setL3(true);
                          }}
                          className="group flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                        >
                          Status : {CurrentReq[0]?.status}
                          <PiArrowFatLineUpDuotone className="transition-transform delay-75 group-hover:rotate-90" />
                        </span>{" "}
                        <div
                          className={`${
                            l4 ? "hidden  opacity-0 " : "block"
                          } absolute left-20 mt-2  min-w-[12rem] divide-y divide-gray-200 rounded-lg bg-white p-2 shadow-md transition-[opacity,margin] dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800`}
                        >
                          <div className="py-2 first:pt-0 last:pb-0">
                            <span
                              onClick={() => {
                                handleStatus(
                                  CurrentReq[0]?._id,
                                  "In progress  "
                                );
                                setL4(true);
                                setL2(true);
                                toast(
                                  `Setting Status as In progress ! \n  please wait....`,
                                  { duration: 1000 }
                                );
                              }}
                              className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              In progress
                            </span>{" "}
                            <span
                              onClick={() => {
                                handleStatus(CurrentReq[0]?._id, "Ignore");
                                setL4(true);
                                setL2(true);
                                toast(
                                  `Setting Status as Ignore ! \n  please wait....`,
                                  { duration: 1000 }
                                );
                              }}
                              className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              Ignore
                            </span>{" "}
                            <span
                              onClick={() => {
                                handleStatus(CurrentReq[0]?._id, "Done");
                                setL4(true);
                                setL2(true);
                                toast(
                                  `Setting Status as Done ! \n  please wait....`,
                                  { duration: 1000 }
                                );
                              }}
                              className="flex cursor-pointer items-center gap-x-3.5 rounded-md py-2 px-3 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                            >
                              Done
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*   id */}
              </div>
            </div>
            <div className="   mb-4 flex-col  items-start justify-center   rounded-2xl  bg-white py-4  dark:!bg-navy-700  ">
              <div className="flex flex-col rounded-md    p-2">
                <div className="flex w-full items-center justify-between">
                  <p className="mt-3 text-base font-medium text-gray-700 dark:text-white">
                    <span className="font-bold text-navy-700"> Subject</span> :{" "}
                    {CurrentReq[0]?.subject}
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start  justify-center rounded-2xl border-2  border-teal-400 bg-white bg-clip-border px-3 py-4 shadow-md  shadow-teal-200   dark:!bg-navy-700 ">
              <h3 className=" w-full border-b-2 px-2 pt-4 pb-2 text-2xl">
                Message
              </h3>
              <p className="  px-2 pt-2 pb-8 text-base text-gray-700">
                {CurrentReq[0]?.description}
              </p>
            </div>
          </div>
          <div className="mt-3 flex justify-end gap-4">
            <button
              onClick={() => {
                if (!isOpen) {
                  SetModal(CurrentReq[0]);
                  setOpen(true);
                } else {
                  setOpen(false);
                }
              }}
              className="z-1 group relative flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-gradient-to-br active:scale-95 active:shadow-inner"
            >
              <div className="absolute -inset-0.5 -z-10 animate-pulse rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-xl group-hover:inset-10 group-hover:opacity-100"></div>
              <div className="svg-wrapper duration-400 transform transition-all group-hover:translate-x-5 group-hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className=""
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
              <span className="group-hover:text-transparent ml-1 text-white transition-all duration-300">
                Reply
              </span>
            </button>
            <button className="group relative flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded bg-red-600 px-4 py-2 text-white shadow shadow-red-300 focus:outline-none active:shadow-green-200">
              <span className="transition-transform duration-200 group-hover:-translate-x-40">
                Delete
              </span>
              <div className="h-4 w-0.5 bg-red-800 transition-transform duration-200 group-hover:-translate-x-40"></div>
              <div className="svg-wrapper transition-transform duration-200 group-hover:-translate-x-11">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  stroke-width="4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>

              <div className="svg-wrapper absolute hidden   h-full w-full items-center justify-center group-active:flex group-active:bg-green-600">
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  stroke-width="4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.5 12.75l6 6 9-13.5"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </Card>
      </>
    );

    return (
      <div>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
        <BtnBack>
          <button
            onClick={() => history(`/admin/User/${idArray[0]}`)}
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
        <div className="grid grid-cols-2 gap-6">{components} </div>
        {isOpen && (
          <Modal handleClose={handleClose} user={modalData} isOpen={isOpen} />
        )}
      </div>
    );
  }
  if (user) {
    const components = userData?.map((item) => (
      <Card
        key={item._id}
        extra={"w-full cursor-pointer  group h-full py-5 px-5"}
        onClick={() => {
          const name = item?.name?.replace(/ /g, "-");
          history(`/admin/User/${name}_${item?._id}`);
        }}
      >
        <div class=" bg-slate-700 absolute inset-0 z-20 flex h-full w-full items-center justify-center rounded-[20px] bg-none text-2xl font-semibold text-white opacity-0 duration-300 group-hover:opacity-100">
          Reply to <span className="mx-2 capitalize">{item?.name}</span>
        </div>
        <div class="absolute inset-0 z-10 flex h-full w-full items-center justify-center rounded-[20px] opacity-0 duration-300 group-hover:opacity-100"></div>
        <div className="mt-2 w-full ">
          <div className="relative flex items-start justify-between   py-2 px-2 pt-4  ">
            <div className="absolute -top-0 left-0 mt-3 flex w-full items-center justify-between px-2 ">
              <h4 className="text-xl font-bold capitalize text-navy-700 dark:text-white">
                User :{" "}
                <span className="font-bold text-gray-700">{item?.name}</span>
              </h4>
              <p className="text-sm text-gray-700">
                Date :
                <span className="text-navy-800 underline underline-offset-2">
                  {" "}
                  {item?.datePosted.slice(0, 10)}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="mb-4 flex-col  items-start justify-center   rounded-2xl  bg-white py-4  dark:!bg-navy-700  ">
            <div className="flex flex-col rounded-md    p-2">
              <div className="flex">
                <div className="flex w-full items-center justify-between">
                  <p className="mt-3 text-base font-medium text-gray-700 dark:text-white">
                    <span className="font-bold text-navy-700"> Subject</span> :{" "}
                    {item?.subject}
                  </p>
                </div>
                <div className="flex w-full items-center justify-between">
                  <p className="mt-3 text-base font-medium text-gray-700 dark:text-white">
                    <span className="font-bold text-navy-700">Topic</span> :{" "}
                    {item.topic}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    ));
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
        <div className="grid grid-cols-2 gap-6">{components} </div>
      </div>
    );
  } else {
    if (data !== undefined) {
      const uniqueNamesMap = new Map();
      const filteredData = data?.filter((item) => {
        const name = item.name?.toLowerCase();
        if (!uniqueNamesMap.has(name)) {
          uniqueNamesMap.set(name, true);
          return true;
        }
        return false;
      });

      const components = filteredData?.map((item) => (
        <Card
          key={item.id}
          onClick={() => {
            handleClick(item.name);
          }}
          extra={
            "shadow mt-6  hover:-translate-y-2 transition-all delay-150 hover:cursor-pointer  w-full h-full p-3"
          }
        >
          {console.log("name", item.name)}
          <div className=" mt-2 w-full ">
            <h4 className="px-2 text-xl font-bold  text-navy-700   dark:text-white">
              User - {item.name}
            </h4>
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
