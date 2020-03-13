const Challan = artifacts.require('./challan.sol')

require('chai')
.use(require('chai-as-promised'))
.should()

contract('Challan', (accounts) => {
  let challan

  before(async () => {
    challan = await Challan.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await challan.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await challan.name()
      assert.equal(name, 'ConTra')
    })

  })

  describe('challans', async () => {
    let result, challanCount

    before(async () => {
      // chalanCount, drivercnic, ownercnic, registration_no, officercnic, _amount, city, _registration_no, _make, manufacturing_year
      result = await challan.Add_chalan('61101-2298424-9','61101-2298424-9', 'AZV - 569', '61101-2298435-8', 1000, 'Rawalpindi')
      challanCount = await challan.chalanCount()
      const event = result.logs[0].args
      console.log(event)
    })

    it('creates challans', async () => {
      // SUCCESS
      assert.equal(challanCount, 1)
      const event = result.logs[0].args
      assert.equal(event.id.toNumber(), challanCount.toNumber(), 'id is correct')
      assert.equal(event.drivercnic, '61101-2298424-9', 'Driver cnic is correct')
      assert.equal(event.ownercnic, '61101-2298424-9', 'owner cnic is correct')
      assert.equal(event.registration_no, 'AZV - 569', 'registration_no is correct')
      assert.equal(event.officercnic, '61101-2298435-8', 'officercnic is correct')
      assert.equal(event.city, 'Rawalpindi', 'City is correct')
      
      // FAILURE: Product must have a name
     // await await marketplace.createProduct('', web3.utils.toWei('1', 'Ether'), { from: seller }).should.be.rejected;
      // FAILURE: Product must have a price
      // await await marketplace.createProduct('iPhone X', 0, { from: seller }).should.be.rejected;
    })
  })







})