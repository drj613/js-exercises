const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  it('says hello world', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
  it('greets a person if a name is passed in', function(){
    expect(helloWorld('James')).toEqual('Hello, James!');
  });
});
