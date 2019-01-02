# Use a lighter version of Node as a parent image
FROM node:alpine

# Set the working directory to /api
WORKDIR /back

# copy package.json into the container at /api
COPY package*.json /back/

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
COPY . /back/

# Make port 80 available to the world outside this container
EXPOSE 8000

# Run the app when the container launches
CMD ["npm", "start"]