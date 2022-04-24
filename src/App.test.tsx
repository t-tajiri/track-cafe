import { fireEvent, render, screen } from "@testing-library/react";
import { App } from "./App";

const getButtonElementByText = (text: string) =>
  screen.getByRole("button", { name: text });

describe("5種類の商品購入ボタン", () => {
  describe("コーヒー 480 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("コーヒー 480 円")).toBeInTheDocument();
    });

    it("注文回数の初期値が0回であること", () => {
      render(<App />);

      expect(screen.getByTestId("coffee-count")).toHaveTextContent("0");
    });

    it("ボタンをクリックすると注文回数のカウントが1回増加する", () => {
      render(<App />);

      expect(screen.getByTestId("coffee-count")).toHaveTextContent("0");

      fireEvent.click(getButtonElementByText("コーヒー 480 円"));

      expect(screen.getByTestId("coffee-count")).toHaveTextContent("1");
    });
  });

  describe("紅茶 280 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("紅茶 280 円")).toBeInTheDocument();
    });

    it("注文回数の初期値が0回であること", () => {
      render(<App />);

      expect(screen.getByTestId("tea-count")).toHaveTextContent("0");
    });

    it("ボタンをクリックすると注文回数のカウントが1回増加する", () => {
      render(<App />);

      expect(screen.getByTestId("tea-count")).toHaveTextContent("0");

      fireEvent.click(getButtonElementByText("紅茶 280 円"));

      expect(screen.getByTestId("tea-count")).toHaveTextContent("1");
    });
  });

  describe("ミルク 180 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("ミルク 180 円")).toBeInTheDocument();
    });

    it("注文回数の初期値が0回であること", () => {
      render(<App />);

      expect(screen.getByTestId("milk-count")).toHaveTextContent("0");
    });

    it("ボタンをクリックすると注文回数のカウントが1回増加する", () => {
      render(<App />);

      expect(screen.getByTestId("milk-count")).toHaveTextContent("0");

      fireEvent.click(getButtonElementByText("ミルク 180 円"));

      expect(screen.getByTestId("milk-count")).toHaveTextContent("1");
    });
  });

  describe("コーラ 190 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("コーラ 190 円")).toBeInTheDocument();
    });

    it("注文回数の初期値が0回であること", () => {
      render(<App />);

      expect(screen.getByTestId("coke-count")).toHaveTextContent("0");
    });

    it("ボタンをクリックすると注文回数のカウントが1回増加する", () => {
      render(<App />);

      expect(screen.getByTestId("coke-count")).toHaveTextContent("0");

      fireEvent.click(getButtonElementByText("コーラ 190 円"));

      expect(screen.getByTestId("coke-count")).toHaveTextContent("1");
    });
  });

  describe("ビール 580 円 のボタン", () => {
    it("ボタンが表示される", () => {
      render(<App />);

      expect(getButtonElementByText("ビール 580 円")).toBeInTheDocument();
    });

    it("注文回数の初期値が0回であること", () => {
      render(<App />);

      expect(screen.getByTestId("beer-count")).toHaveTextContent("0");
    });

    it("ボタンをクリックすると注文回数のカウントが1回増加する", () => {
      render(<App />);

      expect(screen.getByTestId("beer-count")).toHaveTextContent("0");

      fireEvent.click(getButtonElementByText("ビール 580 円"));

      expect(screen.getByTestId("beer-count")).toHaveTextContent("1");
    });
  });

  it("ボタンをクリックすると対象商品の注文回数のカウントのみが1回増加する", () => {
    render(<App />);

    // 対象商品
    expect(screen.getByTestId("coffee-count")).toHaveTextContent("0");
    // それ以外
    expect(screen.getByTestId("milk-count")).toHaveTextContent("0");
    expect(screen.getByTestId("tea-count")).toHaveTextContent("0");
    expect(screen.getByTestId("coke-count")).toHaveTextContent("0");
    expect(screen.getByTestId("beer-count")).toHaveTextContent("0");

    fireEvent.click(getButtonElementByText("コーヒー 480 円"));

    // 対象商品
    expect(screen.getByTestId("coffee-count")).toHaveTextContent("1");
    // それ以外
    expect(screen.getByTestId("milk-count")).toHaveTextContent("0");
    expect(screen.getByTestId("tea-count")).toHaveTextContent("0");
    expect(screen.getByTestId("coke-count")).toHaveTextContent("0");
    expect(screen.getByTestId("beer-count")).toHaveTextContent("0");
  });
});

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

    expect(screen.getByText("合計金額: 1420 円")).toBeInTheDocument();
  });
});
