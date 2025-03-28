"use client";

import BaseSidebar from './BaseSidebar';
import { transSidebarConfig } from '@/lib/sidebarConfig';

export default function TransSidebar() {
  return <BaseSidebar sections={transSidebarConfig} />;
}