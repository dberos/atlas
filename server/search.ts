"use server";

import { cookies } from 'next/headers'

export const setFieldCookie = async (field: string) => {
    cookies().set('field', field, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 30,
        path: '/',
    })
}

export const getFieldCookie = async () => {
    return cookies().get('field')?.value;
}

export const deleteFieldCookie = async () => {
    cookies()?.delete('field');
}