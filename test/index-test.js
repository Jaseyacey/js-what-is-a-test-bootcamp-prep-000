var index = require("../index.js")


describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Jason"', () => {
      expect(index.name).toEqual('Jason')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })
})
