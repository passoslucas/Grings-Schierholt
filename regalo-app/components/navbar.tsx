'use client'

import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose } from 'react-icons/md'
import Logo from './logo'
import { Bars3Icon } from '@heroicons/react/16/solid'
import { Dialog, Popover } from '@headlessui/react'

const NavLinks = () => {
  return (
    <>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Nossos Serviços
      </a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Quem somos
      </a>
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        Entre em Contato
      </a>
    </>

    // <div className="contents">
    //   <button className="p-4 hover:text-color4">Nossos Serviços</button>
    //   <button className="p-4 hover:text-color4">Quem somos</button>
    //   <button className="bg-color1 p-4 font-medium hover:text-color6">
    //     Entre em Contato
    //   </button>
    // </div>
  )
}

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav
      className="font-outfit mx-auto text-navbar_font flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <Logo />

      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <Popover.Group className="hidden lg:flex lg:gap-x-12">
        <NavLinks />
      </Popover.Group>
    </nav>
  )

  //   const [isOpen, setIsOpen] = useState(false);

  //   const toggleNavbar = () => {
  //     setIsOpen(!isOpen);
  //   };

  //   return (
  //     <>
  //       <nav className="mx-auto flex max-w-7xl max-h-24 items-center font-light font-outfit justify-between px-6 lg:px-8">
  //         <div className="hidden w-full justify-between md:flex">
  //           <NavLinks />
  //         </div>
  //         <div className="md:hidden">
  //           <button onClick={toggleNavbar}>
  //             {isOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
  //           </button>
  //         </div>
  //       </nav>
  //       {isOpen && (
  //         <div className="flex flex-col items-center basis-full">
  //           <NavLinks />
  //         </div>
  //       )}
  //     </>
  //   );
}

export default Nav
