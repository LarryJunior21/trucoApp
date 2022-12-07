
# Truco!

This is a brazillian card game named truco.





## 🔗 Helpful links

 - [Rules and how to play](https://www.pagat.com/put/truco_br.html)
 - [About it](https://en.wikipedia.org/wiki/Truco)
## What was used?

**Front-end:** React Native

**Back-end:** Node, Express, Typescript



## 🛠 API Documentation

#### Draw cards

```http
  POST /draw
```

| Parameter   | Type       | Description                         |
| :---------- | :--------- | :---------------------------------- |
| `quantity`  | `number`   | **REQUIRED**. You can send a number of cards to randomically draw, up to 40 cards. | 

#### Get rules

```http
  GET /rules
```

| Description                                   |
| :------------------------------------------ |
| Returns the rules of the game |



## How to run the project

#### With npm

```bash
  cd backend
  npm install
  npm run dev
  
  cd ../app
  npm install
  npm run android or npm run ios (if you have mac)
```

#### With yarn

```bash
  cd backend
  yarn install
  yarn dev
  
  cd ../app
  yarn install
  yarn android or yarn ios (if you have mac)
```
    
## Authors

- [@Larry Junior](https://www.linkedin.com/in/larryjunior2121/)


