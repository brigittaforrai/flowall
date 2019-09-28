const isProd = process.env.NODE_ENV === 'production'
const server = isProd ? 'https://designhet2019.herokuapp.com/' : 'http://192.168.1.12:3001'

const config = [
  {
    name: "xgap",
    _name: "pontsűrűség-x",
    min: 50,
    max: 300,
    step: 1,
    randomMin: 50,
    randomMax: 200
  },
  {
    name: "zgap",
    _name: "pontsűrűség-y",
    min: 50,
    max: 300,
    step: 1,
    randomMin: 50,
    randomMax: 200
  },
  {
    name: "nodesize",
    _name: "méret",
    min: 2,
    max: 100,
    step: 1,
    randomMin: 5,
    randomMax: 50
  },
  {
    name: "spacing",
    _name: "hullámhossz",
    min: 0,
    max: 100,
    step: 0.1,
    randomMin: 1,
    randomMax: 100
  },
  {
    name: "tempo",
    _name: "tempó",
    default: 0,
    min: 0,
    max: 1,
    step: 0.001,
    randomMin: 0.02,
    randomMax: 0.3
  },
  {
    name: "ampl",
    _name: "amplitúdó",
    min: 0,
    max: 200,
    step: 1,
    randomMin: 50,
    randomMax: 200
  },
  {
    name: "period",
    _name: "periódus",
    min: 1,
    max: 5000,
    step: 1,
    randomMin: 1,
    randomMax: 1000
  },
  {
    name: "rotatex",
    _name: "x foratas",
    min: -90,
    max: 90,
    step: 1,
    randomMin: -90,
    randomMax: 90
  },
  {
    name: "rotatey",
    _name: "y foratas",
    default: 0,
    min: -90,
    max: 90,
    step: 1,
    randomMin: -90,
    randomMax: 90
  },
  {
    name: "rotatez",
    _name: "z foratas",
    default: 0,
    min: -90,
    max: 90,
    step: 1,
    randomMin: -90,
    randomMax: 90
  }
]

const RED = '#f9423a'

export {
  config,
  RED,
  server
}
