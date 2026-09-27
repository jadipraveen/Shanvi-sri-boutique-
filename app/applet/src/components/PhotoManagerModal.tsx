import React, { useRef, useState } from 'react';
import { PortfolioItem } from '../data/portfolioData';
import { X, Upload, Trash2, CheckCircle2, Image as ImageIcon, Sparkles } from 'lucide-react';
import { saveCustomPhoto, removeCustomPhoto, clearAllCustomPhotos } from '../utils/photoStorage';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: PortfolioItem[];
  customPhotos: Record<string, string>;
  onPhotosUpdated: () => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({
  isOpen,
  onClose,
  items,
  customPhotos,
  onPhotosUpdated
}) => {
  const [selectedSlotId, setSelectedSlotId] = useState<string>(items[0]?.id || '');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedSlotId) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        saveCustomPhoto(selectedSlotId, dataUrl);
        onPhotosUpdated();
      }
    };
    reader.readAsDataURL(file);
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemovePhoto = (id: string) => {
    removeCustomPhoto(id);
    onPhotosUpdated();
  };

  const handleResetAll = () => {
    if (window.confirm('Reset all slots to default artisan illustrations?')) {
      clearAllCustomPhotos();
      onPhotosUpdated();
    }
  };

  const selectedItem = items.find((it) => it.id === selectedSlotId);
  const selectedPhoto = selectedItem ? customPhotos[selectedItem.id] : null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-manager-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-4xl bg-[#170307] border border-[#D4AF37]/40 rounded-sm overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#21050D] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#3D0A16] border border-[#D4AF37]/50 flex items-center justify-center text-[#DFBE68]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 id="photo-manager-modal-title" className="font-serif text-xl sm:text-2xl font-bold text-[#F9F6F0]">
                Boutique Photo & Portfolio Manager
              </h3>
              <p className="text-xs text-[#C5B7A5]">
                Upload your actual real shop and blouse photos directly to replace illustrations.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#DFBE68] hover:text-[#F9F6F0] rounded-full hover:bg-[#340710] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#160307]">
          
          {/* Left: 10 Photo Slots List */}
          <div className="md:col-span-6 space-y-2 max-h-[500px] overflow-y-auto pr-2">
            <span className="text-xs uppercase font-semibold text-[#DFBE68] tracking-wider block mb-2">
              Select A Showcase Slot (10 Items)
            </span>

            {items.map((item) => {
              const hasCustom = Boolean(customPhotos[item.id]);
              const isSelected = item.id === selectedSlotId;

              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedSlotId(item.id)}
                  className={`p-3 rounded-sm border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-[#310712] border-[#DFBE68] text-[#F9F6F0]'
                      : 'bg-[#1E040B] border-[#D4AF37]/20 hover:border-[#D4AF37]/50 text-[#D4C3B2]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-[#DFBE68]">#{item.number}</span>
                    <div>
                      <h4 className="font-serif text-sm font-bold text-[#F9F6F0] leading-tight">
                        {item.title}
                      </h4>
                      <span className="text-[11px] text-[#A89887]">{item.category}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {hasCustom ? (
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#25D366] bg-[#0E2F1B] px-2 py-0.5 rounded-full border border-[#25D366]/40">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Uploaded</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#DFBE68]/70 bg-[#25050C] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                        Artwork
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Slot Action & Preview */}
          <div className="md:col-span-6 flex flex-col justify-between bg-[#1D040C] p-5 border border-[#D4AF37]/30 rounded-sm">
            {selectedItem && (
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-semibold text-[#DFBE68] tracking-wider">
                    Slot #{selectedItem.number} Preview
                  </span>
                  <span className="text-xs text-[#E5D7C5] font-serif">{selectedItem.title}</span>
                </div>

                {/* Preview Box */}
                <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden border border-[#D4AF37]/40 bg-[#120205] mb-4">
                  {selectedPhoto ? (
                    <img
                      src={selectedPhoto}
                      alt={selectedItem.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#D4C3B2]">
                      <Sparkles className="w-8 h-8 text-[#DFBE68] mb-2" />
                      <p className="font-serif text-sm font-semibold text-[#F9F6F0]">
                        Default Artisanal Visual Active
                      </p>
                      <p className="text-xs text-[#A89887] mt-1">
                        Upload your real photo of this design below.
                      </p>
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#C5B7A5] leading-relaxed mb-4">
                  {selectedItem.description}
                </p>

                {/* Upload / Replace Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-[#DFBE68] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBE68] text-[#240409] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer"
                  >
                    <Upload className="w-4 h-4 text-[#240409]" />
                    <span>{selectedPhoto ? 'Replace Photo' : 'Upload Real Photo'}</span>
                  </button>

                  {selectedPhoto && (
                    <button
                      onClick={() => handleRemovePhoto(selectedItem.id)}
                      className="p-2.5 bg-[#2B050E] hover:bg-[#3D0814] text-[#E11D48] rounded-sm border border-[#E11D48]/40 transition-colors cursor-pointer"
                      title="Remove custom photo and restore illustration"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            )}

            <div className="pt-4 mt-4 border-t border-[#360913] flex items-center justify-between text-xs text-[#A89887]">
              <span>Changes take effect immediately</span>
              <button
                onClick={handleResetAll}
                className="text-[#E11D48] hover:underline cursor-pointer"
              >
                Reset All Slots
              </button>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#21050D] border-t border-[#D4AF37]/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#310712] hover:bg-[#430A19] text-[#F3E5AB] text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#D4AF37]/40 cursor-pointer"
          >
            Close Manager
          </button>
        </div>
      </div>
    </div>
  );
};
