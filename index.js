const employee = {
    "name": "Jayson",
    "streetAddress": "2526 Courtland"};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {...obj, [key]: value}
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  
    const newObj = {...obj};
    delete newObj["name"]; //bracket notation
    console.log(newObj);

  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    obj = delete obj["name"];
    return employee;
}


