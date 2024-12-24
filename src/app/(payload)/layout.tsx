/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import config from '@payload-config'
import '@payloadcms/next/css'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'
import { importMap } from './admin/importMap.js'
import { Toaster } from '@/components/shadcn/toaster'
import './custom.css'

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = async ({ children }: Args) => {
  return (
    <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
      <NextTopLoader />
      {children}
    </RootLayout>
  )
}

export default Layout