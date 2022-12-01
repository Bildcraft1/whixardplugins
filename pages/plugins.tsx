import { useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import Navbar from './navbar'
import Link from 'next/link'

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
                                    Download Zone
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    Some times developer don&apos;t compile their plugins, or some of them just sells the pre-compiled binary but gives the full source code. <br></br>
                                    You can find even my plugins here (Some usefuls, Some not)
                                </p>
                                <br></br>
                                <br></br>
                                <div className="overflow-hidden bg-white shadow sm:rounded-lg">
                                    <div className="px-4 py-5 sm:px-6">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">FlameCord</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">Waterfall Proxy fork</p>
                                    </div>
                                    <div className="border-t border-gray-200">
                                        <dl>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Developer</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">2LStudios</dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Github page</dt>
                                                <dd className="mt-1 text-sm text-sky-600 sm:col-span-2 sm:mt-0"><a href="https://github.com/2lstudios-mc/FlameCord">2lstudios-mc/FlameCord</a></dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">MCMarket page</dt>
                                                <dd className="mt-1 text-sm text-sky-600 sm:col-span-2 sm:mt-0"><a href="https://www.mc-market.org/resources/13492/">Premium Resource Link</a></dd>
                                            </div>
                                            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">About</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                    FlameCord is a Waterfall fork or modification that adds antibot features, exploit prevention systems, performance improvements, removal of unused features, library updates and application layer ddos mitigation.
                                                </dd>
                                            </div>
                                            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                                                <dt className="text-sm font-medium text-gray-500">Files</dt>
                                                <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                                                    <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                                                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                                            <div className="flex w-0 flex-1 items-center">
                                                                <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                                <span className="ml-2 w-0 flex-1 truncate">Latest Build</span>
                                                            </div>
                                                            <div className="ml-4 flex-shrink-0">
                                                                <Link href="/api/download?plugin=flamecord" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Download
                                                                </Link>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
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
            </main>
        </div>
    )
}
