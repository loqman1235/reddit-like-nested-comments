import Comment from "./components/Comment";
import { IComment, comments } from "./mockData";

// Create a recursive function to display replies

const DisplayNestedReplies = ({
  replies,
  level = 0,
}: {
  replies: IComment[];
  level: number;
}) => {
  if (!replies || replies.length === 0) return null;

  return replies.map((reply) => {
    return (
      <div
        key={reply.id}
        className="relative "
        style={{
          marginLeft: `${28}px`,
          marginTop: "20px",
        }}
      >
        {/* Parent comment line */}
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
        {reply.replies && (
          <DisplayNestedReplies replies={reply.replies} level={level + 1} />
        )}
      </div>
    );
  });
};

const DisplayComments = ({ comments }: { comments: IComment[] }) => {
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
        {comment.replies && (
          <DisplayNestedReplies replies={comment.replies} level={2} />
        )}
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
        {DisplayComments({ comments })}
      </div>
    </div>
  );
};
export default App;
