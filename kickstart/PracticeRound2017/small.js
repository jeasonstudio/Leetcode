const fs = require('fs')
const path = require('path')
const ALPHABET = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]
const MAXNAMECOUNT = 20

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
  let res = kingsArray.map(item => ({
    key: item,
    value: 26
  }))
  for (var index = 0; index < MAXNAMECOUNT; index++) {
    let newRes = []
    res.map(({ key: item }, jndex) => {
      const wz = ALPHABET.indexOf(item.split('')[index])
      newRes[jndex] = {
        key: item,
        value: wz < 0 ? 26 : wz
      }
    })
    let min = 26
    let indexs = []
    for (var index = 0; index < newRes.length; index++) {
      if (newRes[index].value < min) {
        min = newRes[index].value
        indexs = [index]
      } else if (newRes[index].value === min) {
        indexs.push(index)
      }
    }
    if (indexs.length === 1) {return res[indexs[0]].key}
    else {
      res = res.filter(({ key }, index) => {
        return indexs.indexOf(index) >= 0
      })
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
    console.log(thisMaxPeoples)
    return earliestInAlphabetical(thisMaxPeoples)
  }
}

const input = fs.readFileSync(path.join(__dirname, './A-small-practice.in'), { encoding: 'utf-8' }).split('\n')
let countries = parseInt(input.shift())
let countryKey = 1


// do {
//   // read input file and filter
//   const thisCountryPeople = parseInt(input.shift())
//   const peoples = input.splice(0, thisCountryPeople)

//   console.log(`Case #${countryKey}: ${judgeKing(peoples)}`)
//   countryKey += 1
// } while (countryKey <= countries)

const test = [ 'TFFLUTMWYONKXMRDIHB',
'NDBKMRKUOZSLZALHQTC',
'QTMRQOBSKNXPLGYLICC',
'NXCTMPGBVHRNQLIWMS' ]

earliestInAlphabetical(test)
