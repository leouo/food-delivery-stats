# Food Delivery Stats
See how much money you are spending with food delivery services 🤑

## System requirements
You must have NodeJS v14 or higher

## Install
Clone this repo and inside the project directory simply run:
```sh
npm i
```

## Usage
Set your services access tokens inside the `config.js` file:
```js
tokens: {
  ifood: "<A-ACCESS-TOKEN-COOKIE-VALUE>",
  uberEats: "sid=<COOKIE-VALUE>",
}
```
> See how to get your service token in HOW TO GET YOUR TOKEN section

Get your order history data:
```sh
node index.js --fetch-data
# short notation
node index.js -f
```

Then display your stats reports:
```sh
node index.js --display-reports
# short notation
node index.js -r
```

You can also specify one or more delivery service to fetch or display data:
```sh
# displaying stats for ifood only
node index.js -r -s ifood
# fetching data for uberEats only
node index.js -f -s uberEats
```

## How to get your token
> Run the following code inside console tab of devtools with your service page orders open

__Ifood__:
```js
copy(await cookieStore.get('aAccessToken').then(({ value }) => value))
```

__uberEats__:

First with devtools open, go to Application (tab) > Storage > Cookies and select `https://www.ubereats.com`. Uncheck `HttpOnly` option from `sid` cookie and run inside the console tab: 
```js
copy(await cookieStore.get('sid').then(({ value }) => value))
```
