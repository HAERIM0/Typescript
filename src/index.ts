// const hello = () => "hi"

// class Block {
//   constructor(private data: string) {}
//   static hello() {
//     return "hi";
//   }
// }

// import { init, exit } from "myPackage";

// init({
//   url: "true",
// });

// exit(1);

// localStorage.clear();

// import { init, exit } from "./myPackage";

//블록체인
// console.log("bey");

import * as crypto from "crypto";

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}

class Block implements BlockShape {
  public hash: string;
  constructor(
    public prevHash: string,
    public height: number,
    public data: string
  ) {
    this.hash = Block.calculateHash(prevHash, height, data);
  }
  static calculateHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash("sha256").update(toHash).digest("hex");
  }
}

class BlockChain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }
  private getPrevHash() {
    if (this.blocks.length === 0) return "";
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const newblock = new Block(
      this.getPrevHash(),
      this.blocks.length + 1,
      data
    );
    this.blocks.push(newblock);
  }
  public getBlocks() {
    return this.blocks;
  }
}

const blockchain = new BlockChain();

blockchain.addBlock("First one");
blockchain.addBlock("second one");
blockchain.addBlock("Last one");

console.log(blockchain.getBlocks());
