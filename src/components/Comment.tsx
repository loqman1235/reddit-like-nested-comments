import { HiOutlineHeart, HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";

interface CommentProps {
  author: string;
  avatar: string;
  text: string;
  level: number;
}

const Comment = ({ author, avatar, text, level }: CommentProps) => {
  console.log(`ml-[${level * 20}px]`, "Level");
  return (
    /*
      Issue: 
      The Profile Picture container wasn't taking the full height of its parent 

      Cause: 
      I added flex-start class to the parent

      Status:
      Fixed
    */
    <div className={`w-full flex gap-5 `}>
      {/* Profile Picture container */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="
          w-8
          h-8 
          rounded-full 
          overflow-hidden
          bg-neutral-700
          "
        >
          <img
            src={avatar}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>

        {/*  Line under the profile picture */}
        <div className="w-[2px] rounded-full h-[calc(100%-40px)] bg-neutral-300 cursor-pointer hover:bg-neutral-400 transition relative"></div>
      </div>

      {/* Comment body */}
      <div
        className="
        flex-1
      flex 
      flex-col 
      gap-1
      items-start

      "
      >
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-sm cursor-pointer">{author}</h3>
          <div className="w-[2px] h-[2px] rounded-full bg-neutral-500 "></div>
          <p className="text-sm text-neutral-500">less than a minute ago</p>
        </div>
        <p className="leading-6 text-sm">{text}</p>
        <div className="flex gap-5">
          <button className="text-sm text-neutral-500 hover:text-gray-900 transition font-medium flex items-center gap-1">
            <HiOutlineChatBubbleOvalLeft size={18} /> Reply
          </button>
          <button className="text-sm text-neutral-500 hover:text-gray-900 transition font-medium flex items-center gap-1">
            <HiOutlineHeart size={18} /> Like
          </button>
        </div>
      </div>
    </div>
  );
};
export default Comment;
