import { defineConfig } from "vitepress";
import { ru } from "./ru/config";
import { en } from "./en/config";
import { search } from "./search";
import lightbox from "vitepress-plugin-lightbox";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";

export default defineConfig ({
  lang: "ru-RU",
  title: "Aurora Launcher",
  description: "Лаунчер с удобной кастомизацией дизайна для игровых проектов Minecraft",
  cleanUrls: true, 
  rewrites: {
    'ru/:rest*': ':rest*'
  },
  head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/favicons/apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        sizes: "any",
        href: "/favicons/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/favicons/icon.svg",
      },
    ],
    ["link", { rel: "manifest", href: "/favicons/manifest.webmanifest" }],
    ["meta", { name: "theme-color", content: "#0080ff" }],
  ],
  sitemap: {
    hostname: "https://docs.aurora-launcher.ru/",
  },
  lastUpdated: true,
  markdown: {
    config: (md) => {
      md.use(lightbox, {});
      md.use(groupIconMdPlugin);
    },
    image: {
      lazyLoading: true,
    },
  },
  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          "vanilla": "vscode-icons:file-type-minecraft",
          "fabric": "https://raw.githubusercontent.com/FabricMC/community/cf5bd7950925e9ebe1fe039720c6a649671c10eb/media/unascribed/svg/fabric.svg",
          "quilt": "https://raw.githubusercontent.com/QuiltMC/quiltmc.org/00d94f12cd1161d3f252d477a52328a381ea4845/public/assets/img/logo.svg",
          "forge": "https://raw.githubusercontent.com/MinecraftForge/Documentation/96af96778cb86597d43276b215bbe8fd65df5a71/forge_theme/images/safari-pinned-tab.svg",
          "neoforge": "https://raw.githubusercontent.com/neoforged/Documentation/refs/heads/main/static/img/logo.svg",
          "postgresql": "vscode-icons:file-type-pgsql",
          "mysql": "vscode-icons:file-type-mysql",
          "macos": "vscode-icons:file-type-applescript",
          "windows": "https://www.svgrepo.com/show/331786/windows-azure.svg",
          "linux": "https://www.svgrepo.com/show/354004/linux-tux.svg",
          "http": "vscode-icons:file-type-nginx",
          "ipv4": "vscode-icons:file-type-nginx",
        },
      }),
    ],
  },
  locales: {
    root: ru,
    en: en
  },
  themeConfig: {
    logo: "/logo.svg",
    outline: [2, 3],
    socialLinks: [
      {
        icon: "youtube",
        link: "https://www.youtube.com/@AuroraTeamRu",
      },
      {
        icon: "discord",
        link: "https://discord.aurora-launcher.ru",
      },
      {
        icon: "github",
        link: "https://github.com/AuroraTeam/AuroraLauncher",
      },
      {
        icon: "telegram",
        link: "https://t.me/aurora_team_tg",
      },
    ],
    editLink: {
      pattern: "https://github.com/AuroraTeam/docs.aurora-launcher.ru/edit/dev/docs/:path",
    },
    search: search,
  },
});
