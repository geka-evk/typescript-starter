# TypeScript Starter

A comprehensive TypeScript starter template with modern tooling, testing, and build configuration.

## Features

✨ **Modern TypeScript Configuration**
- Strict type checking with `noUncheckedIndexedAccess`
- Path mapping support (`#src/*` aliases)
- ES2022 target with CommonJS output
- Source maps and declaration files

🏗️ **Build System**
- [tsup](https://github.com/egoist/tsup) for fast builds
- TypeScript compilation with type checking
- Development server with ts-node

🧪 **Testing**
- [Jest](https://jestjs.io/) with ts-jest preset
- Watch mode for development
- Coverage reporting
- Global test setup configuration

📏 **Code Quality**
- [ESLint](https://eslint.org/) with TypeScript support
- [Prettier](https://prettier.io/) code formatting
- Pre-commit hooks with [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged)
- Conventional commits with [Commitlint](https://commitlint.js.org/)

🔒 **Security & Maintenance**
- Security auditing with [audit-ci](https://github.com/IBM/audit-ci)
- Dependency updates with [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
- Automated releases with [standard-version](https://github.com/conventional-changelog/standard-version)

## Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

```bash
git clone <repository-url>
cd typescript-starter
npm install
```

### Development

```bash
# Start development server
npm run start:dev

# Run tests in watch mode
npm run test:watch

# Build the project
npm run build
```

## Scripts

### Build & Run
- `npm start` - Run the built application from dist/
- `npm run start:dev` - Run development server with ts-node
- `npm run build` - Build project using tsup (generates CommonJS output with sourcemaps)

### Testing
- `npm run test` - Run Jest tests
- `npm run test:watch` - Run Jest in watch mode for development
- `npm run test:coverage` - Run tests with coverage report

### Code Quality
- `npm run lint` - Run ESLint on source and test files
- `npm run lint:fix` - Fix ESLint issues automatically
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking without emitting files

### Maintenance
- `npm run audit:check` - Check for security vulnerabilities using audit-ci
- `npm run dep:check` - Check for outdated dependencies
- `npm run dep:update` - Update dependencies to latest versions
- `npm run release` - Create a release using standard-version
- `npm run snapshot` - Create a snapshot prerelease

## Project Structure

```
typescript-starter/
├── src/                    # Source code
│   └── index.ts           # Main entry point
├── test/                  # Test files
│   ├── setup.ts          # Global test setup
│   └── index.test.ts     # Example test
├── dist/                  # Built output (generated)
├── .husky/               # Git hooks
├── CLAUDE.md             # Claude Code instructions
├── audit-ci.jsonc        # Security audit configuration
├── commitlint.config.js  # Commit message linting
├── eslint.config.js      # ESLint configuration
├── jest.config.js        # Jest testing configuration
├── tsconfig.json         # TypeScript configuration
├── tsup.config.ts        # Build configuration
└── package.json          # Project dependencies and scripts
```

## Configuration

### TypeScript

The project uses strict TypeScript configuration with enhanced checking:

- **Path Mapping**: Use `#src/*` aliases for clean imports
- **Strict Mode**: Enhanced type checking including `noUncheckedIndexedAccess`
- **Target**: ES2022 with source maps and declarations enabled

### Build

Currently builds CommonJS only. ESM and type definitions can be enabled by modifying `tsup.config.ts`.

### Testing

Jest is configured with:
- ts-jest preset for TypeScript support
- Node environment
- Path alias support (`#src/` and `#test/`)
- Coverage collection from all `src/` files

### Git Hooks

**Pre-commit hooks** automatically:
- Run ESLint with auto-fix on staged files
- Format code with Prettier on staged files
- Validate commit messages using conventional commits

**Pre-push hooks** automatically:
- Run full ESLint checks on all source and test files
- Execute complete Jest test suite
- Check for outdated dependencies
- Perform security audit checks

## Development Workflow

1. **Make Changes**: Edit files in `src/` directory
2. **Test**: Run `npm run test:watch` for continuous testing
3. **Lint**: Code is automatically linted on save and commit
4. **Build**: Run `npm run build` to verify production build
5. **Commit**: Use conventional commit messages (enforced by commitlint)

## Contributing

1. Install dependencies: `npm install`
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Make your changes and add tests
4. Ensure all checks pass: `npm run lint && npm run test && npm run build`
5. Commit using conventional commits
6. Push and create a pull request

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Eugen Klymniuk

---

Generated with ❤️ using TypeScript and modern tooling.