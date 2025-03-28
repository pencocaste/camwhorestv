"use client";

import BaseSidebar from './BaseSidebar';
import { femaleSidebarConfig } from '@/lib/sidebarConfig';

export default function GirlsSidebar() {
  return <BaseSidebar sections={femaleSidebarConfig} />;
}