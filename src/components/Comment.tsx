const Comment = () => {
  return (
    /*
      Issue: 
      The Profile Picture container wasn't taking the full height of its parent 

      Cause: 
      I added flex-start class to the parent

      Status:
      Fixed
    */
    <div className="w-full flex gap-3">
      {/* Profile Picture container */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="
          w-10
          h-10 
          rounded-full 
          overflow-hidden
          bg-neutral-700
          "
        >
          <img
            src="https://i0.wp.com/wishes143.com/wp-content/uploads/2023/10/aesthetic-anime-boy-dp.jpg?fit=736%2C736&ssl=1"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[2px] rounded-full h-[calc(100%-40px)] bg-neutral-300 cursor-pointer hover:bg-neutral-400 transition"></div>
      </div>

      {/* Comment body */}
      <div
        className="
        flex-1
      flex 
      flex-col 
      gap-2
      items-start

      "
      >
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-sm cursor-pointer">Axel Djefafla</h3>
          <div className="w-[2px] h-[2px] rounded-full bg-neutral-500 "></div>
          <p className="text-sm text-neutral-500">less than a minute ago</p>
        </div>
        <p className="leading-6 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga a sed
          dolorem illum, quam nesciunt facere eaque id velit officiis. Hic
          ducimus nam animi eos voluptatum aliquid, explicabo voluptas
          inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fuga a sed dolorem illum, quam nesciunt facere eaque id velit
          officiis. Hic ducimus nam animi eos voluptatum aliquid, explicabo
          voluptas inventore.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fuga a sed dolorem illum, quam nesciunt facere eaque id velit
          officiis. Hic ducimus nam animi eos voluptatum aliquid, explicabo
          voluptas inventore.
        </p>
        <div className="flex gap-5">
          <button className="text-sm text-neutral-500 hover:text-gray-900 transition font-semibold">
            Reply
          </button>
          <button className="text-sm text-neutral-500 hover:text-gray-900 transition font-semibold">
            Like
          </button>
        </div>
      </div>
    </div>
  );
};
export default Comment;
