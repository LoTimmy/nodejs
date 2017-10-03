"use strict";
const CoinHive = require("coin-hive");

(async () => {
  // Create miner
  var miner = await CoinHive("6ty1eIIXSBScgOA7bOsbeovHFygGiMze"); // Coin-Hive's Site Key

  // Start miner
  await miner.start();

  // Listen on events
  miner.on("found", () => console.log("Found!"));
  miner.on("accepted", () => console.log("Accepted!"));
  miner.on("update", data =>
    console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `)
  );

  // Stop miner
  //  setTimeout(async () => await miner.stop(), 60000);
})();
