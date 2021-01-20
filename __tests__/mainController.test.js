const mongoose = require('mongoose');
const dbHandler = require('./db-handler.js');
const closedStoreModel = require('../server/models/closedStoreModel.js');
const mainController = require('../server/controllers/mainController.js');
// const { MongoURI } = require("../server/settings.js");
// mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Connect to a new in-memory database before running any tests
beforeAll(async () => await dbHandler.connect());

// Clear all test data after every test
afterEach(async () => await dbHandler.clearDatabase());

// Remove and close the db and server
afterAll(async () => await dbHandler.closeDatabase());

describe('mainController unit tests', () => {
  const mockStore = {
    storeId: 'thisIsATestIdNotRealId'
  }

  it('can be created correctly', async () => {
      expect(async () => await productService.create(productComplete))
          .not
          .toThrow();
  });





  // it('mainController.getClosedStores', () => {
  //   const mockReq = {}
  //   const mockRes = {
  //     locals: {
  //       closedStoresList: {}
  //     }
  //   }
  //   const mockFunc = jest.fn();

  // });

  // it('mainController.getResults', () => {
  //   const mockReq = {
  //     body: {
  //       term: 'pizza',
  //       latitude: 40.7505989074707,
  //       longitude: -73.99359893798828,
  //     }
  //   }
  //   const mockRes = {
  //     locals: {
  //       closedStoresList: {

  //       }
  //     }
  //   }
  // });
});
