"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  const isVideo = (src: string) => {
    return src.endsWith(".mp4") || src.endsWith(".mov") || src.endsWith(".webm");
  };

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => {
        const video = isVideo(image.src);
        return video ? (
          <div
            key={index}
            style={{
              aspectRatio: image.orientation === "horizontal" ? "16 / 9" : "3 / 4",
              borderRadius: "var(--radius-m)",
              overflow: "hidden",
            }}
          >
            <video
              controls
              autoPlay={false}
              muted
              playsInline
              preload="metadata"
              crossOrigin="anonymous"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                console.error("Video loading error:", e, image.src);
              }}
            >
              <source 
                src={image.src} 
                type={image.src.endsWith(".mov") ? "video/quicktime" : image.src.endsWith(".mp4") ? "video/mp4" : "video/webm"} 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <Media
            enlarge
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, 50vw"
            key={index}
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
            src={image.src}
            alt={image.alt}
          />
        );
      })}
    </MasonryGrid>
  );
}
