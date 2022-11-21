const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

const countedNames = names.reduce((allNames, name) => {
  const currCount = allNames[name] ?? 0;
  // console.log("allNames", allNames);
  // console.log("name", name);
  return {
    ...allNames,
    [name]: currCount + 1
  };
}, {});

// console.log(countedNames)
const asd = { Alice: 1, Bob: 1, Tiff: 1 };
console.log(asd["Tiff"]);

//overwrites key in object
console.log({ ...asd, Tiff: 5});