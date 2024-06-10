//Formats a string with spaces into camel case
export default function toCamelCase(str) {
  let words = str.split(' ');
  let camelCaseStr = words[0].toLowerCase();

  for (let i = 1; i < words.length; i++) {
    camelCaseStr += words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();
  }

  return camelCaseStr;
}
