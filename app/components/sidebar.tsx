import React from 'react'

function Sidebar() {
    return (
        <aside className="w-16 bg-white border-r border-gray-100 p-4 flex flex-col space-y-6 items-center">
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <div className="w-6 h-6 bg-green-500 rounded"></div>
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
        </aside>
    )
}

export default Sidebar