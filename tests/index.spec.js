const chai = require('chai');
const expect = chai.expect;
const cpf = require('../index');



describe("cpfValidator", () => {
    it("return true for a valid cpf number", () => {
        expect(cpf.cpfValidator ('00768208238')).to.equal(true);
    });

    it("return false for equal digits", () => {
        expect(cpf.cpfValidator ('00000000000')).to.equal(false);
    });

    it("return false for equal digits", () => {
        expect(cpf.cpfValidator ('22222222222')).to.equal(false);
    });

    it("return false if the number exceeds 11 digits ", () => {
        expect(cpf.cpfValidator ('0076820823882')).to.equal(false);
    });

    it("return false for a below 11 digits number", () => {
        expect(cpf.cpfValidator ('007682082')).to.equal(false);
    });
});