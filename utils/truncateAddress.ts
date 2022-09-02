const truncateAddress = (address: string, chars = 4) => {
  return `${address.substring(0, chars + 1)}...${address.substring(
    42 - chars
  )}`;
};

export default truncateAddress;
