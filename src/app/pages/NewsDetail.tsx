import { Link, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, Newspaper, Tag, UserRound } from "lucide-react";
import { newsData } from "../data/mockData";
import type { NewsItem } from "../types";

type NewsDetailEntry = NewsItem & {
  author?: string;
  category?: string;
  galleryImages?: Array<{
    image: string;
    alt: string;
    title?: string;
  }>;
};

const formatNewsDate = (value: string) => {
  const normalizedValue = value.includes("/")
    ? value.split("/").reverse().join("-")
    : value;
  const parsedDate = new Date(normalizedValue);

  if (Number.isNaN(parsedDate.getTime())) {
    return value;
  }

  return parsedDate.toLocaleDateString("es-CO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const selectedNews = newsData.find((item) => item.id === Number(id));

  if (!selectedNews) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-10 text-center shadow-sm">
          <h1 className="text-3xl font-semibold text-foreground">
            No encontramos esta noticia
          </h1>
          <p className="mt-3 text-muted-foreground">
            La publicación solicitada no está disponible en este momento.
          </p>
          <Link
            to="/news"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a noticias
          </Link>
        </div>
      </div>
    );
  }

  const detailNews = selectedNews as NewsDetailEntry;
  const paragraphs = detailNews.content.split("\n\n").filter(Boolean);
  const relatedNews = newsData
    .filter((item) => item.id !== detailNews.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm transition hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>

          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                <Newspaper className="h-4 w-4" />
                Publicación institucional
              </div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                {detailNews.title}
              </h1>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-100">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatNewsDate(detailNews.date)}
                </span>
                {detailNews.category ? (
                  <span className="inline-flex items-center gap-2">
                    <Tag className="h-4 w-4" />
                    {detailNews.category}
                  </span>
                ) : null}
                {detailNews.author ? (
                  <span className="inline-flex items-center gap-2">
                    <UserRound className="h-4 w-4" />
                    {detailNews.author}
                  </span>
                ) : null}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={detailNews.image}
                alt={detailNews.title}
                className="h-[320px] w-full object-cover md:h-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.8fr]">
          <article className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className="text-lg leading-relaxed text-foreground">
              {detailNews.description}
            </p>

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
              {paragraphs.map((paragraph, index) => (
                <p key={`${detailNews.id}-${index}`}>{paragraph}</p>
              ))}
            </div>

            {detailNews.galleryImages && detailNews.galleryImages.length > 0 ? (
              <div className="mt-10">
                <h2 className="mb-4 text-2xl font-semibold text-foreground">
                  Más fotografías
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {detailNews.galleryImages.map((image, index) => (
                    <div
                      key={`${image.alt}-${index}`}
                      className="overflow-hidden rounded-2xl border border-border"
                    >
                      <img
                        src={image.image}
                        alt={image.alt}
                        className="h-56 w-full object-cover"
                      />
                      {image.title ? (
                        <div className="bg-white p-3 text-sm text-muted-foreground">
                          {image.title}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-foreground">
                Otras noticias
              </h2>
              <div className="mt-5 space-y-4">
                {relatedNews.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.id}`}
                    className="block rounded-2xl border border-border bg-background/70 p-4 transition hover:border-primary hover:shadow-sm"
                  >
                    <p className="text-sm font-semibold text-foreground">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
