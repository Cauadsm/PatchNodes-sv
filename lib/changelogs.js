export const CHANGELOGS = [
  {
    slug: "v1-0",
    version: "1.0",
    title: "Atualização 1.0",
    date: "2025-12-01",
    summary: "Novo mapa, correções e otimizações",
    changes: [
      "Novo mapa principal",
      "Correção de exploits em economia",
      "Melhorias de performance e lag",
    ],
  },
  {
    slug: "v1-1",
    version: "1.1",
    title: "Atualização 1.1",
    date: "2025-12-08",
    summary: "Balanceamento de itens e mobs",
    changes: [
      "Balanceamento de espadas e armaduras",
      "Ajuste de spawn de mobs em biomas",
      "Correções menores em comandos",
    ],
  },
  {
    slug: "v1-2",
    version: "1.2",
    title: "Atualização 1.2",
    date: "2025-12-12",
    summary: "Novas quests semanais",
    changes: [
      "Sistema de quests semanais",
      "Novos cosméticos e partículas",
      "Correção visual no HUD",
    ],
  },
];

export function getChangelog(slug) {
  return CHANGELOGS.find((c) => c.slug === slug);
}
