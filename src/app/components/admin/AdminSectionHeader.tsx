import { ReactNode } from "react";

interface AdminSectionHeaderProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export default function AdminSectionHeader({
  title,
  description,
  action,
}: AdminSectionHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-1 text-sm text-muted-foreground max-w-2xl">
          {description}
        </p>
      </div>
      {action && <div className="flex items-center gap-2">{action}</div>}
    </div>
  );
}
