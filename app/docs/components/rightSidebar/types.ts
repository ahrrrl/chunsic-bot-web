import { Heading } from '@/types/common';

export interface RightSidebarProps {
  headings: Heading[];
  handleClick: (id: string) => void;
}
