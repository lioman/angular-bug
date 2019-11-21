export function cleanDataRows(data){
  let result = []
  for (let row of data){

    let value = row.element.value;
    if (value){
      let cleanObject = {}
      cleanObject[row.element.id] = value
      result.push(cleanObject);
    }
  }
  return result
}