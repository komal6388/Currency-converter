




let a = {
  USD: 1, AED: 3.67, AFN: 71, ALL: 92.62, AMD: 388.28, AED: 3.67,
  AFN: 71,
  ALL: 92.62,
  AMD: 388.28,
  ANG: 1.79,
  AOA: 880.01,
  ARS: 920.5,
  AUD: 1.48,
  AWG: 1.79,
  AZN: 1.7,
  BAM: 1.8,
  BBD: 2,
  BDT: 117.52,
  BGN: 1.8,
  BHD: 0.376,
  BIF: 2876.97,
  BMD: 1,
  BND: 1.34,
  BOB: 6.92,
  BRL: 5.41,
  BSD: 1,
  BTN: 83.54,
  BWP: 13.51,
  BYN: 3.26,
  BZD: 2,
  CAD: 1.36,
  CDF: 2837.24,
  CHF: 0.897,
  CLP: 911.35,
  CNY: 7.27,
  COP: 3983.51,
  CRC: 527.35,
  CUP: 24,
  CVE: 101.51,
  CZK: 23.35,
  DJF: 177.72,
  DKK: 6.87,
  DOP: 59.03,
  DZD: 134.32,
  EGP: 47.99,
  ERN: 15,
  ETB: 57.84,
  EUR: 0.921,
  FJD: 2.26,
  FKP: 0.775,
  FOK: 6.87,
  GBP: 0.775,
  GEL: 2.72,
  GGP: 0.775,
  GHS: 15.46,
  GIP: 0.775,
  GMD: 65.72,
  GNF: 8643.09,
  GTQ: 7.76,
  GYD: 209.3,
  HKD: 7.81,
  HNL: 24.76,
  HRK: 6.94,
  HTG: 132.12,
  HUF: 362.56,
  IDR: 16174.65,
  ILS: 3.64,
  IMP: 0.775,
  INR: 83.54,
  IQD: 1309.29,
  IRR: 42061.7,
  ISK: 137.46,
  JEP: 0.775,
  JMD: 156.83,
  JOD: 0.709,
  JPY: 159.32,
  KES: 128.64,
  KGS: 86.17,
  KHR: 4126.2,
  KID: 1.48,
  KMF: 452.9,
  KRW: 1373.78,
  KWD: 0.306,
  KYD: 0.833,
  KZT: 474.77,
  LAK: 22014.32,
  LBP: 89500,
  LKR: 302.81,
  LRD: 194.64,
  LSL: 18,
  LYD: 4.86,
  MAD: 9.83,
  MDL: 17.77,
  MGA: 4497.92,
  MKD: 56.91,
  MNT: 3427.2,
  MOP: 8.04,
  MRU: 39.68,
  MUR: 46.75,
  MVR: 15.44,
  MWK: 1743.31,
  MXN: 17.8,
  MYR: 4.69,
  MZN: 63.91,
  NAD: 18,
  NGN: 1537.42,
  NIO: 36.8,
  NOK: 10.72,
  NPR: 133.66,
  NZD: 1.64,
  OMR: 0.384,
  PAB: 1,
  PEN: 3.78,
  PGK: 3.88,
  PHP: 58.23,
  PKR: 278.82,
  PLN: 3.92,
  PYG: 7512.05,
  QAR: 3.64,
  RON: 4.58,
  RSD: 107.78,
  RUB: 87.31,
  RWF: 1314.69,
  SAR: 3.75,
  SBD: 8.24,
  SCR: 13.8,
  SDG: 512.23,
  SEK: 10.5,
  SGD: 1.34,
  SHP: 0.775,
  SLE: 23.5,
  SLL: 23504.72,
  SOS: 572.08,
  SRD: 30.13,
  SSP: 1970.32,
  STN: 22.55,
  SYP: 12913.06,
  SZL: 18,
  THB: 36.18,
  TJS: 10.79,
  TMT: 3.5,
  TND: 3.13,
  TOP: 2.33,
  TRY: 32.94,
  TTD: 6.76,
  TVD: 1.48,
  TWD: 32.43,
  TZS: 2655.15,
  UAH: 40.87,
  UGX: 3700.17,
  USD: 1,
  UYU: 40.01,
  UZS: 12671.9,
  VES: 36.53,
  VND: 25467.08,
  VUV: 119.5,
  WST: 2.72,
  XAF: 603.87,
  XCD: 2.7,
  XDR: 0.756,
  XOF: 603.87,
  XPF: 109.86,
  YER: 250.31,
  ZAR: 18,
  ZMW: 25.36,
  ZWL: 13.74,

}

let opt1 = document.getElementById("fromex")
let opt2 = document.getElementById("toex")
for (let i in a) {
  let option = document.createElement("option")
  option.innerText = i
  let option1 = document.createElement("option")
  option1.innerText = i
  opt1.appendChild(option)
  opt2.appendChild(option1)
}
if (opt2.value == 'USD') {
  opt2.value = 'INR'
}
let ch = () => {
  let img = document.getElementById("img1")
  let img1 = document.getElementById("img2")
  let opt1 = document.getElementById("fromex")
  let opt2 = document.getElementById("toex")
  let value = opt1.value
  let v = value.slice(0, 2)
  img.src = `https://flagsapi.com/${v}/flat/64.png`
  let value1 = opt2.value
  let sl = value1.slice(0, 2)
  img1.src = `https://flagsapi.com/${sl}/flat/64.png`

}
let f = async () => {
  let inp = document.querySelector('.input')
  inp.value = inp.value == "" || inp.value == 0 ? 1 : inp.value
  let opt1 = document.getElementById("fromex")
  let opt2 = document.getElementById("toex")

  let h3 = document.querySelector(".h3")
  h3.innerText = 'Fetching exchange rate....'
  let response = await fetch(`https://api.exchangerate-api.com/v4/latest/${opt1.value}`)

  let data = await response.json()
  console.log(data)
  let rate = data.rates[opt2.value]
  let final = rate * inp.value
  h3.innerText = `${inp.value}${opt1.value} = ${Math.round(final*100)/100} ${opt2.value}`




}


let s = () => {
  let img = document.getElementById("img1")
  let img1 = document.getElementById("img2")
  let opt1 = document.getElementById("fromex")
  let opt2 = document.getElementById("toex")
  let temp;
  temp = opt1.value
  opt1.value = opt2.value
  opt2.value = temp
  let v = opt1.value
  let v1 = v.slice(0, 2)
  let v2 = opt2.value
  v3 = v2.slice(0, 2)
  img.src = `https://flagsapi.com/${v1}/flat/64.png`
  img1.src = `https://flagsapi.com/${v3}/flat/64.png`

}
