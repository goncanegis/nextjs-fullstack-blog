import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
  layout?: "vertical" | "horizontal";
  reverse?: boolean;
}

const PostCard = ({
  post,
  layout = "horizontal",
  reverse = false,
}: PostProps) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className={`@container ${
        layout === "horizontal"
          ? "grid grid-cols-1 items-center gap-10 md:grid-cols-2"
          : "space-y-10"
      } `}
    >
      {/* Post Image */}
      <Image
        className={`h-auto max-h-[300px] w-full rounded-md object-cover object-center ${
          reverse ? "md:order-last" : ""
        }`}
        src={post.image}
        alt={post.title}
        width={600}
        height={300}
      />
      {/* Post Content */}
      <PostContent post={post} />
    </Link>
  );
};

export default PostCard;
