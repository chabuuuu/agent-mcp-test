// filepath: /home/haphuthinh/Workplace/Test/github-agent-test/src/app/blog/[slug]/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Post Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        Sorry, the blog post you are looking for could not be found.
      </p>
      <Link
        href="/blog"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
      >
        Browse All Posts
      </Link>
    </div>
  );
}
