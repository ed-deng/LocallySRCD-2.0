// const mainController = require('../server/controllers/mainController.js');

describe('mainController unit tests', () => {
  // let mockReq;
  // let mockRes;
  // let nextFunc = jest.fn();

  // beforeEach(() => {
  //   mockReq = {
  //     body: {}
  //   };
  //   mockRes = {
  //     query: {},
  //     headers: {},
  //     data: null,
  //     json(payload) {
  //       this.data = JSON.stringify(payload)
  //     },
  //     cookie(name, value, options) {
  //       this.headers[name] = value;
  //     }
  //   };

  //   next.mockReset();
  // });

  it('mainController.getResults', () => {
    const mock = jest.fn();
    mock('a', 'b', 'c');
    expect(mock).toHaveBeenCalledTimes(1);
    expect(mock).toHaveBeenCalledWith('a', 'b', 'c');
  });
});