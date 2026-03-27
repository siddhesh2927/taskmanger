# Build Stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./

# Install dependencies (use legacy-peer-deps if typical React 18 conflicts occur, though standard install is fine)
RUN npm install

COPY . .

# Build the React application
RUN npm run build

# Production Stage
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
