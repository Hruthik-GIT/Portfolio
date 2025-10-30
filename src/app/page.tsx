import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Schema,
  Meta,
  Line,
} from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Mailchimp, ProjectCard } from "@/components";
import { Projects } from "@/components/work/Projects";
import { getPosts } from "@/utils/utils";
import { Posts } from "@/components/blog/Posts";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  // Pick only the requested projects for the homepage
  const allProjects = getPosts(["src", "app", "work", "projects"]);
  const allowedSlugs = new Set([
    "building-once-ui-a-customizable-design-system", // Quantum Hedge AI project
    "ai-in-education",
  ]);
  const preferredOrder = [
    "building-once-ui-a-customizable-design-system",
    "ai-in-education",
  ];
  const orderIndex = new Map(preferredOrder.map((slug, idx) => [slug, idx]));
  const selectedProjects = allProjects
    .filter((p) => allowedSlugs.has(p.slug))
    .sort((a, b) => {
      const aIdx = orderIndex.get(a.slug) ?? Number.POSITIVE_INFINITY;
      const bIdx = orderIndex.get(b.slug) ?? Number.POSITIVE_INFINITY;
      if (aIdx !== bIdx) return aIdx - bIdx;
      return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });
  return (
    <Column maxWidth="m" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m">
        <Column maxWidth="s" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
      </Column>
      {/* Work Experience section */}
      <Column fillWidth gap="24" marginBottom="l">
        <Row fillWidth paddingRight="64">
          <Line maxWidth={48} />
        </Row>
        <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
          <Row flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Work Experience
            </Heading>
          </Row>
          <Row flex={3} paddingX="20">
            <Column gap="24" fillWidth>
              {/* Vestrics video */}
              <Row fillWidth paddingBottom="m">
                <video
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="metadata"
                  style={{ width: "100%", borderRadius: "12px" }}
                >
                  <source src="/videos/vestrics.mp4" type="video/mp4" />
                </video>
              </Row>
              <Column gap="8">
                <Heading as="h3" variant="heading-strong-l">Vestrics Solutions Private Limited</Heading>
                <Text onBackground="neutral-weak" variant="body-default-m">Software & AI Developer Intern — Hyderabad, India — Jul 2023 – Jan 2024</Text>
                <Column gap="s">
                  <Text>- Built a scalable AI-driven HR Payroll product using ASP.NET Core and C#, facilitating data retrieval and organization for 800+ employees.</Text>
                  <Text>- Integrated ML platform & infrastructure for scalable HR Payroll system using ASP.NET Core; implemented personalization & recommender systems via collaborative filtering and content-based recommendation algorithms.</Text>
                  <Text>- Leveraged NLP with large language models (LLMs) and prompt engineering for chatbots using text generation and embeddings, increasing UI interactivity by ~60%.</Text>
                  <Text>- Implemented general ML engineering for model optimization and efficiency with regressors, classifiers, and clustering for data-driven decisions.</Text>
                  <Text>- Automated AWS infrastructure deployment with Terraform and CloudFormation; improved explainability and reliability by containerizing with Docker and Kubernetes, achieving ~95% uptime.</Text>
                </Column>
              </Column>
              <Column gap="8">
                <Heading as="h3" variant="heading-strong-l">Vesra Software Services Private Limited</Heading>
                <Text onBackground="neutral-weak" variant="body-default-m">Full Stack & DevOps Intern — Hyderabad, India — Feb 2024 – Jul 2024</Text>
                <Column gap="s">
                  <Text>- Directed security implementations for AI models against adversarial attacks by applying theorem proving and symbolic execution techniques.</Text>
                  <Text>- Streamlined DevOps with CI/CD (AWS CodePipeline, Jenkins) to automate model deployment, reducing downtime by ~35% and ensuring smooth integration.</Text>
                  <Text>- Engineered and launched ML models as microservices using Node.js (npm), Docker, and Flask APIs to support AI and data analysis initiatives.</Text>
                  <Text>- Optimized OS-level memory management and thread scheduling to improve ML model inference efficiency for data-driven applications.</Text>
                </Column>
              </Column>
            </Column>
          </Row>
        </Row>
        <Row fillWidth paddingLeft="64" horizontal="end">
          <Line maxWidth={48} />
        </Row>
      </Column>

      {/* Only the two selected projects */}
      <RevealFx translateY="16" delay={0.6}>
        <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
          {selectedProjects.map((post, index) => (
            <ProjectCard
              priority={index < 2}
              key={post.slug}
              href={`/work/${post.slug}`}
              images={post.metadata.images}
              title={post.metadata.title}
              description={post.metadata.summary}
              content={post.content}
              avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
              link={post.metadata.link || ""}
            />
          ))}
        </Column>
      </RevealFx>
      {routes["/blog"] && (
        <Column fillWidth gap="24" marginBottom="l">
          <Row fillWidth paddingRight="64">
            <Line maxWidth={48} />
          </Row>
          <Row fillWidth gap="24" marginTop="40" s={{ direction: "column" }}>
            <Row flex={1} paddingLeft="l" paddingTop="24">
              <Heading as="h2" variant="display-strong-xs" wrap="balance">
                Latest from the blog
              </Heading>
            </Row>
            <Row flex={3} paddingX="20">
              <Posts range={[1, 2]} columns="2" />
            </Row>
          </Row>
          <Row fillWidth paddingLeft="64" horizontal="end">
            <Line maxWidth={48} />
          </Row>
        </Column>
      )}
      {/* Hide remaining projects on the homepage as requested */}
      <Mailchimp />
    </Column>
  );
}
