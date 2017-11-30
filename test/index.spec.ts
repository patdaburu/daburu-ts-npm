import { echo } from '../src/index';
import { expect } from 'chai';
import 'mocha';

describe("Test the echo() function.", function(){
    describe("Call echo() without the 'loud' parameter. Get the original string.", ()=>{
        it("returns the original string", function(){
            var response = echo('testing');
            expect(response).to.equal('testing');
        });
    });
    describe("Call echo() with the 'loud' parameter true.  Get the loud string.", ()=>{
        it("returns the original string, but louder", function(){
            var response = echo('testing', true);
            expect(response).to.equal('TESTING');
        });
    });
});
