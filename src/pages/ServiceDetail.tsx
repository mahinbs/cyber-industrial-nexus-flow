import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug } from '@/content/services';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Info, ListChecks, Sparkles, Wrench, CheckCircle2 } from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  const isYouTubeOrVimeo = (url: string) => /youtube\.com|youtu\.be|vimeo\.com/.test(url);
  const transformCloudinaryToMp4 = (url: string) => {
    if (!/res\.cloudinary\.com\/.+\/video\/upload\//.test(url)) return url;
    const marker = '/upload/';
    const idx = url.indexOf(marker);
    if (idx === -1) return url;
    const prefix = url.slice(0, idx + marker.length);
    const rest = url.slice(idx + marker.length);
    const restMp4 = rest.replace(/\.[^./]+$/i, '.mp4');
    return `${prefix}f_mp4,vc_h264/${restMp4}`;
  };

  if (!service) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-slate-600 mb-6">Service not found.</p>
          <Button asChild>
            <Link to="/services">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back to Services
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url('${service.image}')` }} />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-3 mb-6">
              <Button asChild variant="ghost" className="border border-blue-200 bg-white/60">
                <Link to="/services" className="text-slate-700">
                  <ArrowLeft className="w-4 h-4 mr-2" /> Back
                </Link>
              </Button>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{service.name}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl">{service.description}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-blue-600 mr-3" /> Overview
              </h3>
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">{service.overviewText}</p>
            </AnimatedSection>

            {service.videos[0] && (
              <AnimatedSection className="bg-white/70 rounded-2xl p-4 border border-blue-200/50">
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-blue-200/50 bg-black/5">
                  {isYouTubeOrVimeo(service.videos[0]) ? (
                    <iframe src={service.videos[0]} title="Service Video 1" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  ) : (
                    <video className="w-full h-full" controls src={transformCloudinaryToMp4(service.videos[0])} />
                  )}
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <ListChecks className="w-5 h-5 text-blue-600 mr-3" /> Scope of Work
              </h3>
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">{service.scopeText}</p>
            </AnimatedSection>

            {service.videos[1] && (
              <AnimatedSection className="bg-white/70 rounded-2xl p-4 border border-blue-200/50">
                <div className="aspect-video w-full overflow-hidden rounded-lg border border-blue-200/50 bg-black/5">
                  {isYouTubeOrVimeo(service.videos[1]) ? (
                    <iframe src={service.videos[1]} title="Service Video 2" className="w-full h-full" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                  ) : (
                    <video className="w-full h-full" controls src={transformCloudinaryToMp4(service.videos[1])} />
                  )}
                </div>
              </AnimatedSection>
            )}

            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 flex items-center">
                <Sparkles className="w-5 h-5 text-blue-600 mr-3" /> Benefits
              </h3>
              {service.benefits && service.benefits.length > 0 && (
                <ul className="space-y-3 mb-6">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start text-slate-800">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">{service.benefitsText}</p>
            </AnimatedSection>

            <AnimatedSection className="bg-white/70 rounded-2xl p-8 border border-blue-200/50">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4 flex items-center">
                <Wrench className="w-5 h-5 text-blue-600 mr-3" /> Process
              </h3>
              <p className="whitespace-pre-line text-slate-700 leading-relaxed">{service.processText}</p>
            </AnimatedSection>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <AnimatedSection className="bg-white/70 rounded-2xl p-6 border border-blue-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Key Features</h3>
              <ul className="space-y-3">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-3" />
                    {f}
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection className="bg-white/70 rounded-2xl p-6 border border-blue-200/50">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Industries</h3>
              <ul className="space-y-3">
                {service.industries.map((a) => (
                  <li key={a} className="flex items-center text-slate-700">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-3" />
                    {a}
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;


