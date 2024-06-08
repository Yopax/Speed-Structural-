"use client";
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navigation = [
  { name: 'Descargar Manual', href: 'https://drive.google.com/uc?export=download&id=1Lpx0-9vAiSqdxUTL9IQ_FheY1htgngo6', current: true },
  { name: 'Home Page', href: '/', current: false },
  { name: 'Sobre mi', href: '/autor', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
  return (
    <Disclosure as="nav" className="dark:bg-slate-800">
      {({ open }) => (
        <>
          <div className="fixed top-0 left-0 w-full bg-white z-50 ">
            <div className="mx-auto w-[90%] max-sm:w-[95%]">
              <div className="flex h-[70px] items-center">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link href="/">
                      <div className="flex">
                        <h5 className="text-lg max-sm:text-xl font-bold mr-1 text-sky-700 hover:text-emerald-600">
                          Speed
                        </h5>
                        <h5 className="text-lg max-sm:text-xl font-bold text-emerald-600 hover:text-sky-700">
                          Structural
                        </h5>
                      </div>
                    </Link>
                  </motion.button>
                  <div className="hidden sm:block flex-1">
                    <div className="flex justify-center space-x-8 items-center w-full">
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href="/normas"
                        target='_blank'>
                          <p className="text-slate-700 hover:text-emerald-700 text-sm font-semibold">Normas</p>
                        </Link>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href="/analisis"
                        target='_blank'>
                          <p className="text-slate-700 hover:text-emerald-700 text-sm font-semibold">App</p>
                        </Link>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link href="/autor"
                        target='_blank'>
                          <p className="text-slate-700 hover:text-emerald-700 text-sm font-semibold">Autor</p>
                        </Link>
                      </motion.button>
                    </div>
                  </div>
                </div>
                <div className="max-sm:hidden">
                  <Link href="https://drive.google.com/uc?export=download&id=1Lpx0-9vAiSqdxUTL9IQ_FheY1htgngo6">
                    <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.9 }}>
                      <p className="bg-emerald-600 hover:bg-blue-600 text-white text-sm leading-6 font-medium py-1 px-3 rounded-lg">
                        Descargar manual
                      </p>
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-600 text-white text-xs mt-20"
                      : "text-gray-300 hover:text-white",
                    "block rounded-md px-3 py-2 text-xs font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
