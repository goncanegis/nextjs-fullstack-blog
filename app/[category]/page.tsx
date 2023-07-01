import { DUMMY_POSTS, DUMMY_CATEGORIES } from "@/DUMMY_DATA";
import PaddingContainer from "@/components/layout/padding-container";
import PostList from "@/components/post/post-list";

export async function generateStaticParams() {
  return DUMMY_CATEGORIES.map((category) => {
    return {
      category: category.slug,
    };
  });
}

const Page = ({ params }: { params: { category: string } }) => {
  const posts = DUMMY_POSTS.filter(
    (post) =>
      post.category.title.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <PaddingContainer>
      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
