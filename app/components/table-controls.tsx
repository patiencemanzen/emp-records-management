import React from 'react'

function TableControls() {
    return (
        <div className="flex items-center space-x-4 py-5 mt-5">
            <div className='border p-2 rounded border-gray-200 bg-white'>
                <select className="border-none outline-none bg-white text-sm">
                    <option>Change role</option>
                </select>
            </div>

            <button className="bg-green-500 text-white px-4 py-2 rounded">Change</button>

            <div className="flex border border-gray-200 bg-white rounded px-2 items-center">
                <span className="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
                <input type="text" placeholder="Enter staff name..." className="p-2 focus:outline-none" />
            </div>
        </div>
    )
}

export default TableControls
