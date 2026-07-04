import { ArrowUpRight, ExternalLink, Github, LockKeyhole, MonitorPlay, Rocket, Route, Server } from 'lucide-react';

const iconByKind = {
  internal: Route,
  demo: MonitorPlay,
  github: Github,
  deploy: Rocket,
  planned: Server,
};

const iconClassByKind = {
  internal: 'bg-emerald-300/10 text-emerald-200 ring-emerald-300/20',
  demo: 'bg-sky-300/10 text-sky-200 ring-sky-300/20',
  github: 'bg-white/8 text-white ring-white/15',
  deploy: 'bg-emerald-300/10 text-emerald-200 ring-emerald-300/20',
  planned: 'bg-amber-300/10 text-amber-200 ring-amber-300/20',
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
        const external = link.external || /^https?:\/\//.test(link.href ?? '');
        const disabled = link.disabled || !link.href || link.href === '#';
        const iconClass = iconClassByKind[link.kind] ?? iconClassByKind.internal;
        const statusClass = disabled ? 'route-status-muted' : link.kind === 'github' ? 'route-status-info' : 'route-status-active';

        const content = (
          <>
            <div className="flex items-start gap-3">
              <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ring-1 ${iconClass}`}>
                {disabled ? <LockKeyhole size={18} /> : <Icon size={18} />}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-black text-white">{link.label}</p>
                  <span className={`route-status ${statusClass}`}>{link.status}</span>
                </div>
                <p className="mt-1 break-words text-sm leading-6 text-slate-400">{link.description}</p>
              </div>
            </div>
            {!disabled ? <ExternalLink className="shrink-0 text-emerald-200" size={18} /> : null}
          </>
        );

        if (disabled) {
          return (
            <div key={`${link.label}-${link.status}`} className="project-link-card cursor-not-allowed opacity-75" aria-disabled="true">
              {content}
            </div>
          );
        }

        return (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            className="project-link-card"
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
          >
            {content}
          </a>
        );
      })}
    </div>
  );
}
