import { hasSymbol } from './hasSymbol';
import { hasOwn } from './hasOwn';
// function mergeData(to: any, from: any) {
//     if (!from) {
//         return to;
//     }
//     let key: any;
//     let toVal: any;
//     let fromVal: any;
//     const keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from)

//     for (let i = 0; i < keys.length; i++) {
//         key = keys[i];
//         if (key === '__ob__') {
//             continue
//         }
//         toVal = to[key]
//         fromVal = from[key]
//         if (!hasOwn(to, key)) {
//             set(to,key,fromVal)
//         }
//         else if(){

//         }
//     }
// }