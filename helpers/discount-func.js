export const discountPrice = (discount, price) => {
  const discountAmount = discount / 100;
  const totalAmount = price - price * discountAmount;
  return totalAmount;
};
