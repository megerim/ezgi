// app/api/posts/route.ts
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

export async function getPosts(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'GET') {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    const posts = await prisma.post.findMany({
        include: {
            categories: true, 
        },
    });
    res.json(posts);
}

export async function createPost(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
    const { title, content, categories } = req.body;
    const slug = generateSlug(title); 

    try {
        const post = await prisma.post.create({
            data: {
                title,
                content,
                slug,
                categories: {
                    connect: categories.map((categoryId: number) => ({ id: categoryId })),
                },
            },
        });
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: 'Something went wrong' });
    }
}
