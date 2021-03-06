# Food Delivery Stats
See how much money you are spending with food delivery services π€

```bash
$ node index.js -r -s ifood uber

-- Pedidos & Gastos X Ano --
βββββββββββ¬ββββββββββββββββ¬ββββββββββββββββ¬ββββββββββββββββ¬ββββββββββββββββ¬βββββββββββββββββ
β (index) β     2019      β     2020      β     2021      β     2022      β     total      β
βββββββββββΌββββββββββββββββΌββββββββββββββββΌββββββββββββββββΌββββββββββββββββΌβββββββββββββββββ€
β Pedidos β      74       β      80       β      183      β      112      β      449       β
β Gastos  β 'R$Β 2.204,38' β 'R$Β 3.328,73' β 'R$Β 7.914,78' β 'R$Β 4.530,16' β 'R$Β 17.978,07' β
βββββββββββ΄ββββββββββββββββ΄ββββββββββββββββ΄ββββββββββββββββ΄ββββββββββββββββ΄βββββββββββββββββ
-- Ano X MΓͺs (Gastos) --
βββββββββββββ¬ββββββββββββββ¬ββββββββββββββ¬ββββββββββββββ¬ββββββββββββββββ
β  (index)  β    2019     β    2020     β    2021     β     2022      β
βββββββββββββΌββββββββββββββΌββββββββββββββΌββββββββββββββΌββββββββββββββββ€
β  janeiro  β 'R$Β 16,94'  β 'R$Β 59,45'  β 'R$Β 354,88' β  'R$Β 546,06'  β
β fevereiro β 'R$Β 84,90'  β 'R$Β 199,54' β 'R$Β 622,72' β  'R$Β 773,76'  β
β   marΓ§o   β 'R$Β 253,85' β 'R$Β 146,50' β 'R$Β 811,02' β  'R$Β 826,22'  β
β   abril   β 'R$Β 319,30' β 'R$Β 79,65'  β 'R$Β 773,83' β 'R$Β 1.283,14' β
β   maio    β 'R$Β 166,54' β 'R$Β 116,35' β 'R$Β 325,98' β 'R$Β 1.100,99' β
β   junho   β 'R$Β 273,40' β 'R$Β 385,00' β 'R$Β 881,24' β               β
β   julho   β 'R$Β 74,40'  β 'R$Β 483,84' β 'R$Β 778,12' β               β
β  agosto   β 'R$Β 334,91' β 'R$Β 421,94' β 'R$Β 696,70' β               β
β setembro  β 'R$Β 214,17' β 'R$Β 473,79' β 'R$Β 682,05' β               β
β  outubro  β 'R$Β 48,35'  β 'R$Β 509,90' β 'R$Β 938,91' β               β
β novembro  β 'R$Β 320,66' β 'R$Β 261,54' β 'R$Β 377,82' β               β
β dezembro  β 'R$Β 96,98'  β 'R$Β 191,26' β 'R$Β 671,54' β               β
βββββββββββββ΄ββββββββββββββ΄ββββββββββββββ΄ββββββββββββββ΄ββββββββββββββββ
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
