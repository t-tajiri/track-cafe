import { useState } from "react";

type Props = {
  id: string;
  text: string;
  price: number;
  currencyType: string;
};

export const PurchaseButton: React.FC<Props> = (ctx) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="relative">
      <button
        id={ctx.id}
        className="bg-white hover:bg-gray-100
                 border border-black
                 py-2 px-4
                 rounded
                 shadow
                "
        onClick={() => setCounter(counter + 1)}
      >
        <div className="w-32 flex justify-between">
          <span>{ctx.text}</span>
          <span>{`${ctx.price} ${ctx.currencyType}`}</span>
        </div>
      </button>
      <div
        id={`${ctx.id}-count`}
        data-testid={`${ctx.id}-count`}
        className="absolute h-7 w-7 -top-3 -right-3 text-center border bg-red-500 text-white rounded-full"
      >
        {counter}
      </div>
    </div>
  );
};
