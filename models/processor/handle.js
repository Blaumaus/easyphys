import dataCollection from '../db/db'

// Replace chars with value
function charsReplace (formulaTemplate, dataGiven,) {
  for (let i of dataGiven.given)  {
    formulaTemplate = formulaTemplate.replace(i.char, i.value);
  }

  return formulaTemplate;
}

// Main calculating function
function calculate (element, dataGiven, dataBase) {
  const replaced = charsReplace(element.formula, dataGiven);

  // If formula is not completed (chars left)  
  if (!Number(replaced)) {
    // TODO 
  }
  
  const res = Math.ceil((eval(replaced)) * 100) / 100;

  return {
    "success": true,
    "value":  element.mathjax_char,
    "result": res,
    "formula": element.mathjax_formula,
    "unit": element.unit
  }
}

// Root function
export default function main (data) {
  if (data.find && data.given && data.subject) {
    // Selection of the desired database
    const db = dataCollection[data.subject];

    // Get element data from db
    const el = db.filter(item => Number(item.id) === Number(data.find))[0];

    // Try to calculate
    let result;

    try {
      result = calculate(el, data, db);
    } catch (e) {
      return { "success": false } 
    }

    if (result) {
      return result;
    } else {
      return { "success": false } 
    }
  }

  // Return 'false' if something is missing in the given data
  return { "success": false }
}
