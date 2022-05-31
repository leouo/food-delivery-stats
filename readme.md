# Food Delivery Stats
See how much money you are spending with food delivery services 🤑

```bash
$ node index.js -r -s ifood uber

-- Pedidos & Gastos X Ano --
┌─────────┬───────────────┬───────────────┬───────────────┬───────────────┬────────────────┐
│ (index) │     2019      │     2020      │     2021      │     2022      │     total      │
├─────────┼───────────────┼───────────────┼───────────────┼───────────────┼────────────────┤
│ Pedidos │      74       │      80       │      183      │      112      │      449       │
│ Gastos  │ 'R$ 2.204,38' │ 'R$ 3.328,73' │ 'R$ 7.914,78' │ 'R$ 4.530,16' │ 'R$ 17.978,07' │
└─────────┴───────────────┴───────────────┴───────────────┴───────────────┴────────────────┘
-- Ano X Mês (Gastos) --
┌───────────┬─────────────┬─────────────┬─────────────┬───────────────┐
│  (index)  │    2019     │    2020     │    2021     │     2022      │
├───────────┼─────────────┼─────────────┼─────────────┼───────────────┤
│  janeiro  │ 'R$ 16,94'  │ 'R$ 59,45'  │ 'R$ 354,88' │  'R$ 546,06'  │
│ fevereiro │ 'R$ 84,90'  │ 'R$ 199,54' │ 'R$ 622,72' │  'R$ 773,76'  │
│   março   │ 'R$ 253,85' │ 'R$ 146,50' │ 'R$ 811,02' │  'R$ 826,22'  │
│   abril   │ 'R$ 319,30' │ 'R$ 79,65'  │ 'R$ 773,83' │ 'R$ 1.283,14' │
│   maio    │ 'R$ 166,54' │ 'R$ 116,35' │ 'R$ 325,98' │ 'R$ 1.100,99' │
│   junho   │ 'R$ 273,40' │ 'R$ 385,00' │ 'R$ 881,24' │               │
│   julho   │ 'R$ 74,40'  │ 'R$ 483,84' │ 'R$ 778,12' │               │
│  agosto   │ 'R$ 334,91' │ 'R$ 421,94' │ 'R$ 696,70' │               │
│ setembro  │ 'R$ 214,17' │ 'R$ 473,79' │ 'R$ 682,05' │               │
│  outubro  │ 'R$ 48,35'  │ 'R$ 509,90' │ 'R$ 938,91' │               │
│ novembro  │ 'R$ 320,66' │ 'R$ 261,54' │ 'R$ 377,82' │               │
│ dezembro  │ 'R$ 96,98'  │ 'R$ 191,26' │ 'R$ 671,54' │               │
└───────────┴─────────────┴─────────────┴─────────────┴───────────────┘
```

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
# fetching data for ifood and uberEats only
node index.js -f -s ifood uberEats
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
