import React from 'react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';
import { cn } from '@/lib/utils';

interface BillingCardProps {
  image: string;
  className?: string;
  imageClassName?: string;
  bodyClassName?: string;
}

export default function BillingCard({
  image,
  className,
  imageClassName,
  bodyClassName
}: BillingCardProps) {
  return (
    <Card className={cn('px-2 cursor-pointer rounded-small', className)}>
      <CardBody
        className={cn(
          'flex justify-center items-center p-0 overflow-hidden',
          bodyClassName
        )}
      >
        <Image
          alt="financial logo"
          className={cn(
            'object-contain w-full h-full rounded-xl',
            imageClassName
          )}
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
