export function hash(string: string): string {
  //set variable hash as 0
  var hash = 0;
  // if the length of the string is 0, return 0
  if (string.length == 0) return hash.toString();
  for (var i = 0; i < string.length; i++) {
    let ch = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + ch;
    hash = hash & hash;
  }

  return hash.toString()
}