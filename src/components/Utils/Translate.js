export function Translate(variable, dictionary) {
  //   console.log(variable, dictionary);

  for (let key in dictionary) {
    // currently not expanding the variable name as there's an extra layer of nesting to go through
    // do we need to expand it or is the acronym okay?

    // if (dictionary === "plotvars") {
    //   dictionary = `plotvars[${key}].options`;
    // }
    if (variable === dictionary[key].value) {
      //   console.log(
      //     "dict values",
      //     dictionary[key].value,
      //     " label: ",
      //     dictionary[key].label
      //   );
      return dictionary[key].label;
    }
  }
}
