import Comment from "./components/Comment";

const App = () => {
  return (
    <div className="my-10 w-[440px] md:w-[600px]">
      <h1 className="text-xl font-bold mb-5">Replies</h1>

      {/* Comments container */}
      <div className="w-full flex flex-col gap-5">
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    </div>
  );
};
export default App;
