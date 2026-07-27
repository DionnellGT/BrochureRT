import { Outlet, useLocation } from "react-router";
import { FeaturesSection, Footer, GallerySection, Hero, Navbar, QuickNav, ValuesSection } from "../components";
import { hero, navLinks, featuresSection, gallerySection, footer, values } from "../data"
import type { QuickNavLink } from "../data/quickNavLinks";
import { Marca, TipoLista } from "@/api";
import { useProjectsByMarcaAndTipo } from "../hook/useProjectsByMarcaAndTipo";


export const BrochureLayout = () => {

    const logoUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBLD2cUjgyi9jdvQ4SKjF3Ruis0Dba5vPxIy90AAnh8QUbjBKWUv3RAlFgIvxkfBxE9IYzT8t7IaAcRKRAcsE50P2nGT6VKIGK5jTje0HFH3-Cnbbo57_cjUDNQZR63i8O36wigsJBTqJLaxDmgjgiceINtZYHUjk9DUPcGIbj7PVWrY1802mTeVU5F_lNCOfaKbH5YInDlgau43sbyW9yLHfOYzQyqfdZce9DHsfAQslp0lfvmt4oBppFPqxQGPHbiAx5CJnMgQkDR"
     
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
                <ValuesSection values={values} />
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
