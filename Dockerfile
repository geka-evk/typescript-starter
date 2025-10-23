ARG NODE_VERSION=lts-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /opt/app

COPY package*.json tsconfig.json tsup.config.ts ./
RUN npm ci

COPY src ./src
RUN npm run build

# Stage 2: Production
FROM node:${NODE_VERSION}

WORKDIR /opt/app

COPY package*.json ./
RUN npm ci --omit=dev && \
    npm cache clean --force

# Create a non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001
USER nodejs

## Copy of dist directory from builder
COPY --chown=nodejs --from=builder /opt/app/dist ./dist

ENV NODE_ENV=production

CMD ["node" , "./dist/index.js"]
