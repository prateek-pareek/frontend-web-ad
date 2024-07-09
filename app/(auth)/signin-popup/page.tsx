"use client";
import { signIn, useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";


function Search() {
    const { data: session, status } = useSession();
    const params = useSearchParams();
    useEffect(() => {
        if (!(status === "loading") && !session) {
            params?.get("provider") && void signIn(params.get("provider") ?? "google");
        };
        if (session) window.close();
    }, [params, session, status]);

    return <div></div>
}

export default function SignInPage() {

    return (
        <main>
            <Suspense>
                <Search />
            </Suspense>
        </main>
    );
};

