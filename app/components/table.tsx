import React, { useState } from 'react';

interface Employee {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
}

interface TableProps {
    headers: string[];
    data: Employee[];
    onDelete: (email: string) => void;
}

const Table: React.FC<TableProps> = ({ headers, data, onDelete }) => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelect = (email: string) => {
        setSelected((prevSelected) =>
            prevSelected.includes(email)
                ? prevSelected.filter((e) => e !== email)
                : [...prevSelected, email]
        );
    };

    const toggleSelectAll = () => {
        if (selected.length === data.length) {
            setSelected([]);
        } else {
            setSelected(data.map((emp) => emp.email));
        }
    };

    return (
        <table className="w-full text-left whitespace-nowrap">
            <thead className=''>
                <tr className="bg-gray-100">
                    <th className="p-4">
                        <input
                            type="checkbox"
                            checked={selected.length === data.length}
                            onChange={toggleSelectAll}
                        />
                    </th>
                    {headers.map((header) => (
                        <th key={header} className="p-4">
                            {header.toUpperCase()}
                        </th>
                    ))}
                    <th className="p-4">ACTIONS</th>
                </tr>
            </thead>

            <tbody>
                {data.map((emp) => (
                    <tr key={emp.email} className="focus:outline-none h-16 border border-gray-100 rounded-lg bg-white">
                        <td className="p-4">
                            <input
                                type="checkbox"
                                checked={selected.includes(emp.email)}
                                onChange={() => toggleSelect(emp.email)}
                            />
                        </td>
                        <td className={`p-4 ${selected.includes(emp.email) ? 'font-bold' : ''}`}>
                            {emp.firstName}
                        </td>
                        <td className={`p-4 ${selected.includes(emp.email) ? 'font-bold' : ''}`}>
                            {emp.lastName}
                        </td>
                        <td className="p-4">{emp.email}</td>
                        <td className="p-4">{emp.phone}</td>
                        <td className="p-4">{emp.role}</td>
                        <td className="p-4">
                            <button className="text-gray-500 hover:text-red-500" onClick={() => onDelete(emp.email)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;