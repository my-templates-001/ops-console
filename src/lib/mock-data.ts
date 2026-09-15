import type { Execution, Status } from "@/components/ops-ui";
export type Target = { id: string; name: string; kind: string; status: Status; execution: Execution; device: string; checked: string; next: string; note?: string };
export const targets: Target[] = [
 { id:"booking-api", name:"Booking API — /health", kind:"HTTP · 60 sec", status:"healthy", execution:"Local", device:"DESKTOP-N7K", checked:"12 sec ago", next:"in 48 sec" },
 { id:"payment-status", name:"Payment gateway status", kind:"HTTP · 2 min", status:"healthy", execution:"Oracle", device:"oracle-vm-2", checked:"1 min ago", next:"in 56 sec" },
 { id:"search-sync", name:"Search index sync", kind:"Filesystem · 60 sec", status:"healthy", execution:"Both", device:"Local + Oracle", checked:"22 sec ago", next:"in 38 sec" },
 { id:"legacy-ftp", name:"Legacy FTP mirror", kind:"Filesystem · nightly", status:"paused", execution:"Local", device:"DESKTOP-N7K", checked:"3 days ago", next:"—", note:"Paused by Maya Chen" },
 { id:"email-render", name:"Email digest render", kind:"Browser · 2 min", status:"degraded", execution:"Oracle", device:"oracle-vm-2", checked:"1 min ago", next:"in 12 sec", note:"2 timeouts in the last 10 checks" },
 { id:"inventory-webhook", name:"Inventory webhook", kind:"HTTP · 60 sec", status:"error", execution:"Both", device:"Local + Oracle", checked:"44 sec ago", next:"in 16 sec", note:"502 upstream · 3 consecutive failures" },
];
