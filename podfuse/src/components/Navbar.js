import React from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Introduction", href: "/" },
    { name: "Research", href: "/research" },
    { name: "Personas", href: "/personas" },
    {
        name: "Scenarios",
        submenu: [
            { name: "Scenario 1", href: "/scenario1" },
            { name: "Scenario 2", href: "/scenario2" },
        ],
    },
    { name: "Storyboard", href: "/storyboard" },
    { name: "Moodboard", href: "/moodboard" },
    { name: "Flowchart", href: "/flowchart" },
    { name: "Wireframes", href: "/wireframes" },
    { name: "Prototype", href: "/prototype" },
    { name: "References", href: "/references" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {/* Mobile menu button */}
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Logo and Desktop Menu */}
                            <div className="flex flex-1 items-center relative justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-12 w-auto"
                                        src="/logo.png"
                                        alt="PodFuse Logo"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:flex sm:space-x-4">
                                    {navigation.map((item) =>
                                        item.submenu ? (
                                            <Menu as="div" key={item.name} className="relative">
                                                <Menu.Button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                    {item.name}
                                                </Menu.Button>
                                                <Transition
                                                    as={React.Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute z-50 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/scenario1"
                                                                    className={classNames(
                                                                        active ? "bg-gray-100" : "",
                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                    )}
                                                                >
                                                                    Scenario 1
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="/scenario2"
                                                                    className={classNames(
                                                                        active ? "bg-gray-100" : "",
                                                                        "block px-4 py-2 text-sm text-gray-700"
                                                                    )}
                                                                >
                                                                    Scenario 2
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        ) : (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current
                                                        ? "bg-gray-900 text-white"
                                                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                                    "rounded-md px-3 py-2 text-sm font-medium"
                                                )}
                                                aria-current={item.current ? "page" : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) =>
                                item.submenu ? (
                                    <div key={item.name} className="relative">
                                        <Menu>
                                            <Menu.Button className="block text-left w-full text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium">
                                                {item.name}
                                            </Menu.Button>
                                            <Menu.Items className="absolute z-50 mt-1 w-full bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/scenario1"
                                                            className={classNames(
                                                                active ? "bg-gray-100" : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Scenario 1
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href="/scenario2"
                                                            className={classNames(
                                                                active ? "bg-gray-100" : "",
                                                                "block px-4 py-2 text-sm text-gray-700"
                                                            )}
                                                        >
                                                            Scenario 2
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Menu>
                                    </div>
                                ) : (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current
                                                ? "bg-gray-900 text-white"
                                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                                            "block rounded-md px-3 py-2 text-base font-medium"
                                        )}
                                        aria-current={item.current ? "page" : undefined}
                                    />
                                )
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
