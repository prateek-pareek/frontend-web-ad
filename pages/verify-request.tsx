import Image  from "next/image";
import type { GetServerSidePropsContext } from "next"
import favicon from '@/app/favicon.ico'

export default function VerifyRequestPage(props: { url: URL }) {
  const { url } = props

  return (
    <main className="flex flex-col items-center justify-center bg-orange-400 min-h-screen">
      <Image src={favicon} alt="Website Logo" className="h-8 w-auto p-1" />
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Check Your Email</h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-md">
          We&apos;ve sent instructions to your email address. Please check your inbox and follow the steps to complete your
          registration.
        </p>
        <p>
          <a className="site" href={url.origin}>
            {url.host}
          </a>
        </p>
      </div>
    </main>
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
  const url = origin + "/auth/signup";
  return {
    props: { url, ...csrfToken },
  }
}