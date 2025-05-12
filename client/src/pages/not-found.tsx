import { Link } from 'wouter';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-4">Page Not Found</p>
      <Link href="/" className="text-blue-500 underline mt-2">Go to Home</Link>
    </div>
  );
}
