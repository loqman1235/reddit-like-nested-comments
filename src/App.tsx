import Comment from "./components/Comment";
import { IComment, comments } from "./mockData";

// Create a recursive function to display replies

const displayNestedReplies = (replies: IComment[], level: number = 0) => {
  if (!replies || replies.length === 0) return;

  return replies.map((reply: IComment) => {
    return (
      <div
        key={reply.id}
        className="relative "
        style={{
          marginLeft: `${28}px`, // 44px
          marginTop: "20px",
        }}
      >
        <div
          className="
        absolute 
        top-[40px] 
        left-[calc(32px/2)] 
        w-[2px] h-[calc(100%-40px)]
        bg-neutral-800 
        cursor-pointer 
        hover:bg-neutral-700 
        transition
        rounded-full 
         "
        ></div>
        <Comment {...reply} level={level} />
        {reply.replies && displayNestedReplies(reply.replies, level + 1)}
      </div>
    );
  });
};

const displayComments = (comments: IComment[]) => {
  return comments.map((comment) => {
    return (
      <div key={comment.id} className="relative">
        <div
          className="
        absolute 
        top-[40px] 
        left-[calc(32px/2)] 
        w-[2px] h-[calc(100%-40px)]
        bg-neutral-800 
        cursor-pointer 
        hover:bg-neutral-700 
        transition
        rounded-full 
         "
        ></div>

        <Comment {...comment} level={0} />
        {comment.replies && displayNestedReplies(comment.replies, 2)}
      </div>
    );
  });
};

const App = () => {
  return (
    <div className="my-10 w-[440px] md:w-[600px]">
      <h1 className="text-xl font-bold mb-5">Replies</h1>

      {/* Comments container */}
      <div className="w-full flex flex-col gap-5">
        {displayComments(comments)}
      </div>
    </div>
  );
};
export default App;
