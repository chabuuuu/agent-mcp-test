import { getAllPosts } from '@/utils/markdown';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'Blog | My Blog Website',
  description: 'Explore all blog posts on various topics related to technology and programming.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">
          Explore our latest thoughts, tutorials, and insights.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.data.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-medium text-gray-600 mb-2">No posts yet</h2>
          <p className="text-gray-500">Check back soon for new content.</p>
        </div>
      )}
    </div>
  );
}
