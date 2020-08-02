import { timeSince } from '../timeUtil';
describe('utils/timeUtil', () => {
    test('should return time since string', () => {
        let milliseconds = Date.now() - (10 * 1000);
        expect(timeSince(milliseconds)).toBe('10 seconds');
        milliseconds = Date.now() - (5 * 60 * 1000);
        expect(timeSince(milliseconds)).toBe('5 minutes');
        milliseconds = Date.now() - (5 * 60 * 60 * 1000)
        expect(timeSince(milliseconds)).toBe('5 hours');
        milliseconds = Date.now() - (50 * 60 * 60 * 1000)
        expect(timeSince(milliseconds)).toBe('2 days');
    })
})