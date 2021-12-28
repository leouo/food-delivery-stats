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
  ifood: "<YOUR-JWT-TOKWN>",
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

## How to get your token
> Run the following code inside console of devtools with your service page orders open.

__Ifood__:
```js
copy(await cookieStore.get('aAccessToken').then(({ value }) => value))
```
