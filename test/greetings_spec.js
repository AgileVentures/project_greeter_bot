const chai = require('chai');
const expect = chai.expect;

const greetings = require('../lib/greetings');

describe('Project Greeter bot', function(){
  it('should have LocalSupport channel greeting', function(){
    expect(greetings).to.have.own.property('C0KK907B5');
  });
  it('should have WebSiteOne channel greeting', function(){
    expect(greetings).to.have.own.property('C029E8G80');
  });
  it('should have Rundfunk Mitbestimmen channel greeting', function(){
    expect(greetings).to.have.own.property('C5LCQSJMA');
  });
  it('should have Wiki EDU dashboard channel greeting', function(){
    expect(greetings).to.have.own.property('C724RCXT7');
  });
  it('should have bot dashboard channel greeting', function(){
    expect(greetings).to.have.own.property('C3ETFTYHK');
  });
  it('should have asyncvoter dashboard channel greeting', function(){
    expect(greetings).to.have.own.property('C2HGJF54G');
  });
});