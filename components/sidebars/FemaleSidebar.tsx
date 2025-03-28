"use client";

import BaseSidebar from './BaseSidebar';
import { femaleSidebarConfig } from '@/lib/sidebarConfig';

export default function FemaleSidebar() {
  return <BaseSidebar sections={femaleSidebarConfig} />;
}