const STORAGE_KEY = 'shanvi_sri_custom_photos_v1';

export function getCustomPhotos(): Record<string, string> {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch {
    return {};
  }
}

export function saveCustomPhoto(id: string, dataUrl: string): void {
  try {
    const photos = getCustomPhotos();
    photos[id] = dataUrl;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  } catch (e) {
    console.warn('Could not save photo to localStorage', e);
  }
}

export function removeCustomPhoto(id: string): void {
  try {
    const photos = getCustomPhotos();
    delete photos[id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  } catch (e) {
    console.warn('Could not remove photo from localStorage', e);
  }
}

export function clearAllCustomPhotos(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Could not clear photos', e);
  }
}
