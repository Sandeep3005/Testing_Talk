export class Helper {
  constructor() {}

  canVote(age) {
    return age >= 18 ? true : false;
  }

  getArea(length, width) {
    if (!length || !width) return 0;
    return length * width
  }
}
