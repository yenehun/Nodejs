const _=require('lodash')
const deeppenItems=[1,[2,[3,[4]]]]

const flattenItems=_.flattenDeep(deeppenItems)
console.log(flattenItems);
