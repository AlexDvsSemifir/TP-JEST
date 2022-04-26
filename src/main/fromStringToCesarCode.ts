export class FromStringToCesarCode {
  public cesarCode = (phrase: string, key: number): string => {
    phrase = phrase.trim();
    if (!phrase) {
      throw Error();
    }
    phrase = phrase.replace(/./gi, (letter: string) => {
      const code = letter.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + key) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + key) % 26) + 97);
      } else {
        return letter;
      }
    });
    return phrase;
  };
}
