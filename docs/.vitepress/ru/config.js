import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export const ru = {
    label: "Русский",
    lang: "ru",
    themeConfig: {
        nav: navbar,
        sidebar: sidebar,
        outlineTitle: "На этой странице",
        docFooter: {
            prev: "Предыдущая страница",
            next: "Следующая страница",
        },
        lastUpdated: {
            text: "Последнее обновление",
        },
        darkModeSwitchLabel: "Тема",
        lightModeSwitchTitle: "Переключить на светлую тему",
        darkModeSwitchTitle: "Переключить на тёмную тему",
        sidebarMenuLabel: "Меню",
        returnToTopLabel: "Наверх",
        editLink: {
            text: "Редактировать страницу",
            pattern: "https://github.com/AuroraTeam/docs.aurora-launcher.ru/edit/dev/docs/:path",
        },
    },
}

export const search = {
        translations: {
          button: {
            buttonText: "Поиск",
        },
          modal: {
            displayDetails: "Детальный просмотр",
            resetButtonTitle: "Сбросить поиск",
            noResultsText: "Не найдено",
            footer: {
              selectText: "Выбор",
              navigateText: "Навигация",
              closeText: "Закрыть",
            },
        },
    },
}