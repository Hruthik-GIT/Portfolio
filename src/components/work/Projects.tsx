import { getPosts } from "@/utils/utils";
import { Column } from "@once-ui-system/core";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  exclude?: string[];
}

export function Projects({ range, exclude }: ProjectsProps) {
  let allProjects = getPosts(["src", "app", "work", "projects"]);

  // Exclude by slug (exact match)
  if (exclude && exclude.length > 0) {
    allProjects = allProjects.filter((post) => !exclude.includes(post.slug));
  }

  // Preferred order for Projects page
  const preferredOrder = [
    "building-once-ui-a-customizable-design-system",
    "ai-in-education",
    "automate-design-handovers-with-a-figma-to-code-pipeline",
    "ml-computer-vision-earthquake-prediction-model",
    "smart-e-secretary",
    "whatsapp-automation-software",
  ];
  const orderIndex = new Map(preferredOrder.map((slug, idx) => [slug, idx]));

  const sortedProjects = allProjects.sort((a, b) => {
    const aIdx = orderIndex.has(a.slug) ? (orderIndex.get(a.slug) as number) : Number.POSITIVE_INFINITY;
    const bIdx = orderIndex.has(b.slug) ? (orderIndex.get(b.slug) as number) : Number.POSITIVE_INFINITY;

    if (aIdx !== bIdx) return aIdx - bIdx;
    // Fallback: newest first
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const displayedProjects = range
    ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
    : sortedProjects;

  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {displayedProjects.map((post, index) => (
        <ProjectCard
          priority={index < 2}
          key={post.slug}
          href={`/work/${post.slug}`}
          images={(() => {
            // Hide carousel/images for selected projects on the Projects page
            const hideImagesFor = new Set([
              "ml-computer-vision-earthquake-prediction-model",
              "ai-in-education",
              "automate-design-handovers-with-a-figma-to-code-pipeline",
              "smart-e-secretary",
              "whatsapp-automation-software",
            ]);
            return hideImagesFor.has(post.slug) ? [] : post.metadata.images;
          })()}
          title={post.metadata.title}
          description={post.metadata.summary}
          content={post.content}
          avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
          link={post.slug === "automate-design-handovers-with-a-figma-to-code-pipeline" ? "" : (post.metadata.link || "")}
        />
      ))}
    </Column>
  );
}
