const obj = {};

const normalize = (data) => {
  for (const key in data) {
    if (Array.isArray(data[key].value)) {
      let valueArray = [];

      data[key].value.map((e) => {
        const valuesObj = {};
        for (const v in e) {
          valuesObj[v] = e[v].value;
        }
        valueArray.push(valuesObj);
        obj[key] = valueArray;
      });
    } else {
      obj[key] = data[key].value;
    }
  }
  return obj;
};
