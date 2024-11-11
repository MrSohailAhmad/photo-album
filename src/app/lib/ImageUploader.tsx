"use client";
import { useState } from "react";

export default function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("upload_preset", "your_upload_preset"); // Configure in Cloudinary

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setSelectedImage(file);
          }
        }}
      />
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}
