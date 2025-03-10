'use client';
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import TableControls from "../components/table-controls";
import Table from "../components/table";

export default function EmployeeTable() {
    const headers = ['First Name', 'Last Name', 'Email', 'Phone', 'Role'];

    const employees = [
        { firstName: "Joshua", lastName: "Bakare", email: "josh@gmail.com", phone: "+2348012345678", role: "Admin" },
        { firstName: "Jane", lastName: "Clement", email: "bakery@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "Hannah", lastName: "Johnson", email: "josh.Johnson@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "John", lastName: "Ngoka", email: "josh.Ngoka@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "Omotayo", lastName: "Adeleke", email: "josh.Adeleke@gmail.com", phone: "+2348012345678", role: "Staff" },
        { firstName: "Gloria", lastName: "Amadi", email: "josh.bakery@gmail.com", phone: "+2348012345678", role: "Staff" }
    ];

    const handleDelete = (email: string) => {
        console.log(`Delete employee with email: ${email}`);
        // Implement delete functionality here
    };

    return (
        <div>
            <Navbar />

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
                        <Table headers={headers} data={employees} onDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </div>
    );
}
