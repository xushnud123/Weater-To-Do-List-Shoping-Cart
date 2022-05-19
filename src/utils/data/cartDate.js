const product = [
  { 
    id: 1, 
    pay: 1, 
    name: "apples", 
    path: "https://media.istockphoto.com/photos/red-apple-picture-id184276818?k=20&m=184276818&s=612x612&w=0&h=QxOcueqAUVTdiJ7DVoCu-BkNCIuwliPEgtAQhgvBA_g=" ,
  },
  {
    id: 2,
    pay: 2,
    name: "apricots",
    path: "https://pngimg.com/uploads/cherry/cherry_PNG611.png",
  },
  {
    id: 3,
    pay: 3,
    name: "cherries",
    path: "https://www.picng.com/upload/apricot/png_apricot_8438.png",
  },
  {
    id: 4,
    pay: 4,
    name: "peaches",
    path: "https://www.pngall.com/wp-content/uploads/2016/05/Peach-PNG.png",

  },
];

export default product;

// if (action.payload.name === 'apples') {
//   state.list.apples.push({
//     id: action.payload.id,
//     name: action.payload.name,
//     pay: action.payload.pay
//   })
// }
// if (action.payload.name === 'apricots') {
//   state.list.apricots.push({
//     id: action.payload.id,
//     name: action.payload.name,
//     pay: action.payload.pay
//   })
// }
// if (action.payload.name === 'cherries') {
//   state.list.cherries.push({
//     id: action.payload.id,
//     name: action.payload.name,
//     pay: action.payload.pay
//   })
// }
// if (action.payload.name === 'peaches') {
//   console.log('peaches')
//   state.list.peaches.push({
//     id: action.payload.id,
//     name: action.payload.name,
//     pay: action.payload.pay
//   })
// }