// filepath: /home/haphuthinh/Workplace/Test/github-agent-test/src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About | My Blog Website",
  description: "Learn more about the author and purpose of this blog.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Me</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3">
          <div className="relative h-64 w-64 mx-auto rounded-lg overflow-hidden">
            <Image
              src="/profile-placeholder.jpg"
              alt="Author profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Hello, I'm [Your Name]
          </h2>
          <p className="text-gray-600 mb-4">
            I'm a web developer and technical writer passionate about sharing
            knowledge and experiences in software development, design, and
            technology trends.
          </p>
          <p className="text-gray-600 mb-4">
            This blog is where I document my journey, share tutorials, and
            discuss topics that I find interesting in the world of technology.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://twitter.com"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              className="text-gray-800 hover:text-gray-600"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              className="text-blue-700 hover:text-blue-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          About This Blog
        </h2>
        <p className="text-gray-600 mb-4">
          This blog was created using modern web technologies including Next.js,
          React, and Tailwind CSS. It features server-side rendering for optimal
          performance and SEO, and uses Markdown for content management.
        </p>
        <p className="text-gray-600">
          All posts are written with a focus on clarity, usefulness, and
          practical application. I aim to provide insights that readers can
          immediately apply in their own projects and work.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact</h2>
        <p className="text-gray-600 mb-4">
          Have a question or want to collaborate? Feel free to reach out to me
          at:
        </p>
        <p className="text-blue-600 font-medium">your.email@example.com</p>
      </section>
    </div>
  );
}
