'use client';
import React, { useState } from 'react'
import Modal from './modal';
import Input from './input-field';
import Button from './button';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const submitEmployee = async () => {
        const res = await fetch("/api/employees", {
            method: "POST",
            body: JSON.stringify({
                firstName: firstname,
                lastName: lastname, email, phone
            }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        console.log(data)
    };

    return (
        <header>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Employees</h1>

                <button onClick={() => setIsOpen(true)} className="bg-green-500 text-white px-4 py-2 flex items-center rounded cursor-pointer">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </span>
                    <span>Add New</span>
                </button>
            </div>

            <div className="bg-white p-6 rounded mt-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Josh Bakery Ventures</h2>
                <p className="text-gray-500">62, Bode Thomas, Surulere, Lagos</p>
            </div>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <h2 className='text-2xl font-semibold mb-2'>Create New Employee</h2>
                <p className='text-sm font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vel earum deleniti voluptatum nulla hic quibusdam enim eius vero velit?</p>

                <form onSubmit={submitEmployee} className='mt-5 border-t border-gray-200 pt-5'>
                    <div className=''>
                        <Input label="First Name" type='text' placeholder="Enter first name" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    </div>
                    <div className='mt-5'>
                        <Input label="Last Name" type='text' placeholder="Enter first name" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    </div>
                    <div className='mt-5'>
                        <Input label="Email Address" type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='mt-5'>
                        <Input label="Phone" type='number' placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <Button label="Create Employee" type="submit" />
                </form>
            </Modal>
        </header>
    )
}

export default Header