// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->
const _pkg = require('../lib/index.node')
const chai = require('chai')
// <--

const bigintConversion = require('bigint-conversion')

const tests = [
  {
    // https://tools.ietf.org/html/rfc7914#section-10
    input: 'f7ce0b653d2d72a4108cf5abe912ffdd777616dbbb27a70e8204f3ae2d0f6fad89f68f4811d1e87bcc3bd7400a9ffd29094f0184639574f39ae5a1315217bcd7894991447213bb226c25b54da86370fbcd984380374666bb8ffcb5bf40c254b067d27c51ce4ad5fed829c90b505a571b7f4d1cad6a523cda770e67bceaaf7e89',
    N: 16,
    output: '79ccc193629debca047f0b70604bf6b62ce3dd4a9626e355fafc6198e6ea2b46d58413673b99b029d665c357601fb426a0b2f4bba200ee9f0a43d19b571a9c71ef1142e65d5a266fddca832ce59faa7cac0b9cf1be2bffca300d01ee387619c4ae12fd4438f203a0e4e1c47ec314861f4e9087cb33396a6873e8f9d2539a4b8e'
  }
]

describe('testing scryptROMix', function () {
  for (const test of tests) {
    describe(`scryptROMix(${test.input})`, function () {
      it(`should match ${test.output}`, async function () {
        const ret = new BigUint64Array(bigintConversion.hexToBuf(test.input, true))
        await _pkg.scryptROMix(ret, test.N)
        chai.expect(bigintConversion.bufToHex(ret)).to.equal(test.output)
      })
    })
  }
})
