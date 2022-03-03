export function Translate(variable, dictionary) {
  for (let key in dictionary) {
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
