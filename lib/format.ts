export const titleCase = (value: string) =>
  value
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

export const formatNumber = (value: number, maximumFractionDigits = 2) =>
  new Intl.NumberFormat("en-US", { maximumFractionDigits }).format(Number.isFinite(value) ? value : 0);

export const absoluteUrl = (siteUrl: string, path: string) => new URL(path, siteUrl).toString();
