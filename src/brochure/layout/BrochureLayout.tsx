import { Outlet, useLocation } from "react-router";
import { FeaturesSection, Footer, GallerySection, Hero, Navbar, QuickNav } from "../components";
import { hero, navLinks, featuresSection, gallerySection, footer } from "../data"
import type { QuickNavLink } from "../data/quickNavLinks";
import { Marca, TipoLista } from "@/api";
import { useProjectsByMarcaAndTipo } from "../hook/useProjectsByMarcaAndTipo";


export const BrochureLayout = () => {

    const logoUrl = "/logoRT.png"
     
    const location = useLocation();
    const tipo = location.pathname.includes("vendedores") ? TipoLista.POSTVENTA : TipoLista.CLIENTE;
    const { projects } = useProjectsByMarcaAndTipo(Marca.REMATEDETERRENOS, tipo);

    const quickNavLinks: QuickNavLink[] = (projects ?? []).map((project, index) => ({
        id: project.id,
        label: project.nombre,
        href: `#${project.nombre}`,
        highlighted: index === 0,
    }));

    return (
        <>
        <div className="bg-background text-foreground selection:bg-primary/20 selection:text-primary">
            <Navbar logoUrl={logoUrl} links={navLinks} />
            <Hero hero={hero} />
            {quickNavLinks.length > 0 && <QuickNav links={quickNavLinks} />}
            <main className="relative z-20 max-w-[1200px] mx-auto mt-12 px-6 max-sm:px-3">
                <Outlet/>
                <FeaturesSection
                  eyebrow={featuresSection.eyebrow}
                  title={featuresSection.title}
                  cards={featuresSection.cards}
                />
                {/*<ValuesSection values={values} />} */}
                <GallerySection
                  title={gallerySection.title}
                  subtitle={gallerySection.subtitle}
                  ctaLabel={gallerySection.ctaLabel}
                  images={gallerySection.images}
                />
            </main>

            <Footer footer={footer} />

        </div>
        </>
    )
}
