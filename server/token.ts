"use server";

import { generateCsrfToken } from "@/lib/utils";
import { cookies } from 'next/headers'

export const setCsrfToken = async () => {
    const token = generateCsrfToken();
    cookies().set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 30,
        sameSite: 'strict',
        path: '/',
    })
    return token;
}

export const getCsrfToken = async () => {
    return cookies().get('token')?.value;
}

export const deleteCsrfToken = async () => {
    cookies()?.delete('token');
}