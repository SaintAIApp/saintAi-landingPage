import * as Dialog from "@radix-ui/react-dialog";
import {  XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

import { FaMessage } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";
import { GoHome, GoProjectRoadmap } from "react-icons/go";


export default ({ triggerButton }: { triggerButton: React.ReactNode }) => {

  return (
    <Dialog.Root>
      <Dialog.Trigger>{triggerButton}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed  inset-0  bg-[#0008] animate-overlayShow" />
        <Dialog.Content className=" z-[100] text-white border-[2px] border-slate-800   bg-[#1b1b22] fixed top-0 left-0 transform w-full h-full  shadow-custom2 p-6 animate-contentShow">
          <Dialog.Title className="flex text-white text-2xl justify-between py-3">
            Menu
            <Dialog.Close>
              <XMarkIcon className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Title>

          <>
            <ul className="flex flex-col space-y-3 ">
              <li
                className={`flex w-full items-center space-x-3  bg-[#28282f]  p-2 rounded-lg`}
              >
                <Dialog.Close>
                  <a href="/#" className="flex items-center space-x-3">
                    <GoHome /> <span>Home</span>
                  </a>
                </Dialog.Close>
              </li>
              <li
                className={`flex w-full items-center space-x-3  bg-[#28282f]  p-2 rounded-lg`}
              >
                <Dialog.Close asChild>
                  <a href="/#network" className="flex items-center space-x-3">
                    <IoGlobeOutline /> <span>Network</span>
                  </a>
                </Dialog.Close>
              </li>
              <li
                className={`flex w-full items-center space-x-3  bg-[#28282f]  p-2 rounded-lg`}
              >
                <Dialog.Close asChild>
                  <a
                    className="flex items-center space-x-3"
                    href={"/#roadmaps"}
                  >
                    <GoProjectRoadmap /> <span>Roadmap</span>
                  </a>
                </Dialog.Close>
              </li>
              <li
                className={`flex w-full items-center space-x-3
               bg-[#28282f]  p-2 rounded-lg`}
              >
                <Dialog.Close asChild>
                  <a
                    className="flex items-center space-x-3"
                    href={"/#contactus"}
                  >
                    <FaMessage /> <span>Contact Us</span>
                  </a>
                </Dialog.Close>
              </li>
          
             
            </ul>
          </>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
