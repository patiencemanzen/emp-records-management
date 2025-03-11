/* eslint-disable @next/next/no-async-client-component */
'use client';

import { redirect } from 'next/navigation';
import Form from './form';
import { getServerSession } from 'next-auth';

export default async function LoginForm() {
    const session = await getServerSession();

    if (session) {
        redirect('/');
    }

    return <Form />;
}
