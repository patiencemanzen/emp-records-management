'use client';

import Button from "@/app/components/button";
import Input from "@/app/components/input-field";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
    const router = useRouter();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        // Call the backend API to create the user
        const response = await fetch("/api/auth/register", {
            method: "POST",
            body: JSON.stringify({ firstName, lastName, email, password }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            router.push("/auth/signin");
        } else {
            setError("Error during registration");
        }
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center lg:justify-center">
            {/* Left Side - Image and Text */}
            <div className="w-full h-screen md:w-1/2 relative hidden lg:block">
                <Image
                    src="/images/model.png"
                    alt="Signup Visual"
                    className="w-full h-screen object-cover"
                    width={1000}
                    height={1000}
                />
                <div className="absolute bottom-10 left-10 text-white text-center">
                    <h2 className="text-lg font-semibold">No Hazzles</h2>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    </p>
                </div>
            </div>

            {/* Right Side - Signup Form */}
            <div className="w-full lg:w-1/2 p-6 ">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <div className="pt-5 pb-3">
                            <h1 className="text-2xl font-bold text-slate-700">Create your free account</h1>
                            <p className="text-gray-600 mt-3">
                                Already registered? <Link href="/auth/signin" className="text-green-500">Sign in</Link>
                            </p>
                        </div>

                        <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 mt-9 border border-gray-100">
                            <form onSubmit={handleSubmit}>
                                <div className="flex gap-4">
                                    <Input label="First Name" type="text" placeholder="Fisrtname" value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)} />
                                    <Input label="Last Name" type="text" placeholder="Lastname" value={lastName}
                                        onChange={(e) => setLastName(e.target.value)} />
                                </div>

                                <div className="mt-4">
                                    <Input label="Email" type="email" placeholder="example@example.com" value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>

                                <div className="mt-4">
                                    <Input label="Password" type="password" placeholder="Password" value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </div>

                                {error && <p style={{ color: "red" }}>{error}</p>}

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
