
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Upload, X, FileText, Image as ImageIcon, CheckCircle } from 'lucide-react';

interface FileUploadProps {
  onFilesChange: (files: File[]) => void;
  maxFiles?: number;
  maxSize?: number;
  acceptedFileTypes?: string[];
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFilesChange,
  maxFiles = 5,
  maxSize = 10 * 1024 * 1024, // 10MB
  acceptedFileTypes = ['image/*', 'application/pdf']
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadProgress, setUploadProgress] = useState<{ [key: string]: number }>({});

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = [...files, ...acceptedFiles].slice(0, maxFiles);
    setFiles(newFiles);
    onFilesChange(newFiles);

    // Simulate upload progress
    acceptedFiles.forEach(file => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(prev => ({ ...prev, [file.name]: progress }));
        if (progress >= 100) {
          clearInterval(interval);
        }
      }, 100);
    });
  }, [files, maxFiles, onFilesChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedFileTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxSize,
    multiple: true,
    disabled: files.length >= maxFiles
  });

  const removeFile = (fileName: string) => {
    const newFiles = files.filter(file => file.name !== fileName);
    setFiles(newFiles);
    onFilesChange(newFiles);
    setUploadProgress(prev => {
      const { [fileName]: removed, ...rest } = prev;
      return rest;
    });
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) {
      return <ImageIcon className="w-5 h-5 text-blue-500" />;
    } else if (file.type === 'application/pdf') {
      return <FileText className="w-5 h-5 text-red-500" />;
    }
    return <FileText className="w-5 h-5 text-gray-500" />;
  };

  return (
    <div className="space-y-4">
      {/* Drop Zone */}
      <Card
        {...getRootProps()}
        className={`p-8 border-2 border-dashed transition-all cursor-pointer ${
          isDragActive
            ? 'border-blue-500 bg-blue-50'
            : files.length >= maxFiles
            ? 'border-gray-300 bg-gray-50 cursor-not-allowed'
            : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
        }`}
      >
        <input {...getInputProps()} />
        <div className="text-center">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          {isDragActive ? (
            <p className="text-blue-600 font-medium">Drop the files here...</p>
          ) : files.length >= maxFiles ? (
            <p className="text-gray-500">Maximum number of files reached</p>
          ) : (
            <div>
              <p className="text-gray-600 mb-2">
                Drag & drop files here, or <span className="text-blue-600 font-medium">browse</span>
              </p>
              <p className="text-sm text-gray-500">
                Supports PDF and images up to {formatFileSize(maxSize)} each
              </p>
            </div>
          )}
        </div>
      </Card>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-medium text-gray-800">Uploaded Files ({files.length}/{maxFiles})</h4>
          {files.map((file) => (
            <Card key={file.name} className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  {getFileIcon(file)}
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  {uploadProgress[file.name] !== undefined && uploadProgress[file.name] < 100 ? (
                    <div className="flex items-center space-x-2">
                      <Progress value={uploadProgress[file.name]} className="w-20" />
                      <span className="text-xs text-gray-500">
                        {uploadProgress[file.name]}%
                      </span>
                    </div>
                  ) : uploadProgress[file.name] === 100 ? (
                    <Badge className="bg-green-100 text-green-800 border-green-200">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Uploaded
                    </Badge>
                  ) : null}

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(file.name)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
