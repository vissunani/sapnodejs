#! /bin/bash

IMAGE_NAME=node

# run container
run () {
    docker run --name ${IMAGE_NAME} -d -p 3000:3000 ${IMAGE_NAME}
}

# stop and remove container
stop_rm () {
    docker stop ${IMAGE_NAME}
    docker rm ${IMAGE_NAME}
}

# build new image for the latest build
docker build -t ${IMAGE_NAME} .

# check if the production container is not running
if [ ! "$(docker ps -q -f name=${IMAGE_NAME})" ];then
    # cehck if the container is in docker ps -a
    if [ "$(docker ps -aq -f status=exited -f name=${IMAGE_NAME})" ];then
        docker rm ${IMAGE_NAME}
    fi
    run
else
    stop_rm
    run
fi

# remove <none>:<none> image in docker images
if [ "$(docker images -f dangling=true -q)" ];then
    echo "Clear dangling images"
    docker rmi $(docker images -f "dangling=true" -q)
fi

