"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  createdAt: string; // or Date if you are sending a Date object
  // Include other properties that your posts have
}


function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

export default function BlogPostList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const response = await fetch('/api/posts');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
      setLoading(false);
    }

    fetchPosts();
  }, []);

  return (
    <div className="py-6 md:py-12 lg:py-16">
      <div className="flex justify-center">
        <div className="grid gap-4 w-full max-w-2xl">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold tracking-tight">List of Blog Posts</h1>
            <Link href={"/admin/ekle"} className=" font-bold border-2 p-2 border-black">Yazı Ekle</Link>
          </div>
          {loading ? (
            <p>Loading posts...</p>
          ) : (
            <div className="border border-gray-200 rounded-lg divide-y dark:border-gray-800">
              {posts.map((post) => (
                <div key={post.id} className="flex flex-col gap-2 p-4 last:divide-y-0">
                  <div className="space-y-1.5">
                    <h2 className="text-lg font-semibold">{post.title}</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{post.content}</p>
                  </div>
                  <div className="flex justify-between items-center gap-4 pt-4 md:pt-2">
                    <Link href="#" className="flex items-center underline hover:no-underline">
                      <CalendarIcon className="w-4 h-4 mr-1.5 flex-shrink-0" />
                      <span className="text-xs">Posted on {new Date(post.createdAt).toLocaleDateString()}</span>
                    </Link>
                    <div className="flex items-center gap-2 text-sm">
                      <Link href={`/edit/${post.id}`} className="underline hover:no-underline">Edit</Link>
                      <Link href={`/delete/${post.id}`} className="underline hover:no-underline">Delete</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
