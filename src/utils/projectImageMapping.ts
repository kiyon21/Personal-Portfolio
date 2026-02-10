import metasplit from '../img/Metasplit.png';
import altera from '../img/Altera.jpg';
import motive from '../img/MotiveComponents.png';
import rtos from '../img/rtos.png';
import fiveDof from '../img/5dof.png';
import coding from '../img/coding.png';

const projectImageByTitle: Record<string, string> = {
  'Metasplit': metasplit,
  'Audio Player': altera,
  'Motive - Android App': motive,
  'ARM-Based RTOS': rtos,
  '5DOF-VR Livestreaming': fiveDof,
  'Personal Portfolio': fiveDof,
};

export function getProjectImageUrl(title: string, imageUrl?: string): string {
  if (imageUrl) return imageUrl;
  return projectImageByTitle[title] || coding;
}
