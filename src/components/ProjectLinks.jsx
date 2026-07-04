import { ArrowUpRight, ExternalLink, LockKeyhole, MonitorPlay, Route } from 'lucide-react';

const iconByKind = {
  internal: Route,
  demo: MonitorPlay,
  planned: ExternalLink,
};

export default function ProjectLinks({ project, compact = false }) {
  const items = project?.links?.items ?? project?.items ?? [];

  if (!items.length) {
    return null;
  }

  return (
    <div className={compact ? 'grid gap-2' : 'grid gap-3'}>
      {items.map((link) => {
        const Icon = iconByKind[link.kind] ?? ArrowUpRight;
        const content = (
          <>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 ring-1 ring-cyan-300/20">
                {link.disabled ? <LockKeyhole size={18} /> : <Icon size={18} />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-black text-white">{link.label}</p>
                  <span className={`route-status ${link.disabled ? 'route-status-muted' : 'route-status-active'}`}>{link.status}</span>
                </div>
                <p className="mt-1 break-words text-sm leading-6 text-slate-400">{link.description}</p>
              </div>
            </div>
            {!link.disabled ? <ArrowUpRight className="shrink-0 text-cyan-200" size={18} /> : null}
          </>
        );

        if (link.disabled) {
          return (
            <div key={link.label} className="project-link-card opacity-75" aria-disabled="true">
              {content}
            </div>
          );
        }

        return (
          <a key={link.label} href={link.href} className="project-link-card">
            {content}
          </a>
        );
      })}
    </div>
  );
}
