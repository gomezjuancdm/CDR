import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface AdminStatsCardProps {
  title: string;
  count: number;
  icon: LucideIcon;
  color: string;
  link: string;
  badge?: string;
}

export default function AdminStatsCard({
  title,
  count,
  icon: Icon,
  color,
  link,
  badge,
}: AdminStatsCardProps) {
  return (
    <Link
      to={link}
      className="group block rounded-3xl bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div
          className={`${color} text-white inline-flex h-12 w-12 items-center justify-center rounded-3xl transition group-hover:scale-105`}
        >
          <Icon className="h-5 w-5" />
        </div>
        {badge ? (
          <span className="rounded-full bg-destructive px-3 py-1 text-xs font-medium text-destructive-foreground">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="mt-8">
        <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">
          {title}
        </p>
        <p className="mt-2 text-3xl font-semibold leading-tight">{count}</p>
      </div>
    </Link>
  );
}
