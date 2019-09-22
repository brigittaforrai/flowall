const config = [
  {
    name: "xgap",
    _name: "pontsűrűség-x",
    min: 20,
    max: 500,
    step: 1,
    randomMin: 40,
    randomMax: 200,
    value: 100
  },
  {
    name: "zgap",
    _name: "pontsűrűség-y",
    min: 20,
    max: 500,
    step: 1,
    randomMin: 40,
    randomMax: 200,
    value: 100
  },
  {
    name: "nodesize",
    _name: "méret",
    min: 2,
    max: 100,
    step: 1,
    randomMin: 5,
    randomMax: 50,
    value: 30
  },
  {
    name: "spacing",
    _name: "hullámhossz",
    min: 0,
    max: 100,
    step: 0.1,
    randomMin: 1,
    randomMax: 100,
    value: 50
  },
  {
    name: "tempo",
    _name: "tempó",
    default: 0,
    min: 0,
    max: 1,
    step: 0.001,
    randomMin: 0.02,
    randomMax: 0.3,
    value: 0.02
  },
  {
    name: "ampl",
    _name: "amplitúdó",
    min: 0,
    max: 200,
    step: 1,
    randomMin: 50,
    randomMax: 200,
    value: 100
  },
  {
    name: "period",
    _name: "periódus",
    min: 1,
    max: 5000,
    step: 1,
    randomMin: 1,
    randomMax: 1000,
    value: 1000
  }
]

const RED = '#f9423a'

export {
  config,
  RED
}
