const chai = require('chai');
const expect = chai.expect;
require("dotenv").config();

const config = require('../config').config;

describe('Project Greeter bot', function(){
  it('should have LocalSupport channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDLLCBT4Z');
  });
  it('should have WebSiteOne channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDM8RJUBU');
  });
  it('should have Rundfunk Mitbestimmen channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDLLCJJGH');
  });
  it('should have Wiki EDU dashboard channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDM5X3TFV');
  });
  it('should have MetPlus dashboard channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDNAU3CCB');
  });
  it('should have bot dashboard channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDNDNJPHQ');
  });
  it('should have asyncvoter dashboard channel greeting', function(){
    expect(config[process.env.NODE_ENV].greetings).to.have.own.property('CDMRA0DS5');
  });
});