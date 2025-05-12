// filepath: /home/haphuthinh/Workplace/Test/github-agent-test/src/app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPostBySlug, getPostSlugs } from "@/utils/markdown";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

// Generate metadata for each post
export async function generateMetadata({ params }: Props) {
  try {
    const post = getPostBySlug(params.slug);

    return {
      title: `${post.data.title} | My Blog Website`,
      description: post.data.excerpt,
    };
  } catch {
    return {
      title: "Post Not Found | My Blog Website",
      description: "The requested blog post could not be found.",
    };
  }
}

// Generate static params for all posts
export function generateStaticParams() {
  const posts = getPostSlugs();

  return posts.map((post) => ({
    slug: post.replace(/\.md$/, ""),
  }));
}

export default function BlogPost({ params }: Props) {
  const { slug } = params;

  try {
    const post = getPostBySlug(slug);
    const { title, date, author, coverImage, tags } = post.data;

    return (
      <article className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>

        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>

          <div className="flex items-center text-gray-600 mb-6">
            <time dateTime={date} className="text-sm">
              {new Date(date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {author && (
              <>
                <span className="mx-2">·</span>
                <span className="text-sm">{author}</span>
              </>
            )}
          </div>

          {coverImage && (
            <div className="relative h-64 sm:h-96 rounded-lg overflow-hidden mb-8">
              <Image
                src={coverImage}
                alt={`Cover image for ${title}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag) => (
                <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="prose prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    );
  } catch (error) {
    notFound();
  }
}
