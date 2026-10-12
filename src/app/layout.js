import './globals.css';

export const metadata = {
  title: "Pellegrino Piccolo - Portfolio",
  description: "Welcome to my personal portfolio website.",
  keywords: ["portfolio", "web developer", "projects", "contact"],
  authors: [{ name: "Pellegrino Piccolo", url: "https://piccolopellegrino.dev" }],
  creator: "Pellegrino Piccolo",
  publisher: "Pellegrino Piccolo",
  openGraph: {
    title: "Pellegrino Piccolo - Portfolio",
    description: "Welcome to my personal portfolio website.",
    url: "https://piccolopellegrino.dev",
    siteName: "Pellegrino Piccolo - Portfolio",
    images: [
      {
        url: "https://piccolopellegrino.dev/projects/my-portfolio.png",
        width: 3804,
        height: 1700,
        alt: "My Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pellegrino Piccolo - Portfolio",
    description: "Welcome to my personal portfolio website.",
    images: ["https://piccolopellegrino.dev/projects/my-portfolio.png"],
    creator: "@pellegrinopiccolo",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
