FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Create uploads directory
RUN mkdir -p uploads

EXPOSE 4000

# Run migrations, seed, then start server
CMD ["sh", "-c", "npx prisma db push --accept-data-loss && npx prisma db seed && node dist/index.js"]
