# Set the base image to use for this Docker image
FROM node:14.16.0-alpine

# Set the working directory for the Docker image
WORKDIR /app

# Copy the package.json and package-lock.json files into the Docker image
COPY package*.json ./

# Install the dependencies in the Docker image
RUN npm install

# Copy the rest of the application files into the Docker image
COPY . .

# Set the port that the Docker image will use
EXPOSE 1337

# Start the Strapi server when the Docker image runs
CMD ["npm", "start"]
