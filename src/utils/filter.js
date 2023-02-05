export default function filter(array, filterFn) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (filterFn(element)) {
      newArray.push(element);
    }
  }
  return newArray;
}

export function filterNullAndUndefined(array) {
  return filter(array, (el) => el !== null && el !== undefined);
}

export function filterNullAndUndefinedAndEmptyString(array) {
  return filter(array, (el) => el !== null && el !== undefined && el !== "");
}
