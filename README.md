
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

## Example Pictures (WIP)

<img width="531" alt="image" src="https://user-images.githubusercontent.com/56661158/206304252-0bf405e9-fec5-4d9b-b05b-a5b05abd609d.png">

<img width="531" alt="image" src="https://user-images.githubusercontent.com/56661158/206304409-be8dea2f-7517-480a-afca-01e08d99dd33.png">

<img width="379" alt="image" src="https://user-images.githubusercontent.com/56661158/206304476-02caa710-e07b-4d31-ac37-bd39efdf20b2.png">

<img width="380" alt="image" src="https://user-images.githubusercontent.com/56661158/206304519-2eae59d5-c3f9-43dc-8c5c-847c2e86735c.png">

