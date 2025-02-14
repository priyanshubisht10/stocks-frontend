import Form from "./Form";

const StockProfile = () => {
  return (
    <div className="ml-[100px]">
      <div>
        <div className="flex flex-row mt-[60px]">
          <div className="w-[60%]">
            <div className="flex flex-col">
              <div className="flex flex-row justify-left gap-[40px]">
                <img className="w-[100px] h-[100px]" src="" alt="" />
                <div className="flex flex-col gap-4">
                  <h1 className="text-4xl font-bold text-blue-500">Symbol</h1>
                  <h1 className="text-xl">Company Name</h1>
                </div>
              </div>
              <div className="my-4">
                <div className="border border-slate-200 w-full h-[500px]">
                  Graph here
                </div>
              </div>
            </div>
          </div>
          <div className="w-[40%] px-6">
            <Form />
          </div>
        </div>
        <div>
          <div className="border-b-2 py-2 mr-[80px]">
            <h1 className="inline py-2 text-xl font-bold text-blue-500 border-b-2 border-blue-500">
              Overview
            </h1>
          </div>
          <div className="py-4 w-[60%]">
            <h1>
              Company description : Lorem ipsum dolor, sit amet consectetur
              adipisicing elit.
            </h1>
            <div className="flex flex-row justify-between">
              <div className="border border-slate-200 shadow-md flex flex-col gap-4 p-4 mt-4 rounded-md">
                <p>Today's Low</p>
                <p>price</p>
              </div>
              <div className="border border-slate-200 shadow-md flex flex-col gap-4 p-4 mt-4 rounded-md">
                <p>Today's High</p>
                <p>price</p>
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between gap-[20px] border-t-2 border-slate-200 mr-[80px] mt-4">
        <div className="flex flex-col gap-2 p-4 mt-4 rounded-md">
          <p>Open</p>
          <p>price</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-4 rounded-md">
          <p>Close</p>
          <p>price</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-4 rounded-md">
          <p>Open</p>
          <p>price</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-4 rounded-md">
          <p>Open</p>
          <p>price</p>
        </div>
        <div className="flex flex-col gap-2 p-4 mt-4 rounded-md">
          <p>Open</p>
          <p>price</p>
        </div>
      </div>
    </div>
  );
};

export default StockProfile;
