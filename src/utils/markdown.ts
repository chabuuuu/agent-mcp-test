// filepath: /home/haphuthinh/Workplace/Test/github-agent-test/src/utils/markdown.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export type PostMetadata = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  author?: string;
  tags?: string[];
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith(".md"));
}

export function getPostBySlug(slug: string): {
  data: PostMetadata;
  content: string;
} {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      data: {
        ...data,
        slug: realSlug,
        title: data.title || "",
        date: data.date || "",
        excerpt: data.excerpt || "",
        coverImage: data.coverImage || "",
        author: data.author || "",
        tags: data.tags || [],
      } as PostMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return {
      data: {
        slug: realSlug,
        title: "Post Not Found",
        date: new Date().toISOString(),
        excerpt: "This post could not be loaded",
      },
      content: "# Post Not Found\nSorry, this post could not be loaded.",
    };
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1));

  return posts;
}
