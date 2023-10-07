import React, { useEffect, useState } from "react";
import useEventModal from "../useEventModal";

function DeleteComp({
  subtitle,
  isDisabled,
  title,
  actionLabel,
  handleSubmit,
}) {
  const { isOpen, toggle } = useEventModal();
  const [showModal, setShow] = useState();
  useEffect(() => {
    setShow(isOpen);
  }, [isOpen]);
  const handleClose = () => {
    setShow(false);
    setTimeout(() => {
      toggle();
    }, 300);
  };
  if (!isOpen) {
    return null;
  }
  return (
    <div className=" fixed left-0 top-0 z-40 flex h-full min-h-screen min-w-full items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        className="
            relative 
            my-6
            mx-auto
            h-full
            w-full
            md:h-auto
            md:w-4/6 
            lg:h-auto 
            lg:w-3/6
            xl:w-2/5
            "
      >
        <div
          className={` text-black 
              translate
              h-full 
              duration-300
              ${showModal ? "translate-y-0" : "translate-y-full"}
              ${showModal ? "opacity-100" : "opacity-0"}
            `}
        >
          <div
            className="
                translate
                relative
                flex
                h-full
                w-full 
                flex-col 
                rounded-lg 
                border-0 
                bg-gray-800/60
                shadow-lg 
                outline-none 
                backdrop-blur-lg backdrop-saturate-[180%]
                focus:outline-none 
                md:h-auto 
                lg:h-auto
              "
          >
            <div
              className="
                  relative 
                  flex 
                  items-center
                  justify-center
                  rounded-t
                  border-b-[1px]
                  p-5
                  "
            >
              <div className="flex flex-col">
                <div className="leading-20 text-semibold text-emphasis pb-1 text-xl text-white">
                  {title}
                </div>
                <span className="text-md text-gray-200/75">{subtitle}</span>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-t-[1px] p-6">
              <div
                className="
                      flex 
                      w-full 
                      flex-row 
                      items-center justify-center
                      gap-4
                    "
              >
                <button
                  isDisabled={isDisabled}
                  onClick={handleSubmit}
                  className={`group relative inline-flex cursor-pointer items-center justify-center overflow-hidden  rounded-md px-5 py-2 font-bold text-white shadow-2xl`}
                >
                  {!isDisabled && (
                    <>
                      <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 opacity-0 transition duration-300 ease-out group-hover:opacity-100"></span>
                      <span className="to-transparent absolute top-0 left-0 h-1/3 w-full bg-gradient-to-b from-white opacity-5"></span>
                      <span className="to-transparent absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-white opacity-5"></span>
                      <span className="to-transparent absolute bottom-0 left-0 h-full w-4 bg-gradient-to-r from-white opacity-5"></span>
                      <span className="to-transparent absolute bottom-0 right-0 h-full w-4 bg-gradient-to-l from-white opacity-5"></span>
                      <span className="absolute inset-0 h-full w-full rounded-md border border-white opacity-10"></span>
                    </>
                  )}
                  <span className="absolute h-0 w-0 rounded-full bg-white opacity-5 transition-all duration-300 ease-out group-hover:h-56 group-hover:w-56"></span>
                  <span className="relative"> {actionLabel}</span>
                </button>
                <div
                  onClick={() => {
                    handleClose();
                  }}
                  className={` group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-md  bg-red-500 px-5 py-2 font-bold text-white shadow-2xl`}
                >
                  <span className="relative"> Cancel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteComp;
