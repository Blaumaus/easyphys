import dataCollection from '../db/db'

// Replace chars with value
function charsReplace (formulaTemplate, dataGiven) {
  for (const { char, value } of dataGiven.given) {
    formulaTemplate = formulaTemplate.replace(char, value)
  }

  return formulaTemplate
}

// Main calculating function
function calculate (element, dataGiven) {
  const replaced = charsReplace(element.formula, dataGiven)

  // If formula is not completed (chars left)
  if (typeof replaced !== 'number') {
    // TODO
  }

  const res = Math.ceil((parseInt(replaced)) * 100) / 100

  return {
    success: true,
    value: element.mathjax_char,
    result: res,
    formula: element.mathjax_formula,
    unit: element.unit
  }
}

// Root function
export default function main (data) {
  if (data.find && data.given && data.subject) {
    // Selection of the desired database
    const db = dataCollection[data.subject]

    // Get element data from db
    const el = db.filter(item => Number(item.id) === Number(data.find))[0]

    return calculate(el, data) || { success: false }
  } else {
    return { success: false }
  }
}
