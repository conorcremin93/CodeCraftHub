# Use Node.js LTS base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm ci

# Copy the rest of the source code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["node", "src/index.js"]
