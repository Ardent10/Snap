import { useDropzone } from "react-dropzone";
import PdfPreview from "../PdfPreview";

interface props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setDragAndDropFiles: any;
  file: File | null | undefined;
  handleRemoveFile: () => void;
}

export default function Dropzone({
  setDragAndDropFiles,
  file,
  handleRemoveFile,
}: props) {
  const onDrop = (acceptedFiles: { name: string }[]) => {
    setDragAndDropFiles(acceptedFiles);
  };
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
  });
  return (
    <>
      {file ? (
        <PdfPreview file={file} handleRemoveFile={handleRemoveFile} />
      ) : (
        <div className="cursor-pointer border-dashed border-2 border-white rounded-xl">
          <div
            {...getRootProps({
              className: "dropzone-fileupload row px-16 py-24",
            })}
          >
            <input
              id="pdf-input"
              {...getInputProps()}
              type="file"
              accept="pdf"
              style={{ display: "none" }}
            />
            <div className="flex flex-col items-center">
              <img src="./assets/upload.svg" width="30px" alt="upload" />
              <h1>Choose or Drag & drop files here</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
