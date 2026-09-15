import { Link, useRouterState } from "@tanstack/react-router";
import { Activity, Bell, Blocks, Bot, Cpu, Gauge, Menu, MonitorCog, Settings, Wrench, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Monitoring", to: "/", icon: Activity },
  { label: "Events", to: "/showcase", icon: Bell },
  { label: "Content", to: "/showcase", icon: Blocks },
  { label: "Tools", to: "/showcase", icon: Wrench },
  { label: "Automation", to: "/showcase", icon: Bot },
  { label: "Devices", to: "/devices", icon: Cpu },
  { label: "System", to: "/showcase", icon: Settings },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  return <div className="min-h-screen bg-background text-foreground">
    <div className="flex h-8 items-center gap-4 bg-system px-3 text-[11px] text-system-foreground"><span className="font-semibold">NORTHSTAR OPS</span><span className="hidden items-center gap-1.5 sm:flex"><span className="size-1.5 rounded-full bg-success" />This PC online</span><span className="hidden items-center gap-1.5 sm:flex"><span className="size-1.5 rounded-full bg-success" />Oracle online</span><span className="ml-auto font-mono">Live · 14d 06h</span></div>
    <div className="flex min-h-[calc(100vh-2rem)]">
      <aside className={cn("fixed inset-y-8 left-0 z-40 w-56 border-r bg-sidebar transition-transform lg:sticky lg:top-8 lg:block lg:h-[calc(100vh-2rem)]", open ? "translate-x-0" : "-translate-x-full lg:translate-x-0")}>
        <div className="grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center border-b px-3"><Link to="/" className="flex min-w-0 items-center gap-2"><span className="grid size-7 shrink-0 place-items-center rounded-md bg-primary text-xs font-bold text-primary-foreground">N</span><span className="truncate text-sm font-semibold">Northstar</span></Link><Button className="lg:hidden" variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close navigation"><X /></Button></div>
        <nav className="space-y-1 p-2">{nav.map((item, i) => <div key={`${item.label}-${i}`}>{i === 0 && <p className="px-2 pb-1 pt-2 text-[10px] font-semibold uppercase text-muted-foreground">Operations</p>}{i === 3 && <p className="px-2 pb-1 pt-4 text-[10px] font-semibold uppercase text-muted-foreground">Workspace</p>}<Link to={item.to} onClick={() => setOpen(false)} className={cn("flex items-center gap-2 rounded-md px-2.5 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent", (path === item.to || (item.to !== "/" && path.startsWith(item.to))) && "bg-sidebar-accent font-semibold text-sidebar-accent-foreground")}><item.icon className="size-4 shrink-0" />{item.label}</Link></div>)}</nav>
        <div className="absolute inset-x-3 bottom-3 rounded-md border bg-background p-3"><div className="flex items-center justify-between"><span className="text-xs font-semibold">System health</span><Gauge className="size-4 text-success" /></div><p className="mt-1 text-xs text-muted-foreground">2 execution sources ready</p></div>
      </aside>
      {open && <button className="fixed inset-0 z-30 bg-overlay lg:hidden" onClick={() => setOpen(false)} aria-label="Close navigation overlay" />}
      <div className="min-w-0 flex-1 pb-16 lg:pb-0"><div className="sticky top-0 z-20 flex h-12 items-center border-b bg-background/95 px-3 backdrop-blur lg:hidden"><Button variant="ghost" size="icon" onClick={() => setOpen(true)} aria-label="Open navigation"><Menu /></Button><span className="ml-2 text-sm font-semibold">Northstar Ops</span><MonitorCog className="ml-auto size-4 text-muted-foreground" /></div><main className="mx-auto w-full max-w-[1500px] p-4 md:p-6">{children}</main></div>
    </div>
    <nav className="fixed inset-x-0 bottom-0 z-20 grid h-16 grid-cols-4 border-t bg-background lg:hidden">{nav.slice(0,4).map((item) => <Link key={item.label} to={item.to} className={cn("flex flex-col items-center justify-center gap-1 text-[10px] text-muted-foreground", path === item.to && "text-primary")}><item.icon className="size-4" />{item.label}</Link>)}</nav>
  </div>;
}
