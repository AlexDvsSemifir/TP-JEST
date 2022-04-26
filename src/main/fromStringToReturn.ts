export class FromStringToReturn {
  public fromStringToReturn(phrase: string): string {
    phrase = phrase.trim();
    if (!phrase) {
      throw Error();
    }
    phrase = phrase.replace(/ /g, '\r');
    return phrase;
  }
}
