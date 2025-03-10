'use client';
import Button from "@/app/components/button";
import Input from "@/app/components/input-field";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignupForm() {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleSignup = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: { "Content-Type": "application/json" },
        });

        const data = await res.json();
        setMessage(data.message || data.error);
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Left Side - Image and Text */}
            <div className="w-full md:w-1/2 relative">
                <Image
                    src="/images/model.png"
                    alt="Signup Visual"
                    className="w-full h-screen object-cover"
                    width={500}
                    height={700}
                />
                <div className="absolute bottom-10 left-10 text-white text-center">
                    <h2 className="text-lg font-semibold">No Hazzles</h2>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full md:w-1/2 p-6">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <div className="pt-5 pb-3">
                            <h1 className="text-2xl font-bold text-slate-700">Create your free account</h1>
                            <p className="text-gray-600 mt-3">
                                Already registered? <Link href="/auth/login" className="text-green-500">Sign in</Link>
                            </p>
                        </div>

                        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 mt-9 border border-gray-100">
                            {message && <p className="text-red-500">{message}</p>}

                            <form onSubmit={handleSignup}>
                                <div className="flex gap-4">
                                    <Input label="First Name" type="text" placeholder="Fisrtname" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
                                    <Input label="Last Name" type="text" placeholder="Lastname" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
                                </div>

                                <div className="mt-4">
                                    <Input label="Email" type="email" placeholder="example@example.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </div>

                                <div className="mt-4">
                                    <Input label="Password" type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div></div>
                                    <Button label="continue" type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-10">
                    <p className="text-xs text-gray-500 mt-4">
                        By signing up, you agree to our <a href="#" className="text-green-500">Terms</a> and <a href="#" className="text-green-500">Privacy Policy</a>
                    </p>
                    <p className="text-xs text-gray-500 mt-4">
                        © 2019 Tinylabs. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}
