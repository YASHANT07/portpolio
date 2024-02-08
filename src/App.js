
import { Navigation } from "./Page/Navigation";
import { Main } from "./Page/Main";
function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-[#14131a] flex text-white">
        <div className="hidden sm:flex flex-col flex-[0.2] text-[#8b8a91] bg-[#1c1b23] m-10 rounded-lg p-8">
          <Navigation />
        </div>

        <div className=" flex-[0.8] flex flex-col overflow-auto pb-10 gap-8 mt-10">
          <Main />
        </div>
      </div> 
    </>
  );
}

export default App;
