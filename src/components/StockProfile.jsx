import Form from "./Form";

const StockProfile = () => {
  return (
    <div className="flex flex-row mt-[60px] ml-[100px]">
      <div className="w-[60%]">
        <div className="flex flex-col">
          <div className="flex flex-row justify-left gap-[40px]">
            <img className="w-[100px] h-[100px]" src="" alt="" />
            <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-blue-500">Symbol</h1>
            <h1 className="text-xl">Company Name</h1>
          </div>
          </div>
        </div>
      </div>
      <div className="w-[40%] p-4">
        <Form/>
      </div>
    </div>
  );
};

export default StockProfile;
