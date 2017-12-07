import { expect } from 'chai';
import 'mocha';
import { echo } from '../src/index';


describe('Test the echo() function.', () => {
    describe('Call echo() with an empty string.', () => {
        it('returns the original string', () => {
            const response = echo('');
            expect(response).to.equal('');
        });
    });
    describe('Call echo() without the "loud" parameter. Get the original string.', () => {
        it('returns the original string', () => {
            const response = echo('testing');
            expect(response).to.equal('testing');
        });
    });
    describe('Call echo() with the "loud" parameter true.  Get the loud string.', () => {
        it('returns the original string, but louder', () => {
            const response = echo('testing', true);
            expect(response).to.equal('TESTING');
        });
    });
});
