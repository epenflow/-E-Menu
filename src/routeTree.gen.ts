/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PrivateImport } from './routes/_private'
import { Route as IndexImport } from './routes/index'
import { Route as PrivateDashboardIndexImport } from './routes/_private/dashboard/index'
import { Route as PrivateDashboardUserImport } from './routes/_private/dashboard/user'

// Create/Update Routes

const PrivateRoute = PrivateImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PrivateDashboardIndexRoute = PrivateDashboardIndexImport.update({
  id: '/dashboard/',
  path: '/dashboard/',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivateDashboardUserRoute = PrivateDashboardUserImport.update({
  id: '/dashboard/user',
  path: '/dashboard/user',
  getParentRoute: () => PrivateRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_private': {
      id: '/_private'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/_private/dashboard/user': {
      id: '/_private/dashboard/user'
      path: '/dashboard/user'
      fullPath: '/dashboard/user'
      preLoaderRoute: typeof PrivateDashboardUserImport
      parentRoute: typeof PrivateImport
    }
    '/_private/dashboard/': {
      id: '/_private/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof PrivateDashboardIndexImport
      parentRoute: typeof PrivateImport
    }
  }
}

// Create and export the route tree

interface PrivateRouteChildren {
  PrivateDashboardUserRoute: typeof PrivateDashboardUserRoute
  PrivateDashboardIndexRoute: typeof PrivateDashboardIndexRoute
}

const PrivateRouteChildren: PrivateRouteChildren = {
  PrivateDashboardUserRoute: PrivateDashboardUserRoute,
  PrivateDashboardIndexRoute: PrivateDashboardIndexRoute,
}

const PrivateRouteWithChildren =
  PrivateRoute._addFileChildren(PrivateRouteChildren)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof PrivateRouteWithChildren
  '/dashboard/user': typeof PrivateDashboardUserRoute
  '/dashboard': typeof PrivateDashboardIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof PrivateRouteWithChildren
  '/dashboard/user': typeof PrivateDashboardUserRoute
  '/dashboard': typeof PrivateDashboardIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_private': typeof PrivateRouteWithChildren
  '/_private/dashboard/user': typeof PrivateDashboardUserRoute
  '/_private/dashboard/': typeof PrivateDashboardIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '' | '/dashboard/user' | '/dashboard'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '' | '/dashboard/user' | '/dashboard'
  id:
    | '__root__'
    | '/'
    | '/_private'
    | '/_private/dashboard/user'
    | '/_private/dashboard/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  PrivateRoute: typeof PrivateRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  PrivateRoute: PrivateRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_private"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_private": {
      "filePath": "_private.tsx",
      "children": [
        "/_private/dashboard/user",
        "/_private/dashboard/"
      ]
    },
    "/_private/dashboard/user": {
      "filePath": "_private/dashboard/user.tsx",
      "parent": "/_private"
    },
    "/_private/dashboard/": {
      "filePath": "_private/dashboard/index.tsx",
      "parent": "/_private"
    }
  }
}
ROUTE_MANIFEST_END */
