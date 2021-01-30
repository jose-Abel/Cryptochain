const Block = require('./block');

describe('Block', ()=> {
    
    const timestamp = 2000;
    
    const lastHash = 'foo-hash';
    
    const hash = 'bar-hash';
    
    const data = ['blockchain', 'data'];
    
    const nonce = 1;
    
    const difficulty = 1;
    
    const block = new Block({timestamp, lastHash, hash, data, nonce, difficulty});
    
    it('has a timestamp, lastHash, hash, data property, nonce and difficulty', ()=> {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);        
        expect(block.hash).toEqual(hash);
        
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
        expect(block.difficulty).toEqual(difficulty);
        
    })
 
});