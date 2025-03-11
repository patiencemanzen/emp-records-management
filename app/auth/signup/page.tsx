/* eslint-disable @next/next/no-async-client-component */
'use client';

import Form from "./form";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation';

export default async function SignupForm() {
    const session = await getServerSession();

    if (session) {
        redirect('/');
    }

    return <Form />;
}
