"use client";

import BaseSidebar from './BaseSidebar';
import { couplesSidebarConfig } from '@/lib/sidebarConfig';

export default function CouplesSidebar() {
  return <BaseSidebar sections={couplesSidebarConfig} />;
}