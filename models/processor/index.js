const kinematics = require('../formulasDB/kinematics.json');
const find = require('../find.json');
let res;

for (let kinekey in kinematics) {
  for (let findkey in find) {
    if (kinekey === findkey) {
      res = eval(kinematics[kinekey]);
      console.log(res);
    }
  }
}
