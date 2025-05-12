// filepath: /home/haphuthinh/Workplace/Test/github-agent-test/src/app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/utils/markdown';
import PostCard from '@/components/PostCard';

export default function Home() {
  const posts = getAllPosts().slice(0, 3); // Get the 3 most recent posts

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl shadow-sm">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Welcome to My Blog
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          A modern blog built with Next.js and Tailwind CSS, sharing thoughts and insights on technology, programming, and more.
        </p>
        <Link 
          href="/blog" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
        >
          Explore Articles
        </Link>
      </section>
      
      {/* Featured Posts Section */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Posts</h2>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
            View all
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <PostCard key={post.data.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <h3 className="text-2xl font-medium text-gray-600 mb-2">No posts yet</h3>
            <p className="text-gray-500">Blog posts will appear here once they are created.</p>
          </div>
        )}
      </section>
    </div>
  );
}
