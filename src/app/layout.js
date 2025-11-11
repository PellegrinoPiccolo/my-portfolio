export const metadata = ({
  title: "Pellegrino Piccolo - Portfolio",
  description: "Welcome to my personal portfolio website.",
  keywords: ["portfolio", "web developer", "projects", "contact"],
  authors: [{ name: "Pellegrino Piccolo", url: "https://pellegrinopiccolo.com" }],
  creator: "Pellegrino Piccolo",
  publisher: "Pellegrino Piccolo",
  openGraph: {
    title: "Pellegrino Piccolo - Portfolio",
    description: "Welcome to my personal portfolio website.",
    url: "https://pellegrinopiccolo.com",
    siteName: "Pellegrino Piccolo - Portfolio",
    images: [
      {
        url: "https://pellegrinopiccolo.com/og-image.jpg",
        width: 1200,
        height: 630,
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
    images: ["https://pellegrinopiccolo.com/twitter-image.jpg"],
    creator: "@pellegrinopiccolo",
  },
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
