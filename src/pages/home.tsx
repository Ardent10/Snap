import FileUploadDropzone from "../components/Dropzone";
import { useState } from "react";
import Toast from "../components/Toast";
import Layout from "../components/Layout";

export default function Home() {
  const [fileErrorMsg, setFileSizeErrorMsg] = useState<string>("");
  const [file, setFile] = useState<File | null>();

  function handleChange(files: File[]) {
    fileErrorMsg != "" && setFileSizeErrorMsg("");

    if (files != null && files["length"] != 0) {
      const file: File = files[0];

      if (!file.name.toLocaleLowerCase().endsWith(".pdf")) {
        setFileSizeErrorMsg("Only PDF files are allowed.");
        return;
      } else if (file?.size > 4000000) {
        setFileSizeErrorMsg("File size should be less than 4MB.");
        return;
      }

      setFile(file);
    } else {
      setFileSizeErrorMsg("");
      setFile(null);
    }
  }

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(file);
  };

  return (
    <Layout>
      <div>
        <form onSubmit={handleSubmit} className="py-4 max-w-sm mx-auto">
          <FileUploadDropzone
            setDragAndDropFiles={(files: File[]) => handleChange(files)}
            handleRemoveFile={handleRemoveFile}
            file={file}
          />
          {file && (
            <div className="w-auto py-2">
              <button
                type="submit"
                className="min-w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          )}
        </form>
        <Toast msg={fileErrorMsg} type="error" />
      </div>
    </Layout>
  );
}
