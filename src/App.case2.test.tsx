import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

const getButtonElementByText = (text: string) =>
  screen.getByRole("button", { name: text });

describe("お会計テーブル", () => {
  it("初期値を0として商品数と合計金額が表示される", () => {
    render(<App />);

    expect(screen.getByText("商品数: 0 個")).toBeInTheDocument();
    expect(screen.getByText("合計金額: 0 円")).toBeInTheDocument();
  });

  it("各種商品購入ボタンを押した合計が商品数に表示される", () => {
    render(<App />);

    expect(screen.getByText("商品数: 0 個")).toBeInTheDocument();

    fireEvent.click(getButtonElementByText("コーヒー 480 円"));
    fireEvent.click(getButtonElementByText("コーヒー 480 円"));
    fireEvent.click(getButtonElementByText("コーラ 190 円"));

    expect(screen.getByText("商品数: 3 個")).toBeInTheDocument();
  });

  it("各種商品購入ボタンを押した合計が合計金額に表示される", () => {
    render(<App />);

    expect(screen.getByText("商品数: 0 個")).toBeInTheDocument();

    fireEvent.click(getButtonElementByText("コーヒー 480 円"));
    fireEvent.click(getButtonElementByText("コーヒー 480 円"));
    fireEvent.click(getButtonElementByText("ミルク 180 円"));
    fireEvent.click(getButtonElementByText("ビール 580 円"));
    fireEvent.click(getButtonElementByText("ビール 580 円"));

    expect(screen.getByText("合計金額: 2300 円")).toBeInTheDocument();
  });
});
