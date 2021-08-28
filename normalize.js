const normalize = (data) => {
  const obj = {}
    for (const key in data) {
      obj[key] = data[key].value
    }
  return obj
}
