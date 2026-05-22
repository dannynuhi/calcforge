export const categoryIntros: Record<string, { summary: string; tips: string[] }> = {
  construction: {
    summary: "Construction estimates are most useful when the dimensions, waste allowance, and unit conversions are visible. These tools help plan material quantities before you compare supplier pricing or contractor quotes.",
    tips: ["Measure twice before ordering.", "Keep waste allowance visible.", "Check product coverage on the label."],
  },
  finance: {
    summary: "Finance calculators help compare payments, interest, savings, returns, and payoff timelines. They are educational estimates and should be checked against lender or account documents.",
    tips: ["Compare more than one scenario.", "Watch the rate and time period.", "Separate fees from principal."],
  },
  health: {
    summary: "Health calculators provide everyday planning estimates for body measurements, hydration, calories, macros, and activity. They are informational and not a substitute for medical advice.",
    tips: ["Use current measurements.", "Treat results as ranges.", "Ask a clinician for personal medical decisions."],
  },
  math: {
    summary: "Math tools make common arithmetic and formula checks easier to audit. They are useful for quick estimates, homework checks, and everyday planning problems.",
    tips: ["Write the formula first.", "Check units and notation.", "Round only at the end."],
  },
  conversion: {
    summary: "Conversion calculators help move between common unit systems without burying the conversion factor. They are especially useful before material, recipe, travel, or measurement decisions.",
    tips: ["Confirm the source unit.", "Use one factor at a time.", "Keep enough decimal precision."],
  },
  time: {
    summary: "Time calculators help estimate ages, date ranges, work hours, and business-day schedules. Results can change when timezones, holidays, or endpoint rules differ.",
    tips: ["Define whether endpoints count.", "Check timezone assumptions.", "Handle holidays separately when needed."],
  },
};
