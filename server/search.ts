"use server";

import { SearchCookieType } from '@/types';
import { cookies } from 'next/headers'

export const setFieldCookie = async (searchValues: string) => {
    cookies().set('search', searchValues, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 30,
        path: '/',
    })
}

export const getFieldCookie = async () => {
    const cookieValue = cookies().get('search')?.value;
    if (!cookieValue) return null;

    try {
        const parsedData: SearchCookieType = JSON.parse(cookieValue);
        return parsedData;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export const deleteFieldCookie = async () => {
    cookies()?.delete('search');
}