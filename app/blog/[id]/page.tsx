import React, { FC } from 'react';
import { Metadata } from 'next';
import { Post } from '@/app/blog/page';

type PostProps = {
  params: {
    id: string;
  };
};

const getData = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
};

export const generateMetadata = async ({
  params: { id },
}: PostProps): Promise<Metadata> => {
  const post: Post = await getData(id);
  return {
    title: post.title,
  };
};

const Post: FC<PostProps> = async ({ params: { id } }) => {
  const post: Post = await getData(id);

  return (
    <div className="container-center direction-column">
      <div>
        <h2>Title:</h2>
        <p>{post.title}</p>
      </div>
      <br />
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
