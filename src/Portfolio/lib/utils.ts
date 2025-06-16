import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Fonction utilitaire pour fusionner des classes CSS
export function cn(...inputs: ClassValue[]) {
  if (inputs.length === 0) return ''; // Retourne une chaîne vide si aucun input
  return twMerge(clsx(inputs)); // Combine clsx et twMerge pour gérer les classes
}
