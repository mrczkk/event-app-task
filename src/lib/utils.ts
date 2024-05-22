import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dateFormat(
  date: string,
  locale?: string,
  options?: Intl.DateTimeFormatOptions
) {
  const formattedDate = new Date(date).toLocaleTimeString(locale, options);
  return formattedDate;
}

export const phoneRegex = new RegExp(/^(\(\d{3}\)|\d{3})-?\d{3}-?\d{4}$/);
