'use client';
import BillingCard from '@/components/ui/BillingCard';
import { financialList } from '@/lib/financial-data';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay
} from '@/components/ui/dialog';
import { RecaptchaDialog } from './recaptcha-dialog';

export function BillingPage() {
  return (
    <div className="w-full px-4">
      <section className="bg-muted py-4 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="space-y-4 text-left">
            <h1 className="text-3xl font-bold md:text-4xl text-default-700">
              Billing connections
            </h1>
            <p className="text-tremor-content md:text-xl font-medium">
              Choose your financial to get started
            </p>
          </div>
        </div>
      </section>
      <section className="py-3 md:py-5">
        <div className="container grid grid-cols-2 gap-6 p-4 sm:grid-cols-3 md:grid-cols-5 md:px-6 overflow-x-auto">
          {financialList?.map((financialItem) => (
            <div
              key={financialItem?.id}
              className="flex flex-col items-center gap-3 shrink-0"
            >
              <BillingCard
                image={financialItem?.image}
                className="shadow-none border-1 border-default-200"
                imageClassName="aspect-square"
                bodyClassName="min-h-40 min-w-40"
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-muted py-8 md:py-12">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm font-bold text-default-700">
              Don&apos;t see your financial? We support over 14,000 financial
              institution.{' '}
              <Dialog>
                <DialogTrigger asChild>
                  <span className="underline text-primary-600 cursor-pointer">
                    Find your financial
                  </span>
                </DialogTrigger>
                <DialogOverlay>
                  <DialogContent
                    className="sm:max-w-[500px] sm:min-h-[300px] w-full border-2 border-default-300 rounded-small"
                    onPointerDownOutside={(e) => e.preventDefault()}
                  >
                    <RecaptchaDialog />
                  </DialogContent>
                </DialogOverlay>
              </Dialog>
            </p>
            <p className="text-xs font-semibold text-default-600">
              Financial import is available with any paid plan. By connecting
              your financial you agree to our{' '}
              <a href="#" className="underline text-primary-600">
                Terms of service
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
