export default {
  tokens: {
    ifood: "<A-ACCESS-TOKEN-COOKIE-VALUE>",
    uberEats: "sid=<COOKIE-VALUE>",
    uber: {
      token: "sid=<COOKIE-VALUE>; csid=<COOKIE-VALUE>; jwt-session=<COOKIE-VALUE>;",
      xCsrfToken: "<X-CSRF-TOKEN-HEADER-VALUE>",
    },
  },
  dbSchema: {
    orders: {
      ifood: [],
      uber: [],
      uberEats: [],
    },
  }
}
