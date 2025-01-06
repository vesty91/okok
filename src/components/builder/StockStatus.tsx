import React from 'react';

interface StockStatusProps {
  stock: number;
}

const StockStatus: React.FC<StockStatusProps> = ({ stock }) => {
  return (
    <span className={`
      px-2 py-1 rounded-full text-xs font-medium
      ${stock > 5 
        ? 'bg-green-100 text-green-700' 
        : stock > 0 
          ? 'bg-amber-100 text-amber-700'
          : 'bg-red-100 text-red-700'
      }
    `}>
      {stock > 5 
        ? 'In Stock' 
        : stock > 0 
          ? `Only ${stock} left`
          : 'Out of Stock'
      }
    </span>
  );
};

export default StockStatus;
