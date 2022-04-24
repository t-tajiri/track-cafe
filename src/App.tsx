export function App() {
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="flex flex-col gap-5">
          <button
            id="coffee"
            className="bg-white hover:bg-gray-100 border border-black py-2 px-4 rounded shadow"
          >
            <div className="w-32 flex justify-between">
              <span>コーヒー</span>
              <span>480 円</span>
            </div>
          </button>
          <button
            id="tea"
            className="bg-white hover:bg-gray-100 border border-black py-2 px-4 rounded shadow"
          >
            <div className="w-32 flex justify-between">
              <span>紅茶</span>
              <span>280 円</span>
            </div>
          </button>
          <button
            id="milk"
            className="bg-white hover:bg-gray-100 border border-black py-2 px-4 rounded shadow"
          >
            <div className="w-32 flex justify-between">
              <span>ミルク</span>
              <span>180 円</span>
            </div>
          </button>
          <button
            id="coke"
            className="bg-white hover:bg-gray-100 border border-black py-2 px-4 rounded shadow"
          >
            <div className="w-32 flex justify-between">
              <span>コーラ</span>
              <span>190 円</span>
            </div>
          </button>
          <button
            id="beer"
            className="bg-white hover:bg-gray-100 border border-black py-2 px-4 rounded shadow"
          >
            <div className="w-32 flex justify-between">
              <span>ビール</span>
              <span>580 円</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
