import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
const Sidebar = ({ setToggle }) => {
  const [accActive, setAccActive] = useState(false);
  const [prefActive, setPrefActive] = useState(false);
  const path = useRouter().pathname;
  return (
    <>
      {/*  overlay onm small screen */}
      <div onClick={() => setToggle(false)} className="bg-black/50 z-10 fixed md:hidden inset-0 top-[50px] backdrop-blur-sm backdrop-filter">

      </div>

      <div className="shadow-2xl bg-white md:w-max  w-[60%] z-20 h-full px-4 fixed md:relative top-[50px] md:top-0">
        {/* logo */}

        <Image
          src="/logo.svg"
          width="140px"
          className="block mx-auto "
          height="70px"
        />
        <section className="mt-4 w-full text-md ">
          {[
            { link: "/", icon: "/icons/home.svg", label: "Dashboard" },
            {
              link: "/intels",
              icon: "/icons/labels.svg",
              label: "Intels",
              tag: "4 unread",
            },
            {
              link: "/leads",
              icon: "/icons/leads.svg",
              label: "Leads",
              tag: "4 unseen",
            },
          ].map(({ link, icon, label, tag }) => (
            <Link href={link}>
              <a
                className={`flex items-center my-4 w-full ${path === link ? "font-semibold" : ""
                  }`}
              >
                <Image src={icon} width="18px" height="18px" />{" "}
                <span className="ml-3 text-[16px] ">{label}</span>
                {/* tag */}
                {tag && (
                  <span className="bg-primary/90 relative ml-auto right-0 font-medium text-xs px-2 text-white rounded-full ">
                    {tag}
                  </span>
                )}
              </a>
            </Link>
          ))}
          {/* accounts  */}
          <details className="flex w-full">
            <summary
              className="flex cursor-pointer items-center mb-4 w-full "
              onClick={() => setAccActive(!accActive)}
            >
              <Image src="/icons/accounts.svg" width="18px" height="18px" />{" "}
              <span className="ml-4 text-[16px] ">Accounts</span>
              <span className="  ml-auto right-0 px-1 ">
                <Image
                  src={
                    accActive
                      ? "/icons/chevron-up.svg"
                      : "/icons/chevron-down.svg"
                  }
                  width="13px"
                  height="13px"
                />{" "}
              </span>
            </summary>

            <ul className="pl-6 ml-2 pb-2 mb-2 text-sm font-light text-black/90 space-y-3 border-l-[1.5px]">
              <li>
                <a href="/">Manage all</a>
              </li>
              <li className="">
                <a href="/">Track new accounts</a>
              </li>
              <li>
                <a href="/">Bulk import</a>
              </li>
            </ul>
          </details>
          {/* preferences */}
          <details className="flex w-full md:w-max">
            <summary
              className="flex cursor-pointer items-center  w-full "
              onClick={() => setPrefActive(!prefActive)}
            >
              <Image src="/icons/preferences.svg" width="18px" height="18px" />{" "}
              <span className="mx-4 text-[16px] ">Preferences</span>
              <span className="  ml-auto right-0 px-1 ">
                <Image
                  src={
                    prefActive
                      ? "/icons/chevron-up.svg"
                      : "/icons/chevron-down.svg"
                  }
                  width="13px"
                  height="13px"
                />{" "}
              </span>
            </summary>

            <ul className="pl-6 ml-2 mt-2 py-2 text-sm font-light text-black/90 space-y-3 border-l-[1.5px]">
              <li>
                <a href="/">Product focus</a>
              </li>
              <li>
                <a href="/">Intel Preferences</a>
              </li>
              <li>
                <a href="/">Load persona</a>
              </li>
            </ul>
          </details>
          {[
            { link: "/integration", icon: "/icons/integration.svg", label: "Integrations" },
            {
              link: "/support",
              icon: "/icons/team.svg",
              label: "Team",

            },
            {
              link: "/help",
              icon: "/icons/support.svg",
              label: "Help / Support",

            },
          ].map(({ link, icon, label, tag }) => (
            <Link href={link}>
              <a
                className={`flex items-center my-4 w-full ${path === link ? "font-semibold" : ""
                  }`}
              >
                <Image src={icon} width="18px" height="18px" />{" "}
                <span className="ml-3 text-[16px] ">{label}</span>
                {/* tag */}
                {tag && (
                  <span className="bg-primary/90 relative ml-auto right-0 font-medium text-xs px-2 text-white rounded-full ">
                    {tag}
                  </span>
                )}
              </a>
            </Link>
          ))}
        </section>
      </div>
    </>
  );
};

export default Sidebar;
