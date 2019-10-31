var HelloWorld = require('./hello-world');
//describing the functions
describe('Hello World', function() {
  var helloWorld = new HelloWorld();
//function having no name
  it('says hello world with no name', function() {
    expect(helloWorld.hello('')).toEqual('Hello, World!');
  });
//bob is been named here
  it('says hello to bob', function() {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});
