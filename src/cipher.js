const alfabeto = [
  'A', 'B', 'C', 'D', 'E', 'F',
  'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R',
  'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
];

const cipher = {
  encode: function(offset, text) {
    if (!offset || offset < 1){
      throw new TypeError("Você deve inserir um valor válido de deslocamento.");
    }

    if (!text || text.trim() === ""){
      throw new TypeError("Você deve inserir um texto válido.");
    }

    return [...text].map(char => cipher.encodeChar(offset, char)).join('')
  },
  decode: function(offset, text) {
    if (!offset || offset < 1){
      throw new TypeError("Você deve inserir um valor válido de deslocamento.");
    }

    if (!text || text.trim() === ""){
      throw new TypeError("Você deve inserir um texto válido.");
    }

    return [...text].map(char => cipher.decodeChar(offset, char)).join('')
  },
  encodeChar: function(inputOffset, char) {
    const offset = Number (inputOffset) % alfabeto.length;
      if (alfabeto.includes(char.toUpperCase())) {
        const position = alfabeto.indexOf(char.toUpperCase());
        const newPosition = (offset + position) % alfabeto.length;
        return alfabeto[newPosition];
      }else return char;
  },
  decodeChar: function(inputOffset, char) {
    if (alfabeto.includes(char.toUpperCase())) {
      const position = alfabeto.indexOf(char.toUpperCase());
      const offset = (Number (inputOffset) - position) % alfabeto.length;
      const newPosition = ((offset - alfabeto.length) * -1) % alfabeto.length;
      return alfabeto[newPosition];
    }else return char;
  },
};

export default cipher;
