import React, { ChangeEvent, useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import BillingCard from '../ui/BillingCard';
import { financialList } from '@/lib/financial-data';
import { Input } from '@nextui-org/react';

const SearchFinancialDialog = () => {
  const [input, setInput] = useState('');
  const [filteredFinancialData, setFilteredFinancialData] =
    useState(financialList);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInput(text);
    setFilteredFinancialData(
      financialList.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      )
    );
  };

  return (
    <div className="p-4 flex flex-col object-contain">
      <div className="relative">
        <Input
          type="text"
          variant="bordered"
          placeholder="Search your financial..."
          value={input}
          onChange={(e) => onSearchChange(e as ChangeEvent<HTMLInputElement>)}
          startContent={
            <MagnifyingGlassIcon className="w-5 h-5 text-default-300" />
          }
        />
      </div>
      {filteredFinancialData.length === 0 ? (
        <div className="p-8 text-center text-default-600 font-semibold">
          No financials found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-8 overflow-auto max-h-[70vh]">
          {filteredFinancialData.map((financialItem) => (
            <BillingCard
              key={financialItem.id}
              image={financialItem.image}
              className="shadow-none border-1 border-default-200 rounded-small object-contain flex justify-center items-center min-h-24 p-4"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFinancialDialog;
