import { DUMMY_POSTS } from "@/DUMMY_DATA";
import SocialLink from "@/components/elements/social-link";
import PaddingContainer from "@/components/layout/padding-container";
import PostHero from "@/components/post/post-hero";
import { notFound } from "next/navigation";
import siteConfig from "@/config/site";

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
        <div className="relative">
          {/* Share Buttons */}
          <div className="sticky top-20 flex flex-col gap-5">
            <SocialLink
              isShareURL
              platform="facebook"
              link={`https://www.facebook.com/sharer/sharer.php?u=${`${siteConfig.baseUrl}/post/${post.slug}`}`}
            />

            <SocialLink
              isShareURL
              platform="twitter"
              link={`https://www.twitter.com/intent/tweet?url=${`${siteConfig.baseUrl}/post/${post.slug}`}`}
            />

            <SocialLink
              isShareURL
              platform="linkedin"
              link={`https://www.linkedin.com/shareArticle?mini=true&url=${`${siteConfig.baseUrl}/post/${post.slug}`}`}
            />
          </div>
        </div>

        <div className="h-[1000px] w-full bg-slate-200">Post body</div>
      </div>
    </PaddingContainer>
  );
};

export default Page;
