import { useCallback, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import Image from "next/image";

const ImageDropzone: React.FC = () => {
  const [images, setImages] = useState<String[]>([]);
  const onDrop = useCallback((acceptedFiles: any[]) => {
    images.push(acceptedFiles[0].path);
    console.log(acceptedFiles[0].path);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    // accept: "image/*",
  });
  return (
    <>
      <div
        {...getRootProps()}
        className="w-[300px] h-[200px] bg-inherit border-4 border-blue-500 border-dotted "
      >
        <input {...getInputProps()} />
        <div className="flex flex-wrap h-full overflow-auto">
          {images.length ? (
            images.map((img) => {
              return (
                <Image
                  src={`/${img}`}
                  alt="image"
                  width={100}
                  height={100}
                  className="w-[95px] h-[95px]"
                />
              );
            })
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <p>Add image...</p>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-between items-center bg-gray-200 w-[300px] h-[150px] rounded-lg px-10 text-center">
        <p className="mt-[30px]">Drop files here to start uploading... or</p>
        <input
          type="file"
          className="text-white bg-gray-400 py-1 px-2 mt-2 rounded-md"
        />
      </div>
    </>
  );
};

export default ImageDropzone;
