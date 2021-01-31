const Block = require('./block');

const { GENESIS_DATA } = require('./config');

describe('Block', ()=> {
    
    const timestamp = 2000;
    
    const lastHash = 'foo-hash';
    
    const hash = 'bar-hash';
    
    const data = ['blockchain', 'data'];
    
    const nonce = 1;
    
    const difficulty = 1;
    
    const block = new Block({timestamp, lastHash, hash, data, nonce, difficulty});
    
    it('has a timestamp, lastHash, hash and a data property', ()=> {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);        
        expect(block.hash).toEqual(hash);
        
        expect(block.data).toEqual(data);
        expect(block.nonce).toEqual(nonce);
        expect(block.difficulty).toEqual(difficulty);
        
    })
    
    describe('genesis()', ()=> {
        const genesisBlock = Block.genesis();
        
        it('returns a Block instance', ()=> {
            expect(genesisBlock instanceof Block).toBe(true);
        })
        it('returns the genesis data', ()=> {
            expect(genesisBlock).toEqual(GENESIS_DATA);
        });
    });
    
});