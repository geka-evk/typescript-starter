# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript project named "typescript-starter" - a comprehensive TypeScript starter template with modern tooling.
The project includes build tools, testing, linting, formatting, and CI/CD configurations.

## Development Commands

**Build & Run:**
- `npm run build` - Build project using tsup (generates CommonJS output with sourcemaps)
- `npm start` - Run the built application from dist/
- `npm run start:dev` - Run development server with ts-node

**Testing:**
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode for development
- `npm run test:coverage` - Run tests with coverage report

**Code Quality:**
- `npm run lint` - Run ESLint on source and test files
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking without emitting files

**Maintenance:**
- `npm run audit:check` - Check for security vulnerabilities using audit-ci
- `npm run dep:check` - Check for outdated dependencies
- `npm run dep:update` - Update dependencies to latest versions
- `npm run release` - Create a release using standard-version
- `npm run snapshot` - Create a snapshot prerelease

## Project Architecture

**Module System:**
- Uses path mapping with `#src/*` aliases for clean imports (configured in tsconfig.json:5)
- Jest configured with matching module name mapping for tests (jest.config.js:6-9)

**Build Configuration:**
- **tsup**: Currently builds CommonJS only (tsup.config.ts:6) - ESM and type definitions are commented out
- **TypeScript**: Strict mode with enhanced checking including `noUncheckedIndexedAccess` (tsconfig.json:10)
- **Target**: ES2022 with source maps and declarations enabled

**Testing Setup:**
- Jest with ts-jest preset and Node environment
- Setup file at `test/setup.ts` for global test configuration
- Coverage collection from all `src/` files with appropriate exclusions
- Supports both `#src/` and `#test/` path aliases

**Quality Tooling:**
- Husky git hooks for commit validation (.husky/ directory)
- lint-staged for pre-commit file processing (package.json:53-62)
- Commitlint with conventional commits
- Prettier and ESLint integration with auto-fixing

**Package Structure:**
- Main entry: `dist/index.js` (CommonJS)
- Module entry: `dist/index.mjs` (currently not built)
- Types: `dist/index.d.ts` (currently not generated)
- Published files limited to `dist/` only