import cloudinary from "@/app/lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.search
      //   .expression("folder:photo_album_app_pics") // Customize folder if as needed
      .sort_by("created_at", "desc")
      .max_results(30)
      .execute();

    console.log("api result ", result);

    return new Response(JSON.stringify(result), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error || "Failed to fetch images" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
