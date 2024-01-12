import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from '@heroicons/react/20/solid';
import { Link as RouteLink, useNavigate, useLocation } from "react-router-dom";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import './Style.css'
import logo from "../src/logo.svg";
import coalogofff from "../src/coalogofff.svg";
import coalogo from "../src/coalogo.svg";
import coa from "../src/coa.svg";

const services = [
  { name: "Bursary and Scholarship", href: "/bursariesandschorlaships", icon: SquaresPlusIcon },
  { name: "School Registration", href: "/schoolregist", icon: ArrowPathIcon },
  { name: "Learners Registration", href: "/learnersregistration", icon: ArrowPathIcon },
  // { name: "Grievances", href: "/Grievances", icon: ArrowPathIcon },
  // { name: "GUsers", href: "/Gusers", icon: ArrowPathIcon },
  // { name: "Grievances Reports", href: "/grievancesreports", icon: ArrowPathIcon },
  // { name: "Digital Learning", href: "/digitallearning", icon: ArrowPathIcon },
  // { name: "GrievancesForm", href: "/GrievancesForm", icon: ArrowPathIcon },

  { name: "EduAfya", href: "/eduefya", icon: ChartPieIcon },
  { name: "Students Attendance", href: "/attendancelogin", icon: CursorArrowRaysIcon },
  { name: "ElimuTrees", href: "/elimutrees", icon: FingerPrintIcon },
  // { name: "School Registration Form", href: "/schoolregform", icon: FingerPrintIcon },
];
const stakeholders = [
  { name: "KNEC", href: "#", icon: ChartPieIcon },
  { name: "TSC", href: "#", icon: CursorArrowRaysIcon },
  { name: "KICD", href: "#", icon: FingerPrintIcon },
  { name: "KEMI", href: "#", icon: SquaresPlusIcon },
  { name: "CEMASTEA", href: "#", icon: ArrowPathIcon },
  { name: "ICTA", href: "#", icon: ArrowPathIcon },
  { name: "NACONEK", href: "#", icon: ArrowPathIcon },
  { name: "KISE", href: "#", icon: ArrowPathIcon },
];



const faqs = [
  { name: "FAQs", href: "institutions/faqs", icon: ChartPieIcon },
  { name: "Contacts", href: "institutions/contacts", icon: CursorArrowRaysIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FeatNavbar() {
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };


  const statistics = [
    { name: "ECDE", to: "/institutions/ecde", icon: ChartPieIcon },
    { name: "Primary School", to: "/institutions/primaryschool", icon: CursorArrowRaysIcon },
    { name: "Junior School", to: "/institutions/juniourschool", icon: FingerPrintIcon },
    { name: "Secondary School", to: "/institutions/secondaryschool", icon: SquaresPlusIcon },
    { name: "Teachers Training College", to: "/institutions/ttc", icon: ArrowPathIcon },
    { name: "TVET", to: "/institutions/tvet", icon: ArrowPathIcon },
    { name: "Universities", to: "/institutions/universities", icon: ArrowPathIcon },
  ];


  return (
    <>
      <header className="bgKemis" >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-8"
          aria-label="Global"

        >
          <div className="flex items-center">
            <a href="/" className="-m-2 p-2 -my-2.5 ml-4 ">
              <span className="sr-only">KEMIS</span>
              <img src={coalogofff} className="App-logo" width={250} alt="logo" />
            </a>
          </div>

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
          <Popover.Group className="hidden ml-8 lg:flex lg:gap-x-12">
            <RouteLink to="/" onClick={() => setToggleMenu(false)} className="text-sm font-semibold leading-6 text-white">
              HOME
            </RouteLink>

            <RouteLink to="/about" onClick={() => setToggleMenu(false)}
              className="text-sm font-semibold leading-6 text-white"
            >
              ABOUT
            </RouteLink>


            {/* <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                STATISTICS
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-900"
                  aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-10 w-screen max-w-md overflow-hidden bg-white shadow-lg">
                  <div className="p-4">
                    {statistics.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <RouteLink to={item.to} className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </RouteLink>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {faqs.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
                </Popover.Panel>
              </Transition>
            </Popover> */}
             <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                STATISTICS
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-900"
                  aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-10 w-screen max-w-md overflow-hidden bg-white shadow-lg">
                  <div className="p-4">
                    {statistics.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <RouteLink to={item.to} className="font-semibold text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </RouteLink>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {faqs.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                SERVICES
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-900"
                  aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-10 w-screen max-w-md overflow-hidden bg-white shadow-lg">
                  <div className="p-4">
                    {services.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center bg-gray-50 group-hover:bg-white">
                          <item.icon
                            className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                            aria-hidden="true" />
                        </div>
                        <div className="flex-auto">
                          <a
                            href={item.href}
                            className="font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50"></div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>

          <div className="hidden items-end lg:flex lg:flex-2 lg:justify-end">
            <a
              href="/NewLogin"
              className="inline-flex justify-end rounded-3xl text-sm font-semibold py-2.5 px-4 mr-8 bg-slate-900 text-white hover:bg-slate-700 my-2.5"
            >
              LOGIN <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-1" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">KEMIS</span>
                <img
                  src={coalogo}
                  className="App-coalogo"
                  width={200}
                  alt="coalogo" />
              </a>

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Programs
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true" />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2"></Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <a
                    href="/about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    About
                  </a>
                  <a
                    href="/institutions"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Institutions
                  </a>
                  <a
                    href="/announcements"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Announcements
                  </a>
                  <a
                    href="/Stakeholders"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Stakeholders
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="/NewLogin"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>

      </header>
    </>

  );
}
