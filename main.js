import Keys from './Keys.js';

//let compr = Keys.GenerateRandomCompressedPrivateKey();
let compr = 'KzMVzFdD4UDzRiXpGUtmM9HDh8RefUR4ZrQk53Qh6USTs7kDxxFS'
let decomp = Keys.DecompressWIF(compr)
console.log(compr)

let legacy = Keys.CompressedPrivateKeyToLegacyAddress(compr)
console.log(legacy)

let legacyD = Keys.PrivateKeyToLegacyAddress(decomp)
console.log(legacyD)

let segwit = Keys.CompressedPrivateKeyToSegwitAddress(compr)
console.log(segwit)

let bech32 = Keys.CompressedPrivateKeyToBech32Address(compr);
console.log(bech32)

let mnemonic = Keys.GenerateRandomBip39Mnemonic(12)
console.log(mnemonic)

let isValid = Keys.VerifyBip39Mnemonic(mnemonic);
console.log(isValid)

Keys.GetSeedFromMnemonic(mnemonic)

console.log(Keys.ValidateBitcoinAddress(bech32))

let tDecomp = Keys.GenerateRandomTestnetPrivateKey();
console.log(tDecomp)

let tComp = Keys.CompressTestnetWIF(tDecomp)
console.log(tComp)

let tKeyFromNum = Keys.GenerateCompressedTestnetPrivateKeyFromNumber("1")
console.log(tKeyFromNum)
