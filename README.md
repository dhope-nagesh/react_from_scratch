## Setup
#### Install dependencies
```
$ npm install
```

#### Run development server
```
$ npm run start
```

#### Create production build
```
$ npm run build
```

#### Docker build
```
$ docker build . -t react_from_scratch:1.0.0
$ docker run -it --rm -p 1337:80 react_from_scratch:1.0.0
```