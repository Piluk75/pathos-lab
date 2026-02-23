import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface UseCase {
  industry: string;
  problem: string;
  solution: string;
  icon: LucideIcon;
}