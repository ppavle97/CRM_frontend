export function setCookie(name: string, value: string, days: number): void {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + days);

  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(
    value
  )}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieValue;
}

export function removeCookie(name: string): void {
  document.cookie = `${encodeURIComponent(
    name
  )}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

export function getCookie(name: string): string | null {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();

    if (cookie.startsWith(`${encodeURIComponent(name)}=`)) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }

  return null;
}
