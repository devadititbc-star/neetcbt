import React, { useState } from 'react';
import {
  X,
  BookMarked,
  Download,
  CheckCircle2,
  Bookmark,
  FileText,
  Star
} from 'lucide-react';
import { BookItem } from '../types';

interface BookReaderModalProps {
  book: BookItem;
  onClose: () => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({
  book,
  onClose
}) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden flex flex-col text-gray-900 animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="px-5 py-3.5 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded bg-blue-50 text-blue-700 flex items-center justify-center border border-blue-200">
              <BookMarked className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-gray-100 text-gray-700 uppercase border border-gray-200">
                {book.category} &bull; {book.subject}
              </span>
              <h2 className="text-xs sm:text-sm font-bold text-gray-900 truncate max-w-md mt-0.5">
                {book.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Reader Preview Content */}
        <div className="p-5 space-y-4 max-h-[65vh] overflow-y-auto custom-scrollbar">
          <div className="p-3.5 rounded bg-gray-50 border border-gray-200 space-y-1.5">
            <div className="flex items-center justify-between text-xs text-gray-600">
              <span>Pages: <strong className="text-gray-900">{book.pages}</strong></span>
              <span>File Size: <strong className="text-gray-900">{book.size}</strong></span>
              <span className="text-amber-700 font-bold">★ {book.rating} / 5.0</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">{book.description}</p>
          </div>

          {/* Chapter Sample Section */}
          <div className="space-y-2.5">
            <h3 className="text-xs font-bold text-blue-700 uppercase tracking-wider">
              High-Yield Key Chapters & Notes Preview
            </h3>

            <div className="space-y-2">
              <div className="p-3.5 rounded bg-white border border-gray-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                  <span>Chapter 01: Core Principles & High-Yield NCERT Highlights</span>
                  <span className="text-emerald-700 text-[10px] px-1.5 py-0.2 rounded bg-emerald-50 border border-emerald-200">Verified NTA 2026</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  &bull; Complete NCERT text with examiner-marked traps and exceptions highlighted in color codes.
                  <br />
                  &bull; Includes 45 high-frequency previous year questions linked with exact page references.
                </p>
              </div>

              <div className="p-3.5 rounded bg-white border border-gray-200 space-y-1.5">
                <div className="flex items-center justify-between text-xs font-bold text-gray-900">
                  <span>Chapter 02: Formulas, Reagents & Reaction Flowcharts</span>
                  <span className="text-blue-700 text-[10px] px-1.5 py-0.2 rounded bg-blue-50 border border-blue-200">Rapid Memory Tables</span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  &bull; 1-Page cheat sheets for quick morning revision before every mock test.
                  <br />
                  &bull; Mnemonic memory hooks to memorize exceptions without confusion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            PDF ready for offline reading and printing.
          </div>
          <button
            onClick={handleDownload}
            className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs flex items-center space-x-1.5 shadow-xs transition-colors"
          >
            {downloaded ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Downloaded Successfully</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Download Offline PDF</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
