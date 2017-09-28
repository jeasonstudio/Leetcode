const fs = require('fs')
const path = require('path')
const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
const MAXNAMECOUNT = 20

const input = fs.readFileSync(path.join(__dirname, './A-small-practice.in'), { encoding: 'utf-8' }).split('\n')
let countries = parseInt(input.shift())
let countryKey = 1
const countryMay = {}

/**
 * @param {String[]} params
 * @returns {Number}
 */
function getSize(params) {
  return new Set(params.split('')).size
}

/**
 * @param {String[]} kingsArray kings that may become the final king
 * @return {String} final king
 */
function earliestInAlphabetical(kingsArray) {
  let res = [kingsArray.shift()]
  for (var key = 0; key < ALPHABET.length; key++) {
    for (var index = 0; index < kingsArray.length; index++) {
      const thisKing = kingsArray[index]
      const thisKey = ALPHABET[key]
      if (
        thisKing.indexOf(thisKey) < 0
        || thisKing.indexOf(thisKey) > res[0].indexOf(thisKey)
      ) {
        continue
      } else if (thisKing.indexOf(thisKey) < res[0].indexOf(thisKey)) {
        res = [thisKing]
      } else if (thisKing.indexOf(thisKey) === res[0].indexOf(thisKey)) {
        res.push(thisKing)
      }
    }
    if (res.length === 1) {
      return res[0]
    }
  }
}

/**
 * @param {String[]} peoples Peoples array of this country
 * @return {String} the country's king name
 */
function judgeKing(peoples) {
  let thisMaxPeoples = ['']
  peoples.map((item, index) => {
    const thisPeople = getSize(item)
    if(thisPeople === getSize(thisMaxPeoples[0])) {
      thisMaxPeoples.push(item)
    } else if (thisPeople > getSize(thisMaxPeoples[0])) {
      thisMaxPeoples = [item]
    }
  })
  // console.log(thisMaxPeoples)
  if (thisMaxPeoples.length === 1) {
    return thisMaxPeoples[0]
  } else {
    return earliestInAlphabetical(thisMaxPeoples)
  }
}

do {
  // read input file and filter
  const thisCountryPeople = parseInt(input.shift())
  const peoples = input.splice(0, thisCountryPeople)

  console.log(`Case #${countryKey}: ${judgeKing(peoples)}`)
  countryKey += 1
} while (countryKey <= countries)
