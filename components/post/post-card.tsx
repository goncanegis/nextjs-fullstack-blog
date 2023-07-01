import { Post } from "@/types/collection";
import Image from "next/image";
import Link from "next/link";
import PostContent from "./post-content";

interface PostProps {
  post: Post;
}

const PostCard = ({ post }: PostProps) => {
  return (
    <Link
      href={`/post/${post.slug}`}
      className="grid grid-cols-2 items-center gap-10"
    >
      {/* Post Image */}
      <Image
        className="max-h-[300px w-full rounded-md object-cover object-center"
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
