// Tell Next.js this is a dynamic page that should not be cached
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function TestPage({ params: { locale } }: { params: { locale: string } }) {
  const currentTime = new Date().toISOString();
  
  return (
    <div className="container mx-auto p-10">
      <h1 className="text-3xl font-bold mb-5">Test Page - {currentTime}</h1>
      <div className="bg-red-600 text-white p-5 rounded-lg mb-5">
        If you can see this page with the current time, your Next.js server is working properly!
      </div>
      <p>Current locale: {locale}</p>
      <p>Current time: {currentTime}</p>
      <p className="mt-5">
        This is a test page created to verify that page updates are working correctly.
      </p>
    </div>
  );
}
