import Card from "components/card";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
const General = ({ data }) => {
  const location = useLocation();
  const history = useNavigate();
  const user = location.pathname.split("/")[3];
  const handleClick = (e) => {
    history(`/admin/User/${e}`);
  };
  const [subject, setSelectedOption] = useState("Subject line");
  const [Priority, setPriority] = useState("");

  const handleClose = () => {
    const val = isOpen;
    setOpen(!val);
  };
  const [modalData, SetModal] = useState();
  const [isOpen, setOpen] = useState(false);
  const handleReslove = (_id, e) => {
    // const data = {
    //   _id: _id,
    // }
    // if (!e) {
    //   axios.post("https://plearn-backend.onrender.com/markAsResolved", data)
    //   .then((response) => {
    //     console.log(response )
    //   })
    // }
  };
  if (user) {
    const userInput = user.toLowerCase();
    const userData = data?.filter((item) =>
      item.name.toLowerCase().includes(userInput)
    );
    const components = userData?.map(
      (item) => (
        // !item?.resolved && (
        <Card key={item._id} extra={"w-full h-full pt-20 pb-5 px-5"}>
          <div className="mt-2 w-full ">
            <div className="relative flex items-start justify-between px-3 py-2 pt-4  ">
              <div className="flex w-full items-center justify-between">
                <p className="mt-3 text-base font-medium text-navy-700 dark:text-white">
                  Request-ID: {item._id.slice(0, 6)}
                </p>{" "}
                <p className="text-sm text-gray-700">
                  Date :{" "}
                  <span className="text-navy-800 underline underline-offset-2">
                    {" "}
                    {item.datePosted.slice(0, 10)}
                  </span>{" "}
                </p>
              </div>
              <div className="absolute right-0 -top-6 flex items-center justify-center gap-3 px-3  ">
                <span className=" whitespace-nowrap text-sm font-bold text-red-400">
                  Priority
                </span>{" "}
                <select
                  onChange={(event) => setPriority(event.target.value)}
                  class="  w-30 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option disabled hidden selected>
                    Low
                  </option>
                  <option className="cursor-pointer">Low</option>
                  <option className="cursor-pointer">Mediun</option>
                  <option className="cursor-pointer">High</option>
                </select>
              </div>{" "}
              <div className="absolute left-0 -top-6 flex items-center justify-center gap-3 px-3  ">
                <span className=" whitespace-nowrap text-sm font-medium ">
                  Request status{" "}
                </span>{" "}
                <select
                  onChange={(event) => setSelectedOption(event.target.value)}
                  class="  w-30 rounded-lg border border-gray-300 bg-gray-50 px-2 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option disabled hidden selected>
                    New
                  </option>
                  <option className="cursor-pointer">Urgent</option>
                  <option className="cursor-pointer">Pending</option>
                  <option className="cursor-pointer">Ignore</option>
                  <option className="cursor-pointer">Done</option>
                </select>
              </div>
              <div className="absolute -top-20 left-0 mt-3 flex items-center gap-3 px-3  ">
                <h4 className="text-xl font-bold capitalize text-navy-700 dark:text-white">
                  User : {item.name}
                </h4>
              </div>
            </div>
            <div className=" flex-col items-start justify-center  rounded-2xl bg-white bg-clip-border  py-4   dark:!bg-navy-700  ">
              <div className="mb-2 flex flex-col rounded-md border-2 border-blue-300 p-2">
                <p className="text-sm  text-navy-700 ">Subject line</p>
                <p className="text-base   text-gray-600 dark:text-white">
                  {item.subject}
                </p>{" "}
              </div>
              <div className="flex flex-col rounded-md border-2 border-blue-300 p-2">
                <p className="text-sm text-navy-700 "> Request heading</p>
                <p className=" text-base text-gray-600 dark:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Accusantium repellat excepturi
                </p>{" "}
              </div>
            </div>
            <div className="mb-4 flex flex-col items-start  justify-center rounded-2xl border-t-2 border-teal-200 bg-white px-3 py-4 shadow-md  shadow-teal-200   dark:!bg-navy-700 ">
              <h3 className=" w-full border-b-2 px-2 pt-4 pb-2 text-2xl">
                Message
              </h3>
              <p className="  px-2 pt-2 pb-8 text-base text-gray-700">
                {item.description}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam
                sapiente ipsum quisquam dicta. Quas atque nisi eum explicabo
                quia dolores, maiores vero ipsa reprehenderit, quae rerum quam
                sed eos esse. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Totam sapiente ipsum quisquam dicta. Quas
                atque nisi eum explicabo quia dolores, maiores vero ipsa
                reprehenderit, quae rerum quam sed eos esse.
              </p>
            </div>
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
          <div className="mt-3 flex justify-end gap-4">
            <button
              onClick={() => {
                if (!isOpen) {
                  SetModal(item);
                  setOpen(true);
                } else {
                  setOpen(false);
                }
              }}
              class="z-1 group relative flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-gradient-to-br active:scale-95 active:shadow-inner"
            >
              <div class="absolute -inset-0.5 -z-10 animate-pulse rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-xl group-hover:inset-10 group-hover:opacity-100"></div>
              <div class="svg-wrapper duration-400 transform transition-all group-hover:translate-x-5 group-hover:rotate-45">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  class=""
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="#fff"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
              <span class="group-hover:text-transparent ml-1 text-white transition-all duration-300">
                Reply
              </span>
            </button>
            <button class="group relative flex cursor-pointer items-center justify-center gap-4 overflow-hidden rounded bg-red-600 px-4 py-2 text-white shadow shadow-red-300 focus:outline-none active:shadow-green-200">
              <span class="transition-transform duration-200 group-hover:-translate-x-40">
                Delete
              </span>

              <div class="h-4 w-0.5 bg-red-800 transition-transform duration-200 group-hover:-translate-x-40"></div>

              <div class="svg-wrapper transition-transform duration-200 group-hover:-translate-x-11">
                <svg
                  class="h-6 w-6"
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

              <div class="svg-wrapper absolute hidden   h-full w-full items-center justify-center group-active:flex group-active:bg-green-600">
                <svg
                  class="h-6 w-6"
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
      )
      // )
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
        {isOpen && (
          <Modal handleClose={handleClose} user={modalData} isOpen={isOpen} />
        )}
      </div>
    );
  } else {
    if (data) {
      const uniqueNamesMap = new Map();

      // Filter and remove duplicates based on the 'name' property
      const filteredData = data?.filter((item) => {
        const name = item.name.toLowerCase(); // Normalize to lowercase for case-insensitive comparison
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
          <div className=" mt-2 w-full ">
            <h4 className="px-2 text-xl font-bold  text-navy-700   dark:text-white">
              User - {item.name}
            </h4>
            <div className="mt-4 flex flex-col items-start justify-center rounded-2xl border-t-2   border-teal-200 bg-white   bg-clip-border px-3 py-4 shadow-md   shadow-shadow-500  dark:!bg-navy-700 dark:shadow-none">
              <p className="text-sm text-gray-600">Request heading</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti impedit optio in
              </p>
            </div>
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
