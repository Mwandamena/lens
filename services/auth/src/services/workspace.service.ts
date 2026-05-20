import { db, Workspace } from "@social-lens/db"

export async function createWorkspace(
  userId: string,
  name: string
): Promise<Workspace> {
  const slug = slugify(name)

  return db.workspace.create({
    data: {
      name,
      slug,
      ownerId: userId,
      plan: "FREE",
      members: {
        create: {
          userId,
          role: "OWNER",
        },
      },
    },
  })
}

export async function getWorkspacesForUser(userId: string): Promise<Workspace[]> {
  return db.workspace.findMany({
    where: {
      members: { some: { userId } },
    },
    orderBy: { createdAt: "asc" },
  })
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}