'use client';

import { useState } from 'react';
import Logo from './logo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Dialog, Popover } from '@headlessui/react';
import Link from 'next/link';

const Links = (
  name: string,
  href: string,
  styleNavbar: string,
  styleMenu: string
) => {
  return {
    name: name,
    href: href,
    styleNavbar: styleNavbar,
    styleMenu: styleMenu,
  };
};

const link1 = Links(
  'Nossos Serviços',
  'dashboard#myservices',
  'text-sm font-semibold leading-6 text-gray-900',
  '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
);
const link2 = Links(
  'Quem Somos',
  'dashboard#about',
  'text-sm font-semibold leading-6 text-gray-900',
  '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
);
const link3 = Links(
  'Entre em Contato',
  'dashboard#contact',
  'text-sm font-semibold leading-6 text-gray-900',
  '-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
);

const NavLinks = () => {
  return (
    <>
      <a href={link1.href} className={link1.styleNavbar}>
        {link1.name}
      </a>
      <a href={link2.href} className={link2.styleNavbar}>
        {link2.name}
      </a>
      <a href={link3.href} className={link3.styleNavbar}>
        {link3.name}
      </a>
    </>
  );
};

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className="mx-auto font-outfit text-navbar_font flex max-w-7xl items-center justify-between p-6 lg:px-8"
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

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="bg-color6 fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-navbar_font"
                aria-hidden="true"
              />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y font-outfit text-navbar_font divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href={link1.href} className={link1.styleMenu}>
                  {link1.name}
                </a>
                <a href={link2.href} className={link2.styleMenu}>
                  {link2.name}
                </a>
                <a href={link3.href} className={link3.styleMenu}>
                  {link3.name}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Nav;
