const formateDate = (then, now = new Date()) => {
  const timeDiff = now.getTime() - then.getTime();

  const yearsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  if (yearsDiff > 0) return `${yearsDiff} years ago`;

  const monthsDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30));
  if (monthsDiff > 0) return `${monthsDiff} months ago`;

  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  if (daysDiff > 0) return `${daysDiff} days ago`;

  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));
  if (hoursDiff > 0) return `${hoursDiff} hours ago`;

  const minutesDiff = Math.floor(timeDiff / (1000 * 60));
  return minutesDiff > 0 ? `${minutesDiff} minutes ago` : `< 1 minute ago`;
};

export default formateDate;
