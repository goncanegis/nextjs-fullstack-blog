import { getReadingTime, getRelativeDate } from "@/lib/helpers";
import { Post } from "@/types/collection";
import { ArrowRight } from "lucide-react";

interface PostContentProps {
  post: Post;
  isPostPage?: boolean;
}

const PostContent = ({ post, isPostPage = false }: PostContentProps) => {
  return (
    <div className="space-y-2">
      {/* Tags */}
      <div
        className={`flex items-center gap-2 text-neutral-400 ${
          isPostPage ? "text-sm" : "text-xs @md:text-sm"
        }`}
      >
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
      <h2
        className={`${
          isPostPage
            ? "text-2xl font-bold md:text-3xl lg:text-4xl"
            : "text-xl font-medium @md:text-2xl @lg:text-3xl"
        }  `}
      >
        {post.title}
      </h2>

      {/* Description */}
      <p className="text-base leading-snug text-neutral-600 @lg:text-lg">
        {post.description}
      </p>

      {/* Read More */}
      {!isPostPage && (
        <div className="mt-2 flex items-center gap-2 pt-3 text-sm font-medium text-indigo-600">
          Read More <ArrowRight size="14" />
        </div>
      )}
    </div>
  );
};

export default PostContent;
