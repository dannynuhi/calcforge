export type CalculationInput = Record<string, number>;

const conversionFactors: Record<string, number> = {
  "inches-to-cm": 2.54,
  "feet-to-meters": 0.3048,
  "pounds-to-kg": 0.45359237,
  "gallons-to-liters": 3.785411784,
  "square-feet-to-square-meters": 0.09290304,
  "miles-to-kilometers": 1.609344,
  "ounces-to-grams": 28.349523125,
  "cups-to-milliliters": 236.5882365,
  "acres-to-square-feet": 43560,
  "yards-to-meters": 0.9144,
  "liters-to-gallons": 0.2641720524,
  "kilograms-to-pounds": 2.2046226218,
  "centimeters-to-inches": 0.3937007874,
  "meters-to-feet": 3.280839895,
  "kilometers-to-miles": 0.6213711922,
  "hectares-to-acres": 2.4710538147,
  "mph-to-kph": 1.609344,
  "square-meters-to-square-feet": 10.763910417,
};

export function calculate(type: string, slug: string, values: CalculationInput) {
  if (slug === "celsius-to-fahrenheit") return values.value * 1.8 + 32;
  if (slug === "fahrenheit-to-celsius") return (values.value - 32) / 1.8;

  if (type === "conversion") return values.value * (conversionFactors[slug] ?? 1);

  if (type === "material") {
    const cubicFeet = values.length * values.width * (values.depth / 12);
    return cubicFeet * (1 + values.waste / 100);
  }

  if (type === "finance") {
    const monthlyRate = values.rate / 100 / 12;
    const months = Math.max(values.years * 12, 1);
    if (slug.includes("loan") || slug.includes("mortgage") || slug.includes("payoff")) {
      if (monthlyRate === 0) return values.principal / months;
      return (values.principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
    }
    return values.principal * Math.pow(1 + values.rate / 100, values.years) + values.monthly * months;
  }

  if (type === "health") {
    if (slug === "bmi") return (values.weight / (values.height * values.height)) * 703;
    if (slug.includes("water")) return values.weight * 0.5;
    if (slug.includes("protein")) return values.weight * 0.8;
    return (10 * values.weight * 0.453592 + 6.25 * values.height * 2.54 - 5 * values.age + 5) * values.activity;
  }

  if (type === "time") return Math.max(values.end - values.start, 0) * (values.hours || 1);

  if (slug === "percentage") return (values.a / 100) * values.b;
  if (slug === "ratio") return values.b === 0 ? 0 : values.a / values.b;
  if (slug === "slope") return values.b === 0 ? 0 : (values.c - values.a) / values.b;
  if (slug === "probability") return values.b === 0 ? 0 : values.a / values.b;
  return values.a + values.b + values.c;
}
