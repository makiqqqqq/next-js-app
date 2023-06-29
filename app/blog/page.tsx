'use client';
import React, { useState, useEffect } from 'react';
import Posts from '@/components/Posts';
import PostSearch from '@/components/PostSearch';
import useSWR from 'swr';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  });
  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
};

const BlogPage = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);
  // const [posts, setPosts] = useState<Post[]>([]);
  // const [loading, setLoading] = useState<boolean>(true);
  //
  // useEffect(() => {
  //   getAllPosts()
  //     .then(setPosts)
  //     .finally(() => setLoading(false));
  // }, []);

  return (
    <div className="container-center">
      <div className="blog-wrapper">
        <h1 className="full-w container-center blog-title">BlogPage</h1>
        <PostSearch />
        {isLoading ? <p>loading...</p> : <Posts posts={posts} />}
      </div>
    </div>
  );
};

export default BlogPage;
