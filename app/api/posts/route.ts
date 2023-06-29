import { NextResponse } from 'next/server';
import { posts } from '@/app/api/posts/posts';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const query = searchParams.get('name');

  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter((post) =>
      post.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  return NextResponse.json(currentPosts);
}

export async function POST(request: Request) {
  const body = await request.json();

  console.log('body', body);

  return NextResponse.json({ body });
}
