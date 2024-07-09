'use client';

import React from 'react';
import { Button } from '@nextui-org/react';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';
import SearchFinancialDialog from './search-financial-dialog';
import Script from 'next/script';

export function RecaptchaDialog() {
  const recaptchaSiteKey = '0x4AAAAAAAdYos5Bq6s-5evG';

  return (
    <>
      <Script
        src="http://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
      />
      <div className="flex flex-col items-center gap-6 py-4">
        <div className="text-3xl font-bold text-default-700">
          You&apos;re not a robot, right?
        </div>
        <p className="text-md font-medium">
          To connect a financial, please confirm you are 100% human.
        </p>
        <div
          className="cf-turnstile"
          data-sitekey={recaptchaSiteKey}
          data-theme="light"
        />
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-success-500 rounded-small font-semibold text-tremor-background px-6">
              Continue
            </Button>
          </DialogTrigger>
          <DialogContent
            onPointerDownOutside={(e) => e.preventDefault()}
            className="sm:max-w-[600px] sm:max-h-[600px] w-full h-full border-2 border-default-300 rounded-small"
          >
            <SearchFinancialDialog />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
