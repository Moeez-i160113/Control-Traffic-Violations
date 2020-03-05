const Officer = artifacts.require('./Officer.sol')

require('chai')
.use(require('chai-as-promised'))
.should()

contract('Officer', (accounts) => {
  let officer

  before(async () => {
    officer = await Officer.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await officer.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

   it('has a name', async () => {
      const name = await officer.name()
      assert.equal(name, 'Mustafa')
    })


  })

  describe('officers', async () => {
    let result

    before(async () => {
      result = await challan.Get_Info()
      const event = result.logs[0].args
      console.log(event)
    })



})

  })