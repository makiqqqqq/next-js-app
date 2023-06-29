import React, { FC } from 'react';
import { Post } from '@/app/blog/page';
import { Link } from '@chakra-ui/next-js';
import { OrderedList, ListItem } from '@chakra-ui/react';

type PostsProps = {
  posts: Post[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <OrderedList>
      {posts.map((post: Post) => (
        <ListItem key={post.id}>
          <span>{post.id}. </span>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </ListItem>
      ))}
    </OrderedList>
  );
};

export default Posts;
