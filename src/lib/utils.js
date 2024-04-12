export function formatToTimeAgo(data) {
  const formatter = new Intl.RelativeTimeFormat("ko");
  const time = new Date(data).getTime();
  const now = new Date().getTime();
  const diff = time - now;

  if (Math.abs(diff) < 1000 * 60 * 60) {
    //1시간 이내
    const diffMinutes = Math.ceil(diff / (1000 * 60));
    return formatter.format(diffMinutes, "minutes");
  } else if (Math.abs(diff) < 1000 * 60 * 60 * 24) {
    // 1일 이내
    const diffHours = Math.ceil(diff / (1000 * 60 * 60));
    return formatter.format(diffHours, "hours");
  } else if (Math.abs(diff) < 1000 * 60 * 60 * 24 * 3) {
    // 3일 이내
    const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return formatter.format(diffDays, "day");
  } else {
    // 3일 이상
    return data.substr(0, 10);
  }
}
