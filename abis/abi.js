// [
//     "function join(address parent) external payable",
//     "function claim() external",
//     "function getNumOfOpenEnds() external view returns (uint256)",
//     "function getOpenEnds(uint256 num) external view returns (address[] memory)",
//     "function checkNode(address account) external view returns (Node memory)"
//   ]

export default [
  "function join() external payable",
  "function claim() external",
  "function getNumOfOpenEnds() external view returns (uint256)",
  "function getOpenEnds(uint256 num) external view returns (address[] memory)",
  "event availableList (uint[] listOfAddress )",
];
