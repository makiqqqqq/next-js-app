export const getAllPosts = async () => {
  const response = await fetch('/api/posts', {
    next: {
      revalidate: 60
    }
  });
  if (!response.ok) throw new Error('Unable to fetch posts!');

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?name=${search}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
