const nw_helper = require('../redirect.js');

// describe('get_stream_link', () => {
//     it('returns the correct url for 6/10', () => {
//         var d = Date(2020, 6, 17)
//         var result = nw_helper.get_stream_link()
//     })
// });

describe('test add method', () => {
  it.each`
    month | day   | expected
    ${5}  | ${8}  | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${9}  | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${10} | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${11} | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${14} | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${15} | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${16} | ${'https://youtu.be/pIFV0Bhxd_Q'}
    ${5}  | ${17} | ${'https://youtu.be/gm-r5A1_nQo'}
    ${5}  | ${18} | ${'https://youtu.be/gm-r5A1_nQo'}
    ${5}  | ${19} | ${'https://youtu.be/gm-r5A1_nQo'}
    ${5}  | ${20} | ${'https://youtu.be/gm-r5A1_nQo'}
    ${5}  | ${23} | ${'https://youtu.be/gm-r5A1_nQo'}
    ${5}  | ${24} | ${'https://youtu.be/MRL1zs1HxjM'}
  `('should return $expected for $month / $day', ({ month, day, expected }) => {
    var d = new Date(2020, month, day)
    expect(nw_helper.get_stream_link(d)).toEqual(expected);
  });
});