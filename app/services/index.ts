export const getPostBySearch = async (params: string) => {
  console.log('params', params);
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${params}`
  );

  if (!post.ok) throw new Error('Error');

  return post.json();
};
