FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Expose backend port
EXPOSE 1200

# Start server
CMD ["node", "src/server.js"]
