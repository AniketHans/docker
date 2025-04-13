# Docker Learnings

### Docker

1. Docker is a platform which helps us build containers.
2. Container
   1. Container is a single unit where we have packaged our application along with its dependencies
   2. Containers run irrespective of the operating system of the machine
3. Container Properties:
   1. Portable
      1. We share the docker image of our application and that image can be used to build the docker container.
   2. Light Weight
      1. Containers have very less overhead which means it is simple to create the containers, to have multiple containers on a single machine as well as deleting the containers.
      2. The docker container size is smaller to that of a VM.
   3. Seperate env
      1. Containers have their seperate environments irrespective of the host machine.
4. Docker image
   1. Docker image is an executable file.
   2. This file contains instructions to build the container.
   3. The relation between docker image and docker container is similar to that of class and object.
   4. A single docker image can be used to create multiple containers.
   5. We have tags associated with an image. The tags are generally the versions of the image.
5. `docker run -it ubuntu`
   1. Here, it means interactive mode. It means we will run the ubuntu container as well as go inside of it. It means we will be able to get into the container of the ubuntu.
   2. ubuntu is the docker image name that we want the container to be created of.
6. Docker Hub
   1. Docker Hub is the collection of docker images

### Docker Commands

1. `docker pull <image-name>`
   1. If the image does not exist on our local, then it will be pulled from docker hub
   2. By default, the latest version of the image is pulled from the docker hub.
   3. `docker pull <image>:version`
      1. Here, version represents tag associated with the image.
      2. Suppose, 8.0 is the tag associated with the mysql image, `docker pull mysql:8.0`
2. `docker images`
   1. This command is used to list all the docker images that we have in our system
3. `docker run <image-name>`
   1. This command is used to build a container from an image.
   2. The docker gives random names to the containers when run until explicitly specified.
   3. The containers also have a unique id associated with them.
   4. It always create a new container from the image.
4. `docker run -it <image-name>`
   1. This command is used to run the docker container in an interactive mode.
   2. Basically, we will be able to access the ternimal of the container.
5. `docker ps -a`
   1. This gives a list of all the containers on our machine.
   2. `-a` helps in getting all the containers even the exited ones as well.
   3. `docker ps` can be used to output all the running containers on our machine.
6. `docker start <container name/id`>
   1. It is used to restart any existing container.
7. `docker stop <container name/id>`
   1. It is used to stop any existing running container.
8. `docker rmi <image-name/id>`
   1. It is used to remove any image from local.
   2. To delete the image, we need to delete all the containers (running/exited) that we created from it.
9. `docker rm <container name/id>`
   1. It is used to remove any container
10. `docker run -d <image-name>`
    1. Here, -d represents detach mode.
    2. It means to run a container in background.
    3. By default, all containers are run in attach mode.
11. `docker run -e env1=value1 -d <image-name>:tag`
    1. -e is used to define some env variables in a container.
12. `docker run --name <custom-name> -d <image>`
    1. This can be used to give a custom name to the container built from the image.
