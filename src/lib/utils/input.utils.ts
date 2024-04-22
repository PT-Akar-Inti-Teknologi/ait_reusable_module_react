
export const emailRegExp = /^[\w.]+@[\w.]+\.[0-9a-z]{2,}$/;

export function cleanNumber(value?: string) {
  if (!!value) {
    const cleanNumber = value?.toString()?.replace(/[^\d]/g, '');
    return isNaN(+cleanNumber) ? undefined : +cleanNumber;
  }
  return (undefined);
}

export function formatCurrency(inputEl?: HTMLInputElement | null) {
  if (!!inputEl?.value) {
    const _cleanNumber = cleanNumber(inputEl.value);
    if (_cleanNumber !== undefined) {
      inputEl.value = _cleanNumber.toLocaleString('id-ID')
    }
  }
}
