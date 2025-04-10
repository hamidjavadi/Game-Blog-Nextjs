# syntax=docker/dockerfile:1
ARG NODE_VERSION=20.13.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /app

# Expose the port that the application listens on.
EXPOSE 3000

# Copy all files into the image
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Run the application
CMD yarn dev