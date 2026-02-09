/**
 * Input sanitization utilities for preventing XSS and ensuring data integrity.
 */

// Strip all HTML tags from a string
export function stripHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '');
}

// Sanitize general text input: strip HTML, trim, and enforce max length
export function sanitizeText(str, maxLength = 255) {
  if (typeof str !== 'string') return '';
  return stripHtml(str).trim().slice(0, maxLength);
}

// Sanitize and validate email format
export function sanitizeEmail(str) {
  if (typeof str !== 'string') return '';
  return str.trim().toLowerCase().slice(0, 254);
}

// Sanitize search query: strip HTML, remove dangerous characters, trim
export function sanitizeSearchQuery(str, maxLength = 100) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')
    .replace(/[<>"'`;(){}]/g, '')
    .trim()
    .slice(0, maxLength);
}

// Validate that a value is a safe positive integer within bounds
export function clampQuantity(value, min = 1, max = 99) {
  const num = parseInt(value, 10);
  if (isNaN(num) || num < min) return min;
  if (num > max) return max;
  return num;
}

// Validate cart item structure loaded from localStorage
export function validateCartItem(item) {
  if (!item || typeof item !== 'object') return null;
  
  const id = typeof item.id === 'number' && Number.isFinite(item.id) ? item.id : null;
  if (id === null) return null;

  const name = sanitizeText(item.name, 200);
  const price = typeof item.price === 'number' && Number.isFinite(item.price) && item.price >= 0 ? item.price : null;
  if (price === null) return null;

  const quantity = clampQuantity(item.quantity);
  const image = typeof item.image === 'string' && (item.image.startsWith('https://') || item.image.startsWith('/')) ? item.image : '';
  const category = sanitizeText(item.category || '', 100);
  const size = sanitizeText(item.size || '', 50);

  return { id, name, price, quantity, image, category, size };
}

// Validate an entire cart array from localStorage
export function validateCart(data) {
  if (!Array.isArray(data)) return [];
  return data.map(validateCartItem).filter(Boolean);
}

// Placeholder image if an image fails to load
export const FALLBACK_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"><rect fill="#f5f5f4" width="400" height="400"/><text fill="#a8a29e" font-family="sans-serif" font-size="14" text-anchor="middle" x="200" y="195">Image unavailable</text><path d="M180 220h40M190 210v20" stroke="#a8a29e" stroke-width="2" fill="none"/></svg>'
);
