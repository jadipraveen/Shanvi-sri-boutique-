import React, { useRef, useState } from 'react';
import { PortfolioItem } from '../data/portfolioData';
import { 
  X, 
  Upload, 
  Trash2, 
  CheckCircle2, 
  Image as ImageIcon, 
  Sparkles, 
  Camera, 
  Layers,
  Loader2,
  FolderUp
} from 'lucide-react';
import { 
  saveCustomPhoto, 
  saveMultipleCustomPhotos, 
  removeCustomPhoto, 
  clearAllCustomPhotos, 
  compressImageFile 
} from '../utils/photoStorage';

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingStatus, setProcessingStatus] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const singleFileInputRef = useRef<HTMLInputElement>(null);
  const multiFileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleSingleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedSlotId) return;

    try {
      setIsProcessing(true);
      setProcessingStatus('Optimizing & saving photo...');
      const compressed = await compressImageFile(file);
      saveCustomPhoto(selectedSlotId, compressed);
      onPhotosUpdated();
    } catch (err) {
      console.error('Failed to process image', err);
    } finally {
      setIsProcessing(false);
      setProcessingStatus('');
      if (singleFileInputRef.current) singleFileInputRef.current.value = '';
    }
  };

  const handleMultiFileUpload = async (files: FileList | null) => {
    if (!files || files.length === 0) return;

    try {
      setIsProcessing(true);
      setProcessingStatus(`Processing ${files.length} photos...`);

      const photoMap: Record<string, string> = {};
      const fileArray = Array.from(files);

      // Match files sequentially to available slots starting with un-uploaded slots or in order
      const slotOrder = [...items.map(it => it.id)];
      for (let i = 0; i < fileArray.length && i < slotOrder.length; i++) {
        const file = fileArray[i];
        const slotId = slotOrder[i];
        setProcessingStatus(`Optimizing photo ${i + 1} of ${fileArray.length}...`);
        const compressed = await compressImageFile(file);
        photoMap[slotId] = compressed;
      }

      saveMultipleCustomPhotos(photoMap);
      onPhotosUpdated();
    } catch (err) {
      console.error('Error during batch photo upload', err);
    } finally {
      setIsProcessing(false);
      setProcessingStatus('');
      if (multiFileInputRef.current) multiFileInputRef.current.value = '';
    }
  };

  const handleRemovePhoto = (id: string) => {
    removeCustomPhoto(id);
    onPhotosUpdated();
  };

  const handleResetAll = () => {
    if (window.confirm('Reset all photo slots back to artisan visuals?')) {
      clearAllCustomPhotos();
      onPhotosUpdated();
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      if (e.dataTransfer.files.length === 1 && selectedSlotId) {
        try {
          setIsProcessing(true);
          setProcessingStatus('Saving dropped image...');
          const compressed = await compressImageFile(e.dataTransfer.files[0]);
          saveCustomPhoto(selectedSlotId, compressed);
          onPhotosUpdated();
        } finally {
          setIsProcessing(false);
          setProcessingStatus('');
        }
      } else {
        await handleMultiFileUpload(e.dataTransfer.files);
      }
    }
  };

  const selectedItem = items.find((it) => it.id === selectedSlotId);
  const selectedPhoto = selectedItem ? customPhotos[selectedItem.id] : null;
  const uploadedCount = Object.keys(customPhotos).length;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="photo-manager-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div 
        className="relative z-10 w-full max-w-4xl bg-[#170307] border border-[#D4AF37]/40 rounded-sm overflow-hidden shadow-2xl max-h-[92vh] flex flex-col"
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        {/* Header */}
        <div className="p-4 sm:p-6 bg-[#21050D] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#3D0A16] border border-[#D4AF37]/50 flex items-center justify-center text-[#DFBE68]">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 id="photo-manager-modal-title" className="font-serif text-lg sm:text-2xl font-bold text-[#F9F6F0]">
                  Add Boutique Photos / ఫోటోలు జోడించండి
                </h3>
                <span className="text-[11px] font-mono text-[#25D366] bg-[#0E2F1B] border border-[#25D366]/40 px-2 py-0.5 rounded-sm">
                  {uploadedCount} / {items.length} Uploaded
                </span>
              </div>
              <p className="text-xs text-[#C5B7A5] mt-0.5">
                Upload your actual real shop, boutique interior, embroidery and blouse photos.
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

        {/* Top Quick Batch Upload Banner */}
        <div className="px-6 py-3 bg-[#28060F] border-b border-[#D4AF37]/20 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-[#E5D7C5]">
            <FolderUp className="w-4 h-4 text-[#DFBE68]" />
            <span>Have multiple photos? Select them all at once:</span>
          </div>

          <button
            onClick={() => multiFileInputRef.current?.click()}
            disabled={isProcessing}
            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider bg-[#3D0A16] hover:bg-[#520C1D] text-[#F3E5AB] border border-[#D4AF37]/50 rounded-sm transition-colors cursor-pointer disabled:opacity-50"
          >
            <Layers className="w-3.5 h-3.5 text-[#DFBE68]" />
            <span>Select Multiple Photos (అన్నీ ఒకేసారి ఎంచుకోండి)</span>
          </button>
        </div>

        {/* Hidden File Inputs */}
        <input
          ref={singleFileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleSingleFileUpload}
        />
        <input
          ref={multiFileInputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => handleMultiFileUpload(e.target.files)}
        />

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#160307]">
          
          {/* Left: 10 Photo Slots List */}
          <div className="md:col-span-6 space-y-2 max-h-[460px] overflow-y-auto pr-2">
            <span className="text-xs uppercase font-semibold text-[#DFBE68] tracking-wider block mb-2">
              Select Design Slot (10 Portfolio Slots)
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
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#25D366] bg-[#0E2F1B] px-2 py-0.5 rounded-sm border border-[#25D366]/40">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Added</span>
                      </span>
                    ) : (
                      <span className="text-[11px] text-[#DFBE68]/70 bg-[#25050C] px-2 py-0.5 rounded border border-[#D4AF37]/20">
                        Placeholder
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
                <div 
                  onClick={() => singleFileInputRef.current?.click()}
                  className={`relative aspect-[4/3] w-full rounded-sm overflow-hidden border cursor-pointer group transition-all mb-4 ${
                    isDragging 
                      ? 'border-[#DFBE68] bg-[#3B0715]' 
                      : 'border-[#D4AF37]/40 bg-[#120205] hover:border-[#DFBE68]'
                  }`}
                >
                  {selectedPhoto ? (
                    <>
                      <img
                        src={selectedPhoto}
                        alt={selectedItem.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity text-white">
                        <Upload className="w-6 h-6 text-[#DFBE68] mb-1" />
                        <span className="text-xs font-semibold">Click to Replace Photo</span>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#D4C3B2] group-hover:bg-[#20040B] transition-colors">
                      <Sparkles className="w-8 h-8 text-[#DFBE68] mb-2 group-hover:scale-110 transition-transform" />
                      <p className="font-serif text-sm font-semibold text-[#F9F6F0]">
                        Click to Add Photo / ఫోటో జోడించండి
                      </p>
                      <p className="text-xs text-[#A89887] mt-1">
                        Select an image from your device or drag & drop here.
                      </p>
                    </div>
                  )}

                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/75 flex flex-col items-center justify-center text-[#DFBE68] gap-2">
                      <Loader2 className="w-8 h-8 animate-spin" />
                      <span className="text-xs">{processingStatus}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-[#C5B7A5] leading-relaxed mb-4">
                  {selectedItem.description}
                </p>

                {/* Upload / Replace Actions */}
                <div className="flex gap-2">
                  <button
                    onClick={() => singleFileInputRef.current?.click()}
                    disabled={isProcessing}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-[#DFBE68] to-[#D4AF37] hover:from-[#F3E5AB] hover:to-[#DFBE68] text-[#240409] font-bold text-xs uppercase tracking-wider rounded-sm transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <Upload className="w-4 h-4 text-[#240409]" />
                    <span>{selectedPhoto ? 'Replace This Photo' : 'Upload Real Photo (ఫోటో ఎంచుకోండి)'}</span>
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
              {uploadedCount > 0 && (
                <button
                  onClick={handleResetAll}
                  className="text-[#E11D48] hover:underline cursor-pointer"
                >
                  Reset All Slots
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-[#21050D] border-t border-[#D4AF37]/30 flex items-center justify-between">
          <p className="text-xs text-[#A89887]">
            Tip: You can also share photos via WhatsApp with your customers!
          </p>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#310712] hover:bg-[#430A19] text-[#F3E5AB] text-xs uppercase tracking-wider font-semibold rounded-sm border border-[#D4AF37]/40 cursor-pointer"
          >
            Done (పూర్తయింది)
          </button>
        </div>
      </div>
    </div>
  );
};
