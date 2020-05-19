// Every test file (you can create as many as you want) should start like this
// Please, do NOT touch. They will be automatically removed for browser tests -->
const _pkg = require('../lib/index.node')
const chai = require('chai')
// <--

const bigintConversion = require('bigint-conversion')

const tests = [
  {
    // https://tools.ietf.org/html/rfc7914#section-9
    input: 'f7ce0b653d2d72a4108cf5abe912ffdd777616dbbb27a70e8204f3ae2d0f6fad89f68f4811d1e87bcc3bd7400a9ffd29094f0184639574f39ae5a1315217bcd7894991447213bb226c25b54da86370fbcd984380374666bb8ffcb5bf40c254b067d27c51ce4ad5fed829c90b505a571b7f4d1cad6a523cda770e67bceaaf7e89',
    output: 'a41f859c6608cc993b81cacb020cef05044b2181a2fd337dfd7b1c6396682f29b4393168e3c9e6bcfe6bc5b7a06d96bae424cc102c91745c24ad673dc7618f8120edc975323881a80540f64c162dcd3c21077cfe5f8d5fe2b1a4168f953678b77d3b3d803b60e4ab920996e59b4d53b65d2a225877d5edf5842cb9f14eefe425'
  }
]

describe('testing scryptBlockMix', function () {
  for (const test of tests) {
    describe(`scryptBlockMix(${test.input})`, function () {
      it(`should match ${test.output}`, async function () {
        const ret = new BigUint64Array(bigintConversion.hexToBuf(test.input, true))
        await _pkg.scryptBlockMix(ret)
        chai.expect(bigintConversion.bufToHex(ret)).to.equal(test.output)
      })
    })
  }
})
