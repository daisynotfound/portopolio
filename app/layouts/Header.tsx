"use client"

import {
  IconMenu2,
} from "@tabler/icons-react";
import Image from 'next/image'
import NavLinks from "./components/NavLinks";
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react";


export default function Header() {
  return (
    <header className="z-40 w-full h-20 md:h-24 flex flex-row gap-20 items-center justify-center fixed md:px-20 glassy-header">
      <div className="container flex flex-row gap-20 items-center justify-between px-5 md:px-0 ">
        <div className="transition duration-300  md:px-5 md:py-1  flex flex-row gap-2 items-center justify-center">
          <h1 className="hidden md:block link-underline text-2xl font-bold font-VT323 text-black">
            Personal Website
          </h1>
        </div>

        <div className="hidden lg:block px-10 py-3 ">
          <ul className="flex flex-row items-center gap-10 font-semibold">
            <NavLinks href="/" exact className="normal-header link-underline hover:line-height-normal">
              Home
            </NavLinks>
            <NavLinks href="/skills" exact className="normal-header link-underline hover:line-height-normal">
              Skills
            </NavLinks>
            <NavLinks href="/portfolio" exact className="normal-header link-underline hover:line-height-normal">
              Portfolio
            </NavLinks>
          </ul>
        </div>

        <div className="lg:hidden block">
          <Dropdown>
            <DropdownTrigger>
              <div className="w-12 h-12 glassy-header rounded-full flex items-center justify-center">
                <IconMenu2 size={25} />
              </div>
            </DropdownTrigger>
            <DropdownMenu aria-label="Link Actions">
              <DropdownItem key="home" href="/">Home</DropdownItem>
              <DropdownItem key="skills" href="/skills">Skills</DropdownItem>
              <DropdownItem key="portfolio" href="/portfolio">Portfolio</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </header >
  )
}
