'use client';
import Posts from '@/components/Posts';
import PostSearch from '@/components/PostSearch';
import useSWR from 'swr';
import { getAllPosts } from '@/app/services';

export type Post = {
  postId: number;
  id: number;
  title: string;
  name: string;
  body: string;
};

const BlogPage = () => {
  const { data: posts, isLoading } = useSWR('posts', getAllPosts);

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
