const truncateAddress = (address: string, chars = 12) => {
  return `${address.substring(0, chars + 1)}...${address.substring(
    42 - chars
  )}`;
};

export default truncateAddress;
