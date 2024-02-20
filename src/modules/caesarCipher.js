export default function caesarCipher(message, factor) {
  if (typeof message !== "string" || message.length === 0)
    throw new Error("The message is not a string");

  if (
    typeof factor !== "number" ||
    factor.length === 0 ||
    !Number.isInteger(factor)
  )
    throw new Error("The factor is not an integer");

  const flatFactor = factor % 26;
  const cypherMessage = message.split("").map((char) => {
    const ascii = char.charCodeAt();
    if (ascii > 96 && ascii < 123) {
      let converted = ascii - 97 + flatFactor;
      converted = (converted % 26) + 97;
      return String.fromCharCode(converted).toUpperCase();
    }
    if (ascii > 64 && ascii < 91) {
      let converted = ascii - 65 + flatFactor;
      converted = (converted % 26) + 65;
      return String.fromCharCode(converted).toLowerCase();
    }

    return String.fromCharCode(ascii);
  });

  return cypherMessage.join("");
}
