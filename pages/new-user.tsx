'use client'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import React from 'react';
import { useEffect } from "react";
import type { GetServerSidePropsContext } from "next"

export default function NewUserPage(props: { csrfToken: string, url: string }) {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    const { data: session, update } = useSession()
    const email = useSearchParams()?.get("email")
    const callbackLink = props.url

    useEffect(() => {
        if (session?.user?.name) {
            console.log(callbackLink);
            router.push(callbackLink)
        }
    }, [callbackLink, router, session]);

    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
                <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
                    <div className="flex flex-col items-center justify-center space-y-3 border-b border-gray-200 bg-white px-4 py-6 pt-8 text-center sm:px-16">
                        <h3 className="text-xl font-semibold">Complete registration</h3>
                        <p className="text-sm text-gray-500">
                            {"Compile your account information below."}
                        </p>
                    </div>
                    <form
                        className="flex flex-col space-y-4 bg-gray-50 px-4 py-8 sm:px-16"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-xs text-gray-600 uppercase"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email ?? undefined}
                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm text-slate-400"
                                disabled={true}
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-xs text-gray-600 uppercase"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-xs text-gray-600 uppercase"
                            >
                                Password (Optional)
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                            />
                        </div>
                        <button
                            type='button'
                            onClick={async () => {
                                const res = await fetch('/api/auth/complete-registration', {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        email,
                                        name,
                                        password,
                                    }),
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                });
                                if (res.ok) {
                                    const data = JSON.stringify(await res.json());
                                    localStorage.setItem("expires", (await update({ user: data }))?.expires ?? "");
                                    localStorage.setItem("user", data);
                                    router.push('/');
                                } else {
                                    alert('Error signing up');
                                }
                            }}
                        >Finish</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    // console.log("context.req.headers", context.req.headers)
    const origin = context.req.headers["x-forwarded-proto"] + "://" + context.req.headers["x-forwarded-host"];
    const res = (await fetch(origin + "/api/auth/csrf", {
        headers: {
            "Content-Type": "application/json",
            ...(context.req?.headers?.cookie ? { cookie: context.req.headers.cookie } : {}),
        },
    }));
    const csrfToken = await res.json();
    const url = origin + "/auth/signup";
    return {
        props: { url, ...csrfToken },
    }
}