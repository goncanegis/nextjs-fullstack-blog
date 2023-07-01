import { DUMMY_POSTS } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return DUMMY_POSTS.map((post) => {
    return {
      slug: post.slug,
    };
  });
}

const Page = ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const post = DUMMY_POSTS.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PaddingContainer>
      <PostHero post={post} />
      <div className="mt-10 flex gap-10">
        <div>Share</div>
        <div>Post body</div>
      </div>
    </PaddingContainer>
  );
};

export default Page;
