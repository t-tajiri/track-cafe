export const CheckoutTable: React.FC = () => {
  return (
    <div className="flex flex-col justify-center">
      <div className="w-60 border px-3 py-5">
        <div>お会計</div>
        <div className="my-2 border" />
        <div className="flex flex-col">
          <span id="count">商品数: 0 個</span>
          <span id="price">合計金額: 0 円</span>
        </div>
      </div>
    </div>
  );
};
