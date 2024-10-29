import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionTitleProps {
  icon: LucideIcon;
  title: string;
  color: string;
}

export default function SectionTitle({ icon: Icon, title, color }: SectionTitleProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Icon className={`w-8 h-8 ${color}`} />
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
    </div>
  );
}