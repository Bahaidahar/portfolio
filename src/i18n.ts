import { getRequestConfig } from "next-intl/server";

export const locales = ["en", "ru", "kz"];
export const defaultLocale = "ru";

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`../messages/${locale}.json`)).default,
}));
