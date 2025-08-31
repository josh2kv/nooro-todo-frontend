# Nooro Todo Frontend

A Next.js (App Router) frontend for the Todo app. Implements task list, create/edit forms, completion toggling, and delete with confirmation.

## Requirements

- Node.js 20+
- PNPM 9+

## Environment

- Backend API base URL is configurable with `NEXT_PUBLIC_API_URL`.
- Default (if unset): `http://localhost:3001`

To override, create `.env.local`:

```env
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

## Setup

1. Install dependencies:

```bash
pnpm install
```

1. Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## API Endpoints used

The frontend calls these endpoints on the backend:

- GET `/tasks` — List tasks
- POST `/tasks` — Create task
- GET `/tasks/:id` — Get task by id
- PUT `/tasks/:id` — Update task
- DELETE `/tasks/:id` — Delete task

Base URL is taken from `NEXT_PUBLIC_API_URL` or defaults to `http://localhost:3001`.

## Tech stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- TanStack Query for data fetching/caching
- Zod for validation
