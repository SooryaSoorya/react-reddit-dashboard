const formatUpvotes = (upvotes) => {
  if (upvotes > 999) {
    return `${Math.floor(upvotes / 100) / 10}k`;
  }
  return upvotes;
};

export default formatUpvotes;
