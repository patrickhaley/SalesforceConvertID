/**
 * Converts a Salesforce 15-character ID to an 18-character ID.
 *
 * @param {string} id15 - The 15-character ID to be converted.
 * @returns {string} - The converted 18-character ID.
 */
function SALESFORCE_18(id15) {
  if (id15.length != 15) return "Invalid ID";

  const suffix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345";
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < 3; i++) {
    let flags = 0;
    for (let j = 0; j < 5; j++) {
      let c = id15.charAt(i * 5 + j);
      if (chars.indexOf(c) >= 0) flags += 1 << j;
    }
    result += suffix.charAt(flags);
  }

  return id15 + result;
}