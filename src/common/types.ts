import React from "react";
import { LucideIcon } from "lucide-react";

export interface DashboardCardContents {
  id: string;
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  author: string;
  date: string;
  comments: PostComment[];
}

export interface PostComment {
  id: string;
  text: string;
  username: string;
}

export interface PostsTableProps {
  limit?: number;
  title?: string;
}

export interface AnalyticsItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

export interface BackButtonProps {
  text: string;
  link: string;
}

export interface EditPostProps {
  params: {
    id: string;
  };
}
