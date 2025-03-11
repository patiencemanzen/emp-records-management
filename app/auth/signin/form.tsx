import Button from "@/app/components/button";
import Input from "@/app/components/input-field";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        setLoading(false);

        if (result?.error) {
            setError("Invalid email or password. Please try again.");
        } else {
            redirect("/dashboard");
        }
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
                                Don&apos;t have an Account? <Link href="/auth/signup" className="text-green-500">Sign Up</Link>
                            </p>
                        </div>

                        <div className="max-w-md min-w-md w-full bg-white shadow-lg rounded-lg p-8 mt-9 border border-gray-100">
                            {error && <p className="text-red-500">{error}</p>}

                            <form onSubmit={handleSubmit}>
                                <div className="mt-4">
                                    <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                                </div>

                                <div className="mt-4">
                                    <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div></div>
                                    {loading ? <span>Submiting...</span> : <Button type="submit" label="Signin" />}
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