export default function filter(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element !== null && element !== undefined) {
      newArray.push(element)
    }
  }
  return newArray;
}



