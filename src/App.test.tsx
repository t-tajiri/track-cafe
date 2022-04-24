import { render, screen } from "@testing-library/react";
import { App } from "./App";

const getButtonElementByText = (text: string) =>
  screen.getByRole("button", { name: text });

describe("5種類の商品購入ボタンが表示される", () => {
  it("コーヒー 480 円 のボタンを表示", () => {
    render(<App />);

    expect(getButtonElementByText("コーヒー 480 円")).toBeInTheDocument();
  });

  it("紅茶 280 円 のボタンを表示", () => {
    render(<App />);

    expect(getButtonElementByText("紅茶 280 円")).toBeInTheDocument();
  });

  it("ミルク 180 円 のボタンを表示", () => {
    render(<App />);

    expect(getButtonElementByText("ミルク 180 円")).toBeInTheDocument();
  });

  it("コーラ 190 円ボタンを表示", () => {
    render(<App />);

    expect(getButtonElementByText("コーラ 190 円")).toBeInTheDocument();
  });

  it("ビール 580 円ボタンを表示", () => {
    render(<App />);

    expect(getButtonElementByText("ビール 580 円")).toBeInTheDocument();
  });
});
