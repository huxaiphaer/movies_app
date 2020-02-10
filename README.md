[![Build Status](https://travis-ci.com/huxaiphaer/alpaca.svg?token=7t2CkfpVwz422XzizRaG&branch=master)](https://travis-ci.com/huxaiphaer/alpaca)

# Movies App

This a web application which is capable of searching and showing more details of a Movie.

#### Functionalities of the Application.

- Search a Movie.
- Get to know the details of the movie.


## Getting Started

This is how you can make this project run on your local machine.

### Installation

* You will need to have yarn installed, the best way to install yarn is by visiting this site. [Install Yarn](https://yarnpkg.com/lang/en/)

* Then, Clone this repository by running the command:

```
https://github.com/huxaiphaer/alpaca.git

```
* After successfully cloning the repo, then run this command `cd alpaca` to enter the root directory of the project.

* Then install the project dependencies by running `yarn` & `yarn install`.

* After that, you will need to create a file `.env.development` in the root folder of the project.
After creating it, then paste the following :

```$xslt

REACT_APP_APIKey=f3a05026119d09f84c9aaef927a18ac2
REACT_APP_LANGUAGE=en-US
REACT_APP_URL=https://api.themoviedb.org
REACT_APP_URL_IMAGE=https://image.tmdb.org
```

#### Starting the app.

* To start the app locally run the following command:

```
docker-compose up -d --build

```

After the build finishing,  you can then route in your browser : http://localhost:3001/


Viola, then you are good to search Movies :-)

#### Testing / Running tests.

```
yarn test

```

#### Running tests with coverage.

```
yarn test --coverage --watchAll=false 

```

## Languages/Frameworks/Libraries & tools Used.

* Reactjs.
* ES6.
* Code Climate.
* Bootstrap
* Travis.
* Redux.
* Docker.

## Author.

* Lutaaya Huzaifah Idris.