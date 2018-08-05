import { Helper } from './helper';

describe('Voter Age Test Helper.js', () => {
  let helperObj;
  beforeEach(() => {
    helperObj = new Helper();
  });

  it('should show user is below voting age', () => {
      let age = 10;
      let canVote = helperObj.canVote(age);
      expect(canVote).toBeFalsy();
  });

  it('should show user is above voting age', () => {
    let age = 19;
    let canVote = helperObj.canVote(age);
    expect(canVote).toBeTruthy();
  });
});

describe('Area Test Helper.js', () => {
  let helperObj;
  beforeEach(() => {
    helperObj = new Helper();
  });

  it('should return 0 if any parameter is missing', () => {
    let length = 10;
    let area = helperObj.getArea(length);
    expect(area).toBe(0);
  });

  it('should return area of rectangle/square', () => {
    let length = 10;
    let width = 5;
    let area = helperObj.getArea(length, width);
    expect(area).toBe(length * width);
  });
})
