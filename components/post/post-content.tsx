import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
}

const PostContent = ({ post }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div className="flex items-center gap-2 text-xs text-neutral-400 @md:text-sm ">
        <div
          className={`font-medium ${
            post.category.title == "Cities"
              ? "text-emerald-600"
              : "text-indigo-600"
          }`}
        >
          {post.category.title}
        </div>

        <div className="h-2 w-2 rounded-full bg-neutral-200" />

        <div>{`${post.author.first_name} ${post.author.last_name}`}</div>

        <div className="h-2 w-2 rounded-full bg-neutral-200" />

        <div>{getReadingTime(post.body)}</div>

        <div className="h-2 w-2 rounded-full bg-neutral-200" />

        <div>{getRelativeDate(post.date_created)}</div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-medium @md:text-2xl @lg:text-3xl">
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-base leading-snug text-neutral-600 @lg:text-lg">
        {post.description}
      </p>

      {/* Read More */}
      <div className="mt-2 flex items-center gap-2 pt-3 text-sm font-medium text-indigo-600">
        Read More <ArrowRight size="14" />
      </div>
    </div>
  );
};

export default PostContent;
