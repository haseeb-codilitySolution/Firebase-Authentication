# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
# WORKDIR /MY-APP

# Copy package.json and package-lock.json to the working directory
COPY . .
# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app for production
# RUN npm run build

# Use a lighter web server to serve the static files
# FROM nginx:alpine

# Copy the built React app from the previous step
# COPY --from=0 /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 3000

# Start the web server
CMD ["npm", "start"]
