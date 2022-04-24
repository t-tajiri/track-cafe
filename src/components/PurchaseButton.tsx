type Props = {
  id: string;
  text: string;
  price: number;
  currencyType: string;
};

export const PurchaseButton: React.FC<Props> = (ctx) => {
  return (
    <button
      id={ctx.id}
      className="bg-white hover:bg-gray-100
                 border border-black
                 py-2 px-4
                 rounded
                 shadow
                "
    >
      <div className="w-32 flex justify-between">
        <span>{ctx.text}</span>
        <span>{`${ctx.price} ${ctx.currencyType}`}</span>
      </div>
    </button>
  );
};
