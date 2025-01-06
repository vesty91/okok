import React from 'react';

interface BuildSummaryPriceProps {
  totalPrice: number;
}

const BuildSummaryPrice: React.FC<BuildSummaryPriceProps> = ({ totalPrice }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-600">Total Price:</span>
      <span className="font-semibold text-lg">${totalPrice.toFixed(2)}</span>
    </div>
  );
};

export default BuildSummaryPrice;
