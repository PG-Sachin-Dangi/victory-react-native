export const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const lineChartData = Array.from({ length: 12 }, (_, index) => ({
  x: months[index],
  y: 50 * Math.random(),
}));

export const barChartData = Array.from({ length: 12 }, (_, index) => ({
  x: months[index],
  // any 4 values 100 others 0 at random
  y: Math.random() > 0.5 ? 100 : 0,
}));

// create an array from lineChartData by randomly selecting any 4 of its values
export const editedListingsData = lineChartData.map((item) => {
  if (Math.random() > 0.75) {
    return item;
  }
  return {
    x: item.x,
    y: -1,
  };
});
