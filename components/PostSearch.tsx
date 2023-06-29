'use client';

import React, { useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import useSWR from 'swr';
import { getPostsBySearch } from '@/app/services';

const PostSearch = () => {
  const [input, setInput] = useState('');
  const { mutate } = useSWR('posts');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await getPostsBySearch(input);
    mutate(posts);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value);

  return (
    <>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel>Search</FormLabel>
          <Input type="text" value={input} onChange={handleInputChange} />
          <Button colorScheme="teal" variant="outline" type="submit">
            Submit
          </Button>
        </FormControl>
      </form>
    </>
  );
};

export default PostSearch;
