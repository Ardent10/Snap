import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import Tooltip from "../Component";
import { Loader } from "../Loader";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

interface PdfPreviewProps {
  file: File;
  handleRemoveFile: () => void;
}

export default function PdfPreview({
  file,
  handleRemoveFile,
}: PdfPreviewProps) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  function nextPage() {
    numPages &&
      setPageNumber((prev) => (prev < numPages ? prev + 1 : numPages));
  }

  function prevPage() {
    setPageNumber((prev) => (prev <= 1 ? 1 : prev - 1));
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative block shadow-2xl h-auto w-auto max-w-[180px] rounded-lg p-3 bg-[#fdfdfd] cursor-pointer border-2 border-transparent transition-all duration-200 hover:border-indigo-500">
        <div
          className="absolute z-10 top-0 right-0 p-1/2 hover:scale-110 transition-all duration-200 rounded-full cursor-pointer"
          onClick={handleRemoveFile}
        >
          <img src="./assets/close.svg" width="20px" alt="close" />
        </div>
        <Tooltip label={file?.size?.toString()}>
          <Document
            file={file}
            loading={<Loader />}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page
              width={150}
              pageNumber={pageNumber}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          </Document>
        </Tooltip>
      </div>
      {numPages !== undefined && numPages > 1 && (
        /* PDF Controls */
        <div
          className="flex flex-col pt-2 cursor-pointer"
          id="control-container"
        >
          <div className="flex justify-between">
            <img
              src="./assets/prev.svg"
              width="20px"
              alt="prev"
              onClick={prevPage}
            />
            <img
              src="./assets/next.svg"
              width="20px"
              alt="next"
              onClick={nextPage}
            />
          </div>
          <p className="text-xs">
            Page {pageNumber} of {numPages}
          </p>
        </div>
      )}
      <h1 className="p-1 text-xs text-white">{file?.name}</h1>
    </div>
  );
}
