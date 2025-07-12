# TypeScript Starter

A comprehensive TypeScript starter template with modern tooling, testing, and build configuration.

## Features

- **TypeScript**: Strict mode with enhanced type checking
- **Build**: Fast bundling with tsup (esbuild-based)
- **Testing**: Jest with coverage reporting
- **Code Quality**: ESLint + Prettier with pre-commit hooks
- **Git Hooks**: Husky for automated quality checks
- **Release Management**: Standard-version for automated releases

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run start:dev

# Build
npm run build

# Test
npm run test
npm run test:watch
npm run test:coverage

# Code Quality
npm run lint
npm run format
npm run type-check
```

## Project Structure

```
src/           # Source TypeScript files
test/          # Jest test files
dist/          # Build output (auto-generated)
```

## Development Workflow

1. **Development**: `npm run start:dev` - Run with ts-node
2. **Type Check**: `npm run type-check` - Validate TypeScript
3. **Test**: `npm run test:watch` - Run tests in watch mode
4. **Build**: `npm run build` - Type check + bundle
5. **Lint**: `npm run lint:fix` - Fix linting issues

## Release

```bash
npm run release      # Standard release
npm run snapshot     # Pre-release snapshot
```

## License

MIT