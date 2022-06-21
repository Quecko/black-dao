import web3NoAccount from "./web3";
import StakePoolBNBForBNB from './StakePoolBNBForBNB.json'
import StakePoolBNBForToken from './StakePoolBNBForToken.json'
import StakePoolTokenForBNB from './StakePoolTokenForBNB.json'
import StakePoolTokenForToken from './StakePoolTokenForToken.json'
import approve from './approve.json'
const getContract = (abi, address, web3) => {
  const _web3 = web3 ?? web3NoAccount;
  return new _web3.eth.Contract(abi, address);
};

// export const tokenContract = (address, web3) => {
//     return getContract(tokenAbi, address, web3)
// }

// export const StakeContract = (address, web3) => {
//     return getContract(stakeAbi, address, web3)
// }

// export const ApproveContract = (address, web3) => {
//     return getContract(approveAbi, address, web3)
// }

// export const SkeletonContract = (address, web3) => {
//   return getContract(skeletonAbi, address, web3);
// };

export const approvePool = (address, web3) => {
  return getContract(approve, address, web3);
};
export const BNBForBNB = (address, web3) => {
  return getContract(StakePoolBNBForBNB, address, web3);
}
export const BNBForToken = (address, web3) => {
  return getContract(StakePoolBNBForToken, address, web3);
}
export const TokenForBNB = (address, web3) => {
  return getContract(StakePoolTokenForBNB, address, web3);
}
export const TokenForToken = (address, web3) => {
  return getContract(StakePoolTokenForToken, address, web3);
}