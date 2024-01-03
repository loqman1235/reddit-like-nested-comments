import Comment from "./components/Comment";
import { IComment, comments } from "./mockData";

// Create a recursive function to display replies

const displayNestedReplies = (replies: IComment[], level: number = 0) => {
  if (!replies || replies.length === 0) return;

  return replies.map((reply: IComment) => {
    return (
      <div
        key={reply.id}
        style={{
          paddingLeft: `${level * 20}px`,
          marginTop: "20px",
        }}
      >
        <Comment {...reply} level={level} />
        {reply.replies && displayNestedReplies(reply.replies, level + 1)}
      </div>
    );
  });
};

const displayComments = (comments: IComment[]) => {
  return comments.map((comment, index) => {
    return (
      <div key={comment.id}>
        <Comment {...comment} level={0} />
        {comment.replies && displayNestedReplies(comment.replies, index + 1)}
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
