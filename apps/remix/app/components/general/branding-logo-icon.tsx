export type LogoProps = { className?: string };

// NurseAider square mark (PWA icon). Rendered as an image so it keeps the
// brand colours; previously this was the Documenso seal SVG.
export const BrandingLogoIcon = ({ className }: LogoProps) => {
  return <img src="/static/logo-icon.png" alt="NurseAider" className={className} />;
};
