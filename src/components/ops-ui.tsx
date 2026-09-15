import type { ReactNode } from "react";
import { AlertTriangle, CheckCircle2, Cloud, Laptop, LoaderCircle, MoreHorizontal, ServerOff, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export type Status = "healthy" | "degraded" | "error" | "paused" | "offline";
export type Execution = "Local" | "Oracle" | "Both";

const statusStyles: Record<Status, string> = {
  healthy: "bg-success-soft text-success border-success/20",
  degraded: "bg-warning-soft text-warning border-warning/25",
  error: "bg-destructive-soft text-destructive border-destructive/20",
  paused: "bg-muted text-muted-foreground border-border",
  offline: "bg-muted text-muted-foreground border-border",
};
const statusIcons = { healthy: CheckCircle2, degraded: AlertTriangle, error: XCircle, paused: LoaderCircle, offline: ServerOff };

export function StatusBadge({ status, label }: { status: Status; label?: string }) {
  const Icon = statusIcons[status];
  return <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-xs font-semibold capitalize", statusStyles[status])}><Icon className="size-3" />{label ?? status}</span>;
}

export function HealthIndicator({ status, label }: { status: Status; label?: string }) {
  return <span className="inline-flex items-center gap-2 text-xs text-muted-foreground"><span className={cn("size-2 rounded-full", status === "healthy" && "bg-success", status === "degraded" && "bg-warning", status === "error" && "bg-destructive", (status === "offline" || status === "paused") && "bg-neutral-status")} />{label ?? status}</span>;
}

export function ExecutionBadge({ value }: { value: Execution }) {
  return <span className={cn("inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-xs font-semibold", value === "Local" && "border-local/25 bg-local-soft text-local", value === "Oracle" && "border-oracle/25 bg-oracle-soft text-oracle", value === "Both" && "border-both/25 bg-both-soft text-both")}>
    {value === "Local" ? <Laptop className="size-3" /> : value === "Oracle" ? <Cloud className="size-3" /> : <><Laptop className="size-3" /><Cloud className="size-3" /></>}{value === "Local" ? "This PC" : value}
  </span>;
}

export function ExecutionSelector({ value, onChange }: { value: Execution | "All"; onChange: (v: Execution | "All") => void }) {
  return <div className="inline-flex max-w-full overflow-x-auto rounded-md border bg-card p-0.5" aria-label="Execution location">
    {(["All", "Local", "Oracle", "Both"] as const).map((item) => <button key={item} onClick={() => onChange(item)} className={cn("h-8 shrink-0 rounded-sm px-3 text-xs font-medium transition-colors", value === item ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-accent hover:text-accent-foreground")}>{item === "Local" ? "This PC" : item}</button>)}
  </div>;
}

export function PageHeader({ eyebrow, title, description, actions }: { eyebrow?: string; title: string; description?: string; actions?: ReactNode }) {
  return <header className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 border-b pb-4"><div className="min-w-0">{eyebrow && <p className="mb-1 text-xs font-semibold uppercase text-muted-foreground">{eyebrow}</p>}<h1 className="truncate text-2xl font-semibold">{title}</h1>{description && <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{description}</p>}</div>{actions && <div className="shrink-0">{actions}</div>}</header>;
}

export function Section({ title, description, children, action, className }: { title: string; description?: string; children: ReactNode; action?: ReactNode; className?: string }) {
  return <section className={cn("border-t pt-4", className)}><div className="mb-3 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3"><div className="min-w-0"><h2 className="text-sm font-semibold">{title}</h2>{description && <p className="mt-0.5 text-xs text-muted-foreground">{description}</p>}</div>{action}</div>{children}</section>;
}

export function ActionMenu({ onDelete }: { onDelete?: () => void }) {
  return <DropdownMenu><DropdownMenuTrigger asChild><Button variant="ghost" size="icon" aria-label="More actions"><MoreHorizontal /></Button></DropdownMenuTrigger><DropdownMenuContent align="end"><DropdownMenuItem>Edit</DropdownMenuItem><DropdownMenuItem>Change execution target</DropdownMenuItem><DropdownMenuItem>Enable / disable</DropdownMenuItem><DropdownMenuSeparator /><DropdownMenuItem className="text-destructive" onClick={onDelete}>Delete</DropdownMenuItem></DropdownMenuContent></DropdownMenu>;
}

export function StatePanel({ type, title, description }: { type: "loading" | "empty" | "offline" | "degraded" | "error"; title: string; description: string }) {
  const Icon = type === "loading" ? LoaderCircle : type === "offline" ? ServerOff : type === "degraded" ? AlertTriangle : type === "error" ? XCircle : CheckCircle2;
  return <div className={cn("flex min-h-32 flex-col items-center justify-center rounded-md border border-dashed p-5 text-center", type === "error" && "border-destructive/30 bg-destructive-soft", type === "degraded" && "border-warning/30 bg-warning-soft")}><Icon className={cn("mb-2 size-5 text-muted-foreground", type === "loading" && "animate-spin", type === "error" && "text-destructive", type === "degraded" && "text-warning")} /><p className="text-sm font-semibold">{title}</p><p className="mt-1 max-w-sm text-xs text-muted-foreground">{description}</p></div>;
}

export function Metric({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return <div className="min-w-0 border-l-2 border-primary pl-3"><p className="text-xs text-muted-foreground">{label}</p><p className="mt-0.5 truncate text-lg font-semibold tabular-nums">{value}</p>{detail && <p className="text-xs text-muted-foreground">{detail}</p>}</div>;
}
