import "./globals.css";

export const metadata = {
  title: "SkillScan Navigator",
  description: "AI-powered role-based skill gap analyzer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}