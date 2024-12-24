import { postgresAdapter } from '@payloadcms/db-postgres'
import { resendAdapter } from '@payloadcms/email-resend'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import path from 'path'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Customers } from './collections/customers'
import { companyEmail, companyName } from './app-config'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Customers],
  editor: lexicalEditor(),
  email: resendAdapter({
    defaultFromAddress: companyEmail,
    defaultFromName: companyName,
    apiKey: process.env.NEXT_RESEND_API_KEY || '',
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    uploadthingStorage({
      collections: {
        media: true,
      },
      options: {
        token: process.env.UPLOADTHING_TOKEN,
        acl: 'public-read',
      },
    }),
  ],
})
