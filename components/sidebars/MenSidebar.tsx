"use client";

import BaseSidebar from './BaseSidebar';
import { menSidebarConfig } from '@/lib/sidebarConfig';

export default function MenSidebar() {
  return <BaseSidebar sections={menSidebarConfig} />;
}