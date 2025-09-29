import { db } from 'api/src/lib/db'

// Manually apply seeds via the `yarn rw prisma db seed` command.
//
// Seeds automatically run the first time you run the `yarn rw prisma migrate dev`
// command and every time you run the `yarn rw prisma migrate reset` command.
//
// See https://redwoodjs.com/docs/database-seeds for more info

export default async () => {
  try {
    await db.post.createMany({
      data: [
        { title: 'First Post', body: 'Hello world from Redwood!' },
        { title: 'Second Post', body: 'This is my WokeMindVirus blog.' },
      ],
    })

    console.info(
      '\n  No seed data, skipping. See scripts/seed.js to start seeding your database!\n'
    )
  } catch (error) {
    console.error(error)
  }
}
