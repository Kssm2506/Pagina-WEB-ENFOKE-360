import "./globals.css";

export const metadata = {
  title: "Enfoke 360",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'TT Commons Pro';
            src: url('/fonts/TTCommons-Regular.otf') format('opentype');
            font-weight: 400;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'TT Commons Pro';
            src: url('/fonts/TTCommons-Bold.otf') format('opentype');
            font-weight: 700;
            font-style: normal;
            font-display: swap;
          }
          @font-face {
            font-family: 'TT Commons Pro';
            src: url('/fonts/TTCommons-BoldItalic.otf') format('opentype');
            font-weight: 700;
            font-style: italic;
            font-display: swap;
          }
        `}} />
      </head>
      <body className="bg-[#0f0f0f] text-white selection:bg-[#0b5cc5] selection:text-white min-h-screen flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
