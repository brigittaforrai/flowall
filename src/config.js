const isProd = process.env.NODE_ENV === 'production'
const server = isProd ? 'https://designhet2019.herokuapp.com/' : 'http://192.168.1.12:3001'

const config = [
  {
    name: "tempo",
    _name: "tempó",
    default: 0,
    min: 0,
    max: 1,
    step: 0.001,
    randomMin: 0.02,
    randomMax: 0.3,
    type: 'big',
    eng: "tempo"
  },
  {
    name: "rotatex",
    _name: "x forgatás",
    min: -90,
    max: 90,
    step: 1,
    randomMin: -90,
    randomMax: 90,
    type: 'big',
    eng: "rotation X"
  },
  {
    name: "rotatey",
    _name: "y forgatás",
    default: 0,
    min: -90,
    max: 90,
    step: 1,
    randomMin: -90,
    randomMax: 90,
    type: 'big',
    eng: "rotation Y"
  },
  {
    name: "rotatez",
    _name: "z forgatás",
    default: 0,
    min: -90,
    max: 90,
    step: 1,
    randomMin: -90,
    randomMax: 90,
    type: 'big',
    eng: "rotation Z"
  },
  {
    name: "xgap",
    _name: "pontsűrűség-x",
    min: 50,
    max: 500,
    step: 1,
    randomMin: 50,
    randomMax: 200,
    eng: "x gap"
  },
  {
    name: "zgap",
    _name: "pontsűrűség-y",
    min: 50,
    max: 500,
    step: 1,
    randomMin: 50,
    randomMax: 200,
    eng: "y gap"
  },
  {
    name: "nodesize",
    _name: "méret",
    min: 1,
    max: 100,
    step: 1,
    randomMin: 5,
    randomMax: 50,
    eng: "node size"
  },
  {
    name: "ampl",
    _name: "amplitúdó",
    min: 0,
    max: 200,
    step: 1,
    randomMin: 50,
    randomMax: 200,
    eng: "amplitude"
  },
  {
    name: "spacing",
    _name: "hullámhossz",
    min: 0,
    max: 100,
    step: 0.1,
    randomMin: 1,
    randomMax: 100,
    eng: "spacing"
  },
  {
    name: "period",
    _name: "periódus",
    min: 1,
    max: 5000,
    step: 1,
    randomMin: 1,
    randomMax: 1000,
    eng: "period"
  }
]

const RED = '#f9423a'

export {
  config,
  RED,
  server
}
