import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';
import { cn } from '../lib/utils';

const UploadField = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid w-full max-w-4xl gap-4 mt-12">
      <label
        htmlFor="upload"
        className={cn(
          'flex flex-col items-center justify-center rounded-lg border border-dashed p-6',
          'bg-background hover:bg-accent/25 cursor-pointer'
        )}
      >
        <div className="flex flex-col items-center gap-2">
          <UploadCloud className="h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium">
            Drop your image here or click to upload
          </p>
          <p className="text-xs text-muted-foreground">
            Supported formats: JPEG, PNG
          </p>
        </div>
        <input
          id="upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {selectedFile && (
        <p className="text-sm text-muted-foreground">
          Selected: {selectedFile.name}
        </p>
      )}

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="rounded-lg max-h-[200px] w-full object-contain"
        />
      )}
    </div>
  );
};

export default UploadField;
