FROM node

# Setting an env variable
ENV NAME="AH"

# Making a directory name DemoApp in the root directory
RUN mkdir -p DemoApp

# Copy file from the current directory of the Dockerfile in the host system ---> root/DemoApp of the image
COPY . /DemoApp

# Final command to run the node code 
CMD ["node", "/DemoApp/index.js"]

# Note: we have not changed the WORKDIR so in any new container created, we will be operating from the root directory