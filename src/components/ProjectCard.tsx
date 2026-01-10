import { Github } from 'lucide-react';

interface ProjectLink {
  name: string;
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  links: ProjectLink[];
  featured?: boolean;
}

const ProjectCard = ({ title, description, tags, image, links, featured }: ProjectCardProps) => {
  return (
    <div 
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:scale-[1.02] ${
        featured 
          ? 'border-blue-500/50 bg-gradient-to-br from-blue-900/20 to-purple-900/20' 
          : 'border-gray-800 bg-gray-900/50 hover:border-blue-500/30'
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold">
          🏆 NASA Global Finalist
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Icon/Image */}
        <div className="text-5xl mb-4">{image}</div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span 
              key={`tag-${tag}`}
              className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center gap-3">
          {links.map((link) => (
            <a 
              key={`link-${link.name}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 hover:bg-blue-600 rounded-lg text-xs text-gray-300 hover:text-white transition-all duration-300"
            >
              <Github className="w-3.5 h-3.5" />
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
