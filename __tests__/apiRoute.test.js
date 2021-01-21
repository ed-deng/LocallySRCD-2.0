const app = require('../server/server.js');
const supertest = require('supertest');
const request = supertest(app);

// const ClosedStores = require('../server/models/closedStoreModel.js');

// jest.useFakeTimers();

describe('api route integration', () => {

  describe('testing', async () => {
    it('responds with 200 status', async (done) => {
      const res = await request.get('/api/test')
      console.log('res.body:', res.body);
      
      expect(res.status).toBe(200);
      expect(res.body.message).toBe('Passed');

      done();
    })
  });

  // xdescribe('POST to /report', () => {
  //   afterEach(async () => {
  //     await ClosedStores.deleteMany({ storeId: 'thisIsATestIdNotRealId' }, (err) => {
  //       if(err) console.log('Error occured while deleting test storeId:', err);
  //       else console.log('Successfully deleted test storeId');
  //     })
  //   });

  //   it('responds with 200 status and text/javascript content type', async (done) => {
  //     const mockBody = JSON.stringify({
  //       latitude: 40.7505989074707,
  //       longitude: -73.99359893798828,
  //       storeId: 'thisIsATestIdNotRealId',
  //       term: 'pizza'
  //     });

  //     await request.post('/report')
  //       .send(mockBody)
  //       .expect('Content-Type', /text\/javascript/)
  //       .expect(200);

  //     done();
  //   });
  // });

  // xdescribe('POST to /', () => {
  //   const mockBody = {
  //     latitude: this.state.latitude,
  //     longitude: this.state.longitude,
  //     storeId: closed,
  //     term: this.state.term,
  //   };


  //   it('responds with 200 status and text/html content type', () => {
  //     return request(server)
  //       .post('/')
  //       .expect('Content-Type', /text\/html/)
  //       .expect(200);
  //   });
  // });
});
