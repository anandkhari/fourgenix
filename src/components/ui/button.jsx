import { ArrowRightIcon } from '@heroicons/react/24/solid'; // Example: using heroicons

export const Button = ({
  children,
  variant = 'dark', // 'dark' or 'light'
  className = '',
  ...props
}) => {
  const baseStyle =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 font-medium transition-colors';

  // Define variants based on your design
  const variants = {
    dark: 'bg-[#2a2d58] text-white hover:bg-opacity-90',
    light: 'bg-white text-black hover:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {/* This icon matches the "download-034.svg" in your code */}
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90">
        <ArrowRightIcon className="h-5 w-5 text-primary" />
      </div>
    </button>
  );
};