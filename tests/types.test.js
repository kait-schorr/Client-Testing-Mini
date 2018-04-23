const chai = require("chai");
const cases = require("../src/app.js");
const expect = chai.expect;
const assert = chai.assert;

describe("Cases from app.js", () => {
  // this is a testing suite made up of suites.

  describe("apples", () => {
    const apples = cases.apples;
    it("should be an array", () => {
      expect(apples).to.be.an("array"); // Begin here something is wrong, fix it.
    });
    // write a test to check the correct length of the apples array.
    it("should have a length of 10", () => {
      expect(apples).to.have.a.lengthOf(4);
    });
    it("should contain Red Delicious", () => {
      expect(apples).to.include("Red Delicious");
    });
    // write a test to check to see if the apples array contains 'Red Delicious'.
  });

  describe("Ben", () => {
    const Ben = cases.Ben;
    it("should be an object", () => {
      expect(Ben).to.be.an("object");
    });
    it("should have a favorite band of the Beastie Boys", () => {
      expect(Ben).to.have.property("favBand", "Beastie Boys");
    });
    // write a test to check if Ben's favorite band is 'Beastie Boys'.
  });

  describe("Sean", () => {
    const Sean = cases.Sean;
    it("should be an object", () => {
      expect(Sean).to.be.an("object");
    });
    // write a test to check if Seans's favorite food is 'Pizza'.
    it("should have a favorite food of pizza", () => {
      expect(Sean).to.have.property("favFood", "Pizza");
    });
  });

  describe("Ryan", () => {
    const Ryan = cases.Ryan;
    it("should be an object", () => {
      expect(Ryan).to.be.an("object");
    });
    // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    it("should have a favorite book that is NOT Harry Potter", () => {
      expect(Ryan).to.not.have.property("favBook", "Harry Potter");
    });
  });

  describe("Austen", () => {
    const Austen = cases.Austen;
    it("should be an object", () => {
      expect(Austen).to.be.an("object");
    });
    it("should not have a favorite color of gold", () => {
      expect(Austen).to.not.have.property("favColor", "Gold");
    });
    // write a test to see if Austen's favColor is not 'Gold'.
  });

  describe("Ivan", () => {
    const Ivan = cases.Ivan;
    it("should be an object", () => {
      expect(Ivan).to.be.an("object");
    });
    // write a test to check if Ivan's favActivity is 'Rock Climbing'.
    it("should have a favActivity of Rock Climbing", () => {
      expect(Ivan).to.have.property("favActivity", "Rock Climbing");
    });
  });
});
