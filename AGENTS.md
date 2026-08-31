# Antigravity Agent Rules & Workflow Constraints

## ⚠️ STRICT RULE: Git Commits & Push Policy

**NEVER CREATE A GIT COMMIT OR PUSH TO REMOTE UNLESS THE USER EXPLICITLY INSTRUCTS YOU TO DO SO.**

1. Do NOT run `git commit` automatically after completing a task.
2. Do NOT run `git push` automatically.
3. Keep all changes in the local working tree for the user to review, test, and approve.
4. Only perform `git commit` / `git push` when the user explicitly provides a command or message asking to commit.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
