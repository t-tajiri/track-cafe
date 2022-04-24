import { PurchasableItemList } from "./components/logic/purchase/PurchasableItemList";
import { CheckoutTable } from "./components/logic/checkout/CheckoutTable";
import { RecoilRoot } from "recoil";

export const CURRENCY_TYPE = "円";

export const App: React.FC = () => {
  return (
    <RecoilRoot>
      <div className="flex h-screen">
        <div className="m-auto flex gap-x-20">
          <PurchasableItemList />
          <CheckoutTable />
        </div>
      </div>
    </RecoilRoot>
  );
};
