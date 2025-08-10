import { HeartIcon } from "./Icons";

export const Footer: React.FC = () => (
  <footer className="py-12 bg-gray-900 text-center text-indigo-300">
    <HeartIcon className="w-10 h-10 text-pink-500 mx-auto mb-4" />
    <p>With all my love, forever and always.</p>
    <p className="text-sm mt-2 text-indigo-500">
      This website was built with love, just for you.
    </p>
  </footer>
);
