// enum DiscountType {
//     Standard,
//     Seasonal,
//     Weight
// }

// function getDiscountedPrice(cartWeight: number, totalPrice: number, discountType: DiscountType): number {
//     let res: number = 0;

//     switch (discountType) {
//             case DiscountType.Standard:
//                 res = totalPrice * (1 - 0.06);
//                 break;
//             case DiscountType.Seasonal:
//                 res = totalPrice * (1 - 0.12);
//                 break;
//             case DiscountType.Weight:
//                 if (cartWeight <= 10) {
//                     res = totalPrice * (1 - 0.06);
//                 } else if (cartWeight > 10) {
//                     res = totalPrice * (1 - 0.18);
//                 }
//                 break;
//             default:
//                 break;
//     }
    
//     return res;
// }

// console.log("Result:",getDiscountedPrice(12, 100, DiscountType.Weight));

enum DiscountType {
  Standard,
  Seasonal,
  Weight,
}

const RATES = {
  standard: 0.06,
  seasonal: 0.12,
  weightLight: 0.06,
  weightHeavy: 0.18,
} as const;

const HEAVY_CART_THRESHOLD_KG = 10;

function getDiscountRate(cartWeight: number, type: DiscountType): number {
  switch (type) {
    case DiscountType.Standard:
      return RATES.standard;
    case DiscountType.Seasonal:
      return RATES.seasonal;
    case DiscountType.Weight:
      return cartWeight > HEAVY_CART_THRESHOLD_KG
        ? RATES.weightHeavy
        : RATES.weightLight;
    default: {
      const _exhaustive: never = type; // compile error if a case is missed
      throw new Error(`Unknown discount type: ${_exhaustive}`);
    }
  }
}

function getDiscountedPrice(
  cartWeight: number,
  totalPrice: number,
  discountType: DiscountType
): number {
  const rate = getDiscountRate(cartWeight, discountType);
  return Math.round(totalPrice * (1 - rate) * 100) / 100;
}

console.log("Result:", getDiscountedPrice(12, 100, DiscountType.Weight)); // 82