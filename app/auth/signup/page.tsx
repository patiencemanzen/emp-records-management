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
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded">
            <h2 className="text-2xl mb-4">Sign Up</h2>
            {message && <p className="text-red-500">{message}</p>}
            
            <form onSubmit={handleSignup}>
                <input type="text" placeholder="First Name" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full p-2 border mb-2" required />
                <input type="text" placeholder="Last Name" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full p-2 border mb-2" required />
                <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full p-2 border mb-2" required />
                <input type="password" placeholder="Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="w-full p-2 border mb-2" required />
                <button type="submit" className="bg-green-500 text-white px-4 py-2 w-full">Sign Up</button>
            </form>
        </div>
    );
}
