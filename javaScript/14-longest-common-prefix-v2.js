const strs = ["flower", "flow", "flight"];

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  // se for array vazio, retorna ""
  if (strs.length === 0) return "";

  // Primeira palavra:
  let prefix = strs[0];

  // Para cada palavra
  for (let l = 1; l < strs.length; l++) {
    // Vou comparar cada letra
    for (let i = 0; i < prefix.length; i++) {
      if (strs[l][i] !== prefix[i]) {
        prefix = prefix.slice(0, i);
      }
    }
  }
  return prefix;
};

longestCommonPrefix(strs);
