import { render, screen } from "@testing-library/react";
import { App } from "./App";

const getButtonElementByText = (text: string) =>
  screen.getByRole("button", { name: text });

describe("5種類の商品購入ボタン", () => {
  describe("コーヒー 480 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("コーヒー 480 円")).toBeInTheDocument();
    });
  });

  describe("紅茶 280 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("紅茶 280 円")).toBeInTheDocument();
    });
  });

  describe("ミルク 180 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("ミルク 180 円")).toBeInTheDocument();
    });
  });

  describe("コーラ 190 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("コーラ 190 円")).toBeInTheDocument();
    });
  });

  describe("ビール 580 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("ビール 580 円")).toBeInTheDocument();
    });
  });
});
