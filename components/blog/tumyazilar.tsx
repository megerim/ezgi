"use client";
import React, { useState, useEffect } from 'react';

interface Post {
  id: number;
  title: string;
  href: string;
  description: string;
  date: string;
  datetime: string;
  category: string;
}

interface ErrorState {
  message: string;
}

export default function Tumyazilar() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<ErrorState | null>(null);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching posts:', err);
        setError({ message: err.message });
        setLoading(false);
      });
  }, []);

  if (loading) return <div className='flex h-full w-full justify-center'>Yazılar Yükleniyor...</div>;
  if (error) return <div>İçerik yüklenirken hata oluştu: {error.message}</div>;

  return (
    <div className="bg-secondary sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex hover:scale-105 max-w-xl flex-col items-start justify-between border-2 border-gray-300 p-2 rounded-md drop-shadow-xl shadow-2xl hover:shadow-primary/50 transition duration-300 ease-in-out"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <p
                  className="relative z-10 rounded-full bg-gray-300 px-3 py-1.5 font-medium text-gray-900 hover:bg-gray-200 transition duration-500 ease-in-out"
                >
                  {post.category}
                </p>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href} className="hover:underline">
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
