import { Heading } from '@/types/common';

export interface MainContentProps {
  children: React.ReactNode;
  setHeadings: (headings: Heading[]) => void;
}
