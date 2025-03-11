'use client';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import TableControls from "../components/table-controls";
import Table from "../components/table";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function EmployeeTable() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [data, setData] = useState([]);

    useEffect(() => {
        if (!session) {
            router.push("/auth/signin");
        } else {
            getEmployees();
        }
    }, [router, session]);

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        return null;
    }

    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Role'];

    const getEmployees = async () => {
        const response = await fetch('/api/employees');
        const data = await response.json();
        setData(data.data);
    }

    const handleDelete = async (id: string) => {
        const res = await fetch("/api/employees", {
            method: "DELETE",
            body: JSON.stringify({ id: id }),
            headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();

        console.log(data)
    };

    return (
        <div>
            <Navbar user={{ email: session.user?.email || '' }} />

            <div className="min-h-screen flex bg-gray-100">
                {/* Sidebar */}
                <Sidebar />

                {/* Main Content */}
                <div className="flex-1 p-6">
                    <Header />

                    {/* Controls */}
                    <TableControls />

                    {/* Table */}
                    <div className="mt-4">
                        <Table headers={headers} data={data} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}
