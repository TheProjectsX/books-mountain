/**
 * Utility functions for Books Mountain
 */

/**
 * Format integer price (e.g. 240000 poisha/cents) into currency string (e.g. "৳ 2,400.00" or "BDT 2,400.00")
 */
export function formatCurrency(amount: number, currency: string = 'BDT'): string {
  const mainUnit = amount / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency === 'BDT' ? 'BDT' : currency,
    minimumFractionDigits: 2,
  })
    .format(mainUnit)
    .replace('BDT', '৳');
}

/**
 * Convert title to URL slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
