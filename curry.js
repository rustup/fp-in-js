var curry = require("lodash").curry
var match = curry( (reg, str)=> str.match(reg))
console.log(match(/\w+/g)("zhangsan adf"))


