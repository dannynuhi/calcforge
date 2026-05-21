import type { Article } from "@/lib/content";

const categoryAdvice: Record<string, { method: string; caution: string; example: string }> = {
  construction: {
    method: "Measure the project area, convert all dimensions to the same unit, then add a waste allowance before buying materials.",
    caution: "Product coverage, cuts, slopes, and site conditions can change the final quantity.",
    example: "If a surface is 12 ft by 20 ft, start with 240 square feet, then add 10 percent waste for a planning total of 264 square feet.",
  },
  finance: {
    method: "Separate principal, rate, time, and payment frequency before comparing scenarios.",
    caution: "Fees, taxes, compounding schedules, and lender rules can make the real cost different from a simple estimate.",
    example: "A 6 percent annual rate is 0.5 percent per month, which is the rate used in most monthly payment estimates.",
  },
  health: {
    method: "Use current body measurements, choose a realistic activity level, and treat the output as a planning range.",
    caution: "Health calculators are screening and planning tools, not a diagnosis or personal medical advice.",
    example: "Changing activity from light to moderate can move a calorie estimate by several hundred calories per day.",
  },
  math: {
    method: "Write the relationship first, then substitute numbers after the units and order of operations are clear.",
    caution: "Most mistakes come from mixing percent, decimal, and ratio notation in the same step.",
    example: "Ten percent of 40 is 4 because 10 percent becomes 0.10 before multiplying.",
  },
  conversion: {
    method: "Use one conversion factor, multiply once, and round only after the calculation is complete.",
    caution: "Rounding too early can create visible errors when the converted value is used in a second calculation.",
    example: "To convert 10 inches to centimeters, multiply 10 by 2.54 for a result of 25.4 cm.",
  },
  time: {
    method: "Define whether endpoints count, whether weekends are included, and what a workday means before calculating.",
    caution: "Holiday schedules, overnight shifts, and local time zones can change the result.",
    example: "A Monday-to-Friday range can be 5 calendar days but only 4 elapsed 24-hour periods depending on the question.",
  },
};

export function articleCopy(article: Article) {
  const advice = categoryAdvice[article.category] ?? categoryAdvice.math;
  const title = article.title.toLowerCase();
  const checklist = title.includes("mistakes")
    ? ["Check units before calculating.", "Compare the result with a rough mental estimate.", "Document assumptions beside the final number."]
    : title.includes("cost")
      ? ["Separate quantity from price.", "Keep taxes, delivery, and waste visible.", "Recalculate when supplier prices change."]
      : title.includes("beginner")
        ? ["Start with one simple example.", "Change one input at a time.", "Save the formula for later checks."]
        : ["Name the output clearly.", "Use current inputs.", "Round the final answer to a useful precision."];

  return { ...advice, checklist };
}
