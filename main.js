function reverseString(str) {
  let newStr = str;
  str = "";
  let length = newStr.length - 1;
  for (let i = length; i >= 0; i--) {
    str += newStr.charAt(i);
  }
  console.log("Final String: ", str);
  return str;
}
reverseString("hello");
