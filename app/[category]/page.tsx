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
  // Get category
  const category = DUMMY_CATEGORIES.find(
    (category) => category.slug === params.category
  );

  const posts = DUMMY_POSTS.filter(
    (post) =>
      post.category.title.toLowerCase() === params.category.toLowerCase()
  );

  return (
    <PaddingContainer>
      <div className="mb-10">
        <h1 className="text-4xl font-semibold">{category?.title}</h1>
        <p className="text-lg text-neutral-600">{category?.description}</p>
      </div>

      <PostList posts={posts} />
    </PaddingContainer>
  );
};

export default Page;
