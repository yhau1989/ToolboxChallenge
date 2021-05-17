# TolboxChallenge
FULL STACK DEVELOPER (NODEJS - REACT), Code Challenge

For test this app with docker please, clone this repo and execute the next steps

## 1. Docker Network

create docker network (execute from console)
```dockerfile
docker network create --driver bridge toolbox-network
```


## 2. Backend 

access into folder backEnd from console and run this next lines

<!-- buildi image for wep-api -->
```dockerfile
docker build . -t toolbox/node-web-app
```

review the correct process

```dockerfile
docker images
```

![](2021-05-17-04-11-56.png)

<!-- run image container for wep-api -->
```dockerfile
docker run --name toolbox-api --network toolbox-network -p 3001:3001 -d toolbox/node-web-app 
```


review the correct process

```dockerfile
docker ps
```

![](2021-05-17-04-16-04.png)


test api from url browser

![](2021-05-17-04-27-33.png)



## 3. Frontend

access into folder backEnd from console and run this next lines

<!-- buildi image for wep-app -->
```dockerfile
docker build . -t toolbox/react-app
```
![](2021-05-17-04-22-30.png)


<!-- run image container for wep-app -->
```dockerfile
docker run --name toolbox-react_app --network toolbox-network -p 3000:80 -d toolbox/react-app 
```

![](2021-05-17-04-24-38.png)

test app from browser

![](2021-05-17-04-28-29.png)