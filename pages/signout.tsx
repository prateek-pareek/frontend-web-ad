import type { GetServerSidePropsContext } from "next"
import Link from "next/link";
import { signOut } from 'next-auth/react';
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'




export default function SignoutPage(props: { url?: URL, csrfToken?: string }) {
  const { url, csrfToken } = props
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session?.user) {
      router.push(url?.toString() ?? '/')
    }
  }, [router, session?.user, url]);
  return (<>
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Sign Out</h1>
          <p className="text-gray-500 dark:text-gray-400">Are you sure you want to sign out?</p>
        </div>
        <div className="space-y-4">
          <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={() => signOut({
            callbackUrl: url?.origin,
          })}>
            Sign Out
          </button>
          <Link href="/" className="text-blue-500 hover:underline" prefetch={false}>
            Cancel
          </Link>
        </div>
        <div className="space-y-2 text-left">
          <h2 className="text-lg font-semibold">Why are you signing out?</h2>
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" id="reason-1" >I&apos;m taking a break from the app</input>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox"  id="reason-2">I&apos;m not satisfied with the app&apos;s features or performance</input>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="reason-3" >I&apos;m concerned about privacy or security issues</input>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="reason-4" >Other</input>
            </div>
          </div>
        </div>
        <div className="text-left text-gray-500 dark:text-gray-400">
          We value your feedback and are always working to improve our app. If you have any other comments or
          suggestions, please don&apos;t hesitate to reach out to our support team.
        </div>
      </div>
    </div>
  </>
  )
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
  const url = context.query.callbackUrl ? context.query.callbackUrl : origin;
  return {
    props: { url, ...csrfToken },
  }
}