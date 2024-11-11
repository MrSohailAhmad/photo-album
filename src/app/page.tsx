import ImageUploader from "./components/ImageUploader";
import Album from "./components/Album";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start w-full h-screen">
      <div className="flex sticky flex-col gap-5 top-0 bg-gray-100 items-center justify-center w-full h-[8rem]">
        <h1 className="text-xl font-bold">Photo Album</h1>
        <ImageUploader />
      </div>
      <Album />
    </div>
  );
}
