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

export function saveMultipleCustomPhotos(photosMap: Record<string, string>): void {
  try {
    const photos = getCustomPhotos();
    Object.assign(photos, photosMap);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
  } catch (e) {
    console.warn('Could not save multiple photos to localStorage', e);
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

/**
 * Compresses an image file (useful for phone camera photos) using HTML Canvas
 * to ensure high visual fidelity while staying within storage bounds.
 */
export async function compressImageFile(
  file: File,
  maxDimension = 1600,
  quality = 0.85
): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      const img = new Image();
      img.onerror = reject;
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxDimension || height > maxDimension) {
          if (width > height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(reader.result as string);
          return;
        }

        // Fill with white background in case of transparent png
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);

        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
