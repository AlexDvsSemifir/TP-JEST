export class FizzBuzz {
  public fizzBuzz(number: number): string {
    if (number < 0 || number > 100 || typeof number !== 'number') {
      throw new Error('Le nombre doit être compris entre 0 et 100');
    }
    if (number % 15 === 0) {
      return 'FizzBuzz';
    } else if (number % 5 === 0) {
      return 'Buzz';
    } else if (number % 3 === 0) {
      return 'Fizz';
    }
    return number.toString();
  }
}
