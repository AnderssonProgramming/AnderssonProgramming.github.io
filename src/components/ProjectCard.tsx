import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured?: boolean;
}

const ProjectCard = ({ title, description, tags, image, link, featured }: ProjectCardProps) => {
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
        <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-blue-500 rounded-full text-xs font-semibold">
          ⭐ Destacado
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
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-800 rounded-md text-xs text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a 
            href={link}
            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Ver proyecto
          </a>
          <a 
            href={link}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors"
          >
            <Github className="w-4 h-4" />
            Código
          </a>
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
