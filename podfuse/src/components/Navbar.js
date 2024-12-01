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
        <Disclosure as="nav" className="bg-[#121212] shadow-md">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="flex items-center">
                                <img
                                    className="h-10 w-auto"
                                    src="/logo.png"
                                    alt="PodFuse Logo"
                                />
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden sm:flex sm:items-center space-x-6 ml-auto">
                                {navigation.map((item) =>
                                    item.submenu ? (
                                        <Menu as="div" key={item.name} className="relative">
                                            <Menu.Button className="text-[#EDEDED] hover:text-[#1DB954] px-3 py-2 text-sm font-medium">
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
                                                <Menu.Items className="absolute z-10 mt-2 w-40 bg-[#282828] py-2 shadow-lg rounded-md">
                                                    {item.submenu.map((subItem) => (
                                                        <Menu.Item key={subItem.name}>
                                                            {({ active }) => (
                                                                <a
                                                                    href={subItem.href}
                                                                    className={classNames(
                                                                        active
                                                                            ? "text-[#1DB954]"
                                                                            : "text-[#EDEDED]",
                                                                        "block px-4 py-2 text-sm"
                                                                    )}
                                                                >
                                                                    {subItem.name}
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    ))}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    ) : (
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            className="text-[#EDEDED] hover:text-[#1DB954] px-3 py-2 text-sm font-medium"
                                        >
                                            {item.name}
                                        </a>
                                    )
                                )}
                            </div>

                            {/* Mobile Menu Button */}
                            <div className="sm:hidden">
                                <Disclosure.Button className="text-[#EDEDED] hover:text-[#1DB954] p-2 rounded-md focus:outline-none">
                                    {open ? (
                                        <XMarkIcon className="h-6 w-6" />
                                    ) : (
                                        <Bars3Icon className="h-6 w-6" />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-4 pb-3 space-y-1">
                            {navigation.map((item) =>
                                item.submenu ? (
                                    <div key={item.name} className="relative">
                                        <Disclosure.Button className="block w-full text-left text-[#EDEDED] hover:text-[#1DB954] px-3 py-2 text-base font-medium">
                                            {item.name}
                                        </Disclosure.Button>
                                        <div className="mt-1 bg-[#282828] py-2 shadow-lg rounded-md">
                                            {item.submenu.map((subItem) => (
                                                <a
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-4 py-2 text-sm text-[#EDEDED] hover:text-[#1DB954]"
                                                >
                                                    {subItem.name}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="block text-[#EDEDED] hover:text-[#1DB954] px-3 py-2 text-base font-medium"
                                    >
                                        {item.name}
                                    </a>
                                )
                            )}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
