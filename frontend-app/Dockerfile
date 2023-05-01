# Base image
FROM node:16-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy application files
COPY . .

# Build Next.js application
RUN npm run build

# Set environment variables
ENV NODE_ENV production
ENV PORT 3000
ENV NEXT_PUBLIC_API_BASE_URL http://localhost:1337

# Expose port
EXPOSE 3000

# Start server
CMD ["npm", "start"]