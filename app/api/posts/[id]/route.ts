// app/api/posts/[id]/route.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

function generateSlug(title: string): string {
    return title
      .toLowerCase()
      .replace(/[\s_]+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/^-+|-+$/g, '');
}

export async function getPostById(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const postId = parseInt(req.query.id as string);
  try {
    const post = await prisma.post.findUnique({
      where: { id: postId },
      include: { categories: true },
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}

export async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const postId = parseInt(req.query.id as string);
  const { title, content, categories } = req.body;
  const slug = title ? generateSlug(title) : undefined;
  try {
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        content,
        ...(slug && { slug }),
        categories: {
          set: [], // Disconnect all existing categories
          connect: categories.map((categoryId: number) => ({ id: categoryId })),
        },
      },
    });
    res.json(updatedPost);
  } catch (error) {
    res.status(400).json({ message: 'Something went wrong' });
  }
}

export async function deletePost(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') {
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  const postId = parseInt(req.query.id as string);
  try {
    await prisma.post.delete({
      where: { id: postId },
    });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
}
