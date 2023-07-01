import { Post } from "@/types/collection";
import PostContent from "./post-content";
import Image from "next/image";

interface PostHeroProps {
  post: Post;
  isPostPage?: boolean;
}

const PostHero = ({ post, isPostPage = false }: PostHeroProps) => {
  return (
    <div>
      <PostContent isPostPage post={post} />
      <Image
        className="mt-6 h-[300px] rounded-md object-cover object-center md:h-[500px]"
        src={post.image}
        width={1280}
        height={500}
        alt={post.title}
      />
    </div>
  );
};

export default PostHero;
