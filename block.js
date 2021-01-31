const {GENESIS_DATA} = require('../backup/config');

class Block {
    
    constructor({timestamp, lastHash, hash, data, nonce, difficulty}){
        
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty;
    }
    
    static genesis(){
        return new this(GENESIS_DATA);
    }
}

module.exports = Block;