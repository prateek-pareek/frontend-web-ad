"use client";

import type { GetServerSidePropsContext } from "next"
import SignInPageView from "@/components/component/sigin_page_simple_card";

export default function SignInPage(props: { csrfToken: string, url: string }) {
  return (<SignInPageView {...props}></SignInPageView>)
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const origin = context.req.headers["x-forwarded-proto"] + "://" + context.req.headers["x-forwarded-host"];
  const res = (await fetch(origin + "/api/auth/csrf", {
    headers: {
      "Content-Type": "application/json",
      ...(context.req?.headers?.cookie ? { cookie: context.req.headers.cookie } : {}),
    },
  }));
  let csrfToken = null;
  try {
    csrfToken = await res.json();
  } catch (error) {
    console.error('Failed to parse CSRF token response as JSON:', error);
  }
  const url = context.query.callbackUrl ? context.query.callbackUrl : origin;
  return {
    props: { url, ...csrfToken },
  }
}