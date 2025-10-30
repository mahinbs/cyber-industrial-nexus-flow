import React from "react";
import { useParams, Link } from "react-router-dom";
import { getCatalogBySlug } from "@/content/catalogs";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Info, BookOpen, Wrench, CheckCircle2, FileDown } from "lucide-react";

const CatalogDetail = () => {
  const { slug } = useParams();
  const catalog = slug ? getCatalogBySlug(slug) : undefined;

  if (!catalog) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-6">Catalog not found.</p>
          <Button asChild>
            <Link to="/catalog">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const isYouTubeOrVimeo = (url: string) =>
    /youtube\.com|youtu\.be|vimeo\.com/.test(url);
  const transformCloudinaryToMp4 = (url: string) => {
    if (!/res\.cloudinary\.com\/.+\/video\/upload\//.test(url)) return url;
    const marker = "/upload/";
    const idx = url.indexOf(marker);
    if (idx === -1) return url;
    const prefix = url.slice(0, idx + marker.length);
    const rest = url.slice(idx + marker.length);
    const restMp4 = rest.replace(/\.[^./]+$/i, ".mp4");
    return `${prefix}f_mp4,vc_h264/${restMp4}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${catalog.preview}')` }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <Button
                asChild
                variant="ghost"
                className="border border-blue-200 bg-white/60"
              >
                <Link to="/catalog" className="text-slate-700">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Link>
              </Button>
              {catalog.pdfUrl && (
                <Button
                  asChild
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white"
                >
                  <a href={catalog.pdfUrl} download>
                    <FileDown className="w-4 h-4 mr-2" /> Download PDF
                  </a>
                </Button>
              )}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {catalog.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl">
              {catalog.description}
            </p>
            <p className="text-sm text-slate-600 mt-4">
              {catalog.pages} • {catalog.size}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-10">
            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50 max-w-5xl shadow-sm grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 text-blue-600 mr-3" /> Overview
                </h3>
                <p className="whitespace-pre-line text-slate-700 leading-relaxed">
                  {catalog.overviewText}
                </p>
              </div>
              <div className="w-full aspect-video">
                <img
                  src={catalog.preview}
                  alt={catalog.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>

            {catalog.videos && catalog.videos[0] && (
              <AnimatedSection className="bg-white/70 rounded-2xl p-4 border border-blue-200/50 max-w-5xl shadow-sm">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-blue-200/50 bg-black/5">
                  {isYouTubeOrVimeo(catalog.videos[0]) ? (
                    <iframe
                      src={catalog.videos[0]}
                      title="Catalog Video 1"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="w-full h-full"
                      controls
                      src={transformCloudinaryToMp4(catalog.videos[0])}
                    />
                  )}
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50 max-w-5xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-3" /> Contents
              </h3>
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">
                {catalog.contentsText}
              </p>
            </AnimatedSection>

            {catalog.videos && catalog.videos[1] && (
              <AnimatedSection className="bg-white/70 rounded-2xl p-4 border border-blue-200/50 max-w-5xl shadow-sm">
                <div className="aspect-video w-full overflow-hidden rounded-xl border border-blue-200/50 bg-black/5">
                  {isYouTubeOrVimeo(catalog.videos[1]) ? (
                    <iframe
                      src={catalog.videos[1]}
                      title="Catalog Video 2"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      className="w-full h-full"
                      controls
                      src={transformCloudinaryToMp4(catalog.videos[1])}
                    />
                  )}
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50 max-w-5xl shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                <Wrench className="w-5 h-5 text-blue-600 mr-3" /> Usage
              </h3>
              <p className="whitespace-pre-line text-slate-700 leading-relaxed mb-6">
                {catalog.usageText}
              </p>
              {catalog.benefits && catalog.benefits.length > 0 && (
                <ul className="space-y-3">
                  {catalog.benefits.map((b) => (
                    <li key={b} className="flex items-start text-slate-800">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatalogDetail;
