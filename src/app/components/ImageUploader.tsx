"use client";
import { useState } from "react";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleUpload = async () => {
    setLoading(true);
    if (!selectedImage) {
      setLoading(false);
      setError("Upload file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "my_unsigned_preset"); // Set in Cloudinary

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);
    setLoading(false);
  };

  return (
    <>
      <div>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            console.log("file", file);
            if (file) {
              setSelectedImage(file);
            }
          }}
        />
        <button
          className=" py-2 px-3 bg-green-500 text-white rounded-lg"
          onClick={handleUpload}
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </div>
      {error && <span className="text-red-500">{error}</span>}
    </>
  );
}
