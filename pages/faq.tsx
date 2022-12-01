import { Dialog } from '@headlessui/react'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import Navbar from './navbar'

const navigation = [
    { name: 'Plugins', href: '/plugins' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Telegram', href: 'https://t.me/WhiXard' }
]

export default function Plugins() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="isolate bg-white">
            <Navbar></Navbar>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                                    <span className="text-gray-600">
                                        Source Code is being added to GitHub.{' '}
                                        <a href="https://github.com/Bildcraft1" className="font-semibold text-indigo-600">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            Check here <span aria-hidden="true">&rarr;</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    FAQ
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Some times developer don&apos;t compile their plugins, or some of them just sells the pre-compiled binary but gives the full source code. <br></br>
                                    You can find even my plugins here (Some usefuls, Some not)
                                </p>
                                <div className="w-full px-2 pt-8">
                                    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                        <span>Why?</span>
                                                        <ChevronUpIcon
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-5 text-purple-500`}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        I was pissed about the thing that some developers sells plugins for just having a pre-compiled JAR, but not doing like Citizens does, or some people not understaning licenses for their plugins.
                                                        <br></br>
                                                        This was even a thing for learning TailwandCSS and Next.js
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-2">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                        <span>Do you offer technical support?</span>
                                                        <ChevronUpIcon
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-5 text-purple-500`}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        No.
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-2">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                        <span>Is it safe to download from here?</span>
                                                        <ChevronUpIcon
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-5 text-purple-500`}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        Yes. What i do its just download the files from Github/GitLab and compile them. I dont make any changes
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <Disclosure as="div" className="mt-2">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                                        <span>Arent you worried about Plugin Developers? (FlameCord Example)</span>
                                                        <ChevronUpIcon
                                                            className={`${open ? 'rotate-180 transform' : ''
                                                                } h-5 w-5 text-purple-500`}
                                                        />
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                                        No, they say on their MC Market page that &#34;You cant distribute this without permission&#34;, but on their repo they use a MIT license, so its 100% legal to redeistribuite the compiled jar
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                </div>
                                <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                    <svg
                                        className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                        viewBox="0 0 1155 678"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                            fillOpacity=".3"
                                            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                                x1="1155.49"
                                                x2="-78.208"
                                                y1=".177"
                                                y2="474.645"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#9089FC" />
                                                <stop offset={1} stopColor="#FF80B5" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
