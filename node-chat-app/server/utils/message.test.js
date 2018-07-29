var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        
        var message = generateMessage(from, text);
        
        expect(typeof message.createdAt).toBe('number');

        //expect(message).toInclude({from,text})
        expect(typeof message).toContain('object');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct Location object', () => {
        let user = 'Admin';
        let latitude = 1;
        let longitude = 1;
        let url = 'https://www.google.com/maps?q=1,1';

        let message = generateLocationMessage(user, latitude, longitude);
        expect(message.url).toBe(url);
    })
});