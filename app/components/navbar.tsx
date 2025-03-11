import Image from 'next/image'
import React from 'react'

interface User {
    email: string;
}

function Navbar({ user }: { user: User }) {
    return (
        <nav className="w-full h-14 bg-white shadow-sm flex items-center px-6 border-b border-gray-200">
            <div className="flex justify-between items-center w-full">
                <div className="">
                    <Image src="/images/logo.png" className="w-32" alt="Logo" width={40} height={40} />
                </div>
                <div>
                    <div className="flex items-center space-x-2">
                        <Image src="/images/model.png" className="w-7 h-7 rounded-full object-cover" alt="Logo" width={40} height={40} />
                        <span className="text-sm text-slate-600 font-semibold">Hi, {user.email}</span>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar