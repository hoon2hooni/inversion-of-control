export default function filter(
  array,
  {
    filterNull = true,
    filterUndefined = true,
    filterEmptyString = false,
    filterZero = false,
  } = {}
) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (
      (filterNull && element === null) ||
      (filterUndefined && element === undefined) ||
      (filterEmptyString && element === "") ||
      (filterZero && element === 0)
    ) {
      continue;
    }
    newArray.push(element);
  }
  return newArray;
}
