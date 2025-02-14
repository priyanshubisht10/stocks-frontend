const StockCard = () => {
  return (
    <div className="border border-slate-200 w-[15%] rounded-md shadow-md p-4 flex flex-col gap-2 justify-between mx-2">
      <div className="flex flex-col gap-2 p-2">
        <div>
          <img className="w-[50px] border border-black h-[50px]" alt="" />
        </div>
        <div className="flex flex-col">
        <h1 className="text-xl font-bold">StockSymbol</h1>
        <h3>StockCompany</h3>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-2 w-[50%] px-2">
        <p className="font-bold">price</p>
        <p className="text-red-500">(20%)</p>
      </div>
    </div>
  );
};

export default StockCard;
