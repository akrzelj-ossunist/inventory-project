import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";

const ImageDropzone: React.FC = () => {
  const [images, setImages] = useState([]);
  const onDrop = useCallback((acceptedFiles: any[]) => {
    images.push(acceptedFiles[0].path);
    console.log(acceptedFiles[0].path);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/*",
  });
  return (
    <>
      <div {...getRootProps()} className="w-[50%] h-[200px] bg-gray-400">
        <input {...getInputProps()} />
        <div className="flex flex-wrap">
          {images.map((img) => {
            return (
              <Image src={`/${img}`} alt="image" width={100} height={100} />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center py-4 px-6 bg-gray-200 w-[50%] rounded-lg my-10">
        <p>Drop files here to start uploading... or</p>
        <input
          type="file"
          className="text-white bg-gray-600 py-1 px-2 mt-2 rounded-md"
        />
      </div>
    </>
  );
};

export default ImageDropzone;
