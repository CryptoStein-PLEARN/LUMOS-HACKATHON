import React, { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
function Modal({ isMOpen, handleClose, user }) { 
  const form = useRef();
  const [showModal, setShow] = useState();
  useEffect(() => {
    setShow(isMOpen);
  }, [isMOpen]);
  const handleCut = () => {
    setShow(false);
    setTimeout(() => {
      handleClose();
    }, 300);
  };
  if (!isMOpen) {
    return null;
  }
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bjmhs3a",
        "template_9emachb",
        form.current,
        "UoV0VvRc7Blz8fzTE"
      )
      .then(
        (result) => {
         toast.success('Email send sucessfully!',1500);
          console.log("res", result);
          handleCut();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form className="form" autoComplete="off" ref={form} onSubmit={sendEmail}>
  <Toaster  
          toastOptions={{ 
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
          }}
        />
      <textarea className="hidden" name="to_name">
        {user?.name}
      </textarea>
      <textarea className="hidden" name="reply_to">
        {user?.email}
      </textarea>
      <textarea className="hidden" name="from_name">
        Cryptostien
      </textarea>
      <textarea className="hidden" name="subject">
        {user?.subject}
      </textarea>
      <div
        className={`
         text-black
    bg-neutral-800 fixed  
    inset-0 
    z-50
    flex 
    items-center 
    justify-center 
    overflow-hidden 
    overflow-y-auto
    overflow-x-hidden 
    outline-none
    focus:outline-none
  `}
      >
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
            className={`
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
        bg-slate-800
        relative
        flex
        h-full 
        w-full 
        flex-col 
        rounded-lg 
        border-0 
        shadow-lg 
        outline-none 
        focus:outline-none
        md:h-auto 
        lg:h-auto
      "
            >
              {/*header*/}
              <div
                className=" bg-black
          relative 
          flex 
          items-center
          justify-between
          rounded-t-xl  
          border-b-[1px]
          p-6
          "
              >
                <div className="text-lg font-semibold  text-white">
                  Reply to <span className="capitalize"> {user?.name}</span>
                </div>
                <div className="text-lg font-semibold text-white">
                  Request-ID:{" "}
                  <span className="underline  underline-offset-4 ">
                    {" "}
                    {user?._id.slice(0, 6)}
                  </span>
                </div>
                <button
                  className="
              border-0
              p-1 
              transition
              hover:opacity-70 
            "
                  onClick={handleCut}
                >
                  <IoMdClose fill="red" size={25} />
                </button>
              </div>

              <textarea
                
                name="message"
                className="bg-transparent h-64  w-full cursor-auto resize-none  border-none bg-gray-800    p-4  text-lg font-medium text-gray-400   outline-none focus-visible:text-white focus-visible:outline-none"
                placeholder="Reply"
              ></textarea>
              <div className="bg-black relative flex justify-end p-6">
                <div className="flex">
                  <button class="z-1 group relative flex items-center rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-4 py-2 font-medium text-white transition-all duration-200 ease-in-out hover:bg-gradient-to-br active:scale-95 active:shadow-inner">
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
                    <button
                      type="submit"
                      class="group-hover:text-transparent ml-1 text-white transition-all duration-300"
                    >
                      Reply
                    </button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Modal;
