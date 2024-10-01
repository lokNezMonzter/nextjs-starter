import DashboardCard from "@/components/dashboard/DashboardCard";
import { Newspaper, Folder, User, MessageCircle } from "lucide-react";
import { DashboardCardContents } from "@/common/types";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";

const dashboardItems: DashboardCardContents[] = [
  {
    id: "1",
    title: "Posts",
    count: 100,
    icon: <Newspaper className="text-slate-500" size={48} />,
  },
  {
    id: "2",
    title: "Categories",
    count: 12,
    icon: <Folder className="text-slate-500" size={48} />,
  },
  {
    id: "3",
    title: "Users",
    count: 750,
    icon: <User className="text-slate-500" size={48} />,
  },
  {
    id: "4",
    title: "Comments",
    count: 3600,
    icon: <MessageCircle className="text-slate-500" size={48} />,
  },
];

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        {dashboardItems.map((item) => (
          <DashboardCard
            title={item.title}
            count={item.count}
            icon={item.icon}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
