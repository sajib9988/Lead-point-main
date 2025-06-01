import type React from 'react';

interface PageHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, className }) => {
  return (
    <div className={`py-10 text-center md:py-16 lg:py-12 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl mx-auto text-lg text-foreground/80 md:text-xl">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;