# SRE Portfolio template

- [PREVIEW](https://itspecialistmike.github.io/sre-portfolio-template)

SPA-портфолио DevOps Engineer / SRE, построенное на Vite + React + TypeScript + Tailwind CSS.

## 🚀 Быстрый старт

```bash
# 1. Клонировать репозиторий
git clone https://github.com/itSpecialistMike/sre-portfolio-template && cd sre-portfolio-template

# 2. Установить зависимости
npm install

# 3. Запустить dev-сервер
npm run dev

# 4. Открыть в браузере
# http://localhost:5173
```

## 📦 Сборка для production

```bash
# Собрать оптимизированный бандл
npm run build

# Превью production-сборки локально
npm run preview
```

Статические файлы появятся в папке `dist/`.

## 🛠 Технологии

| Технология | Версия |
|------------|--------|
| Vite | ^5.0.8 |
| React | ^18.2.0 |
| TypeScript | ^5.2.2 |
| Tailwind CSS | ^3.4.0 |

## 📁 Структура проекта

```
src/
├── components/
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, TechStack, Projects, Timeline, Contact
│   └── ui/              # Button, Badge, Cards и т.д.
├── data/
│   └── content.ts       # Весь контент (легко редактировать)
├── types/
│   └── index.ts         # TypeScript интерфейсы
├── utils/
│   └── cn.ts            # Утилита для классов
├── App.tsx              # Главный компонент
└── main.tsx             # Точка входа
```

## ✏️ Кастомизация

### Изменить контент

Все тексты, проекты, навыки — в файле `src/data/content.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 'my-project',
    title: 'Мой проект',
    description: 'Описание...',
    // ...
  }
];
```

### Изменить цвета

Цвета настроены в `tailwind.config.js` под Material Design 3. Для смены темы — редактируй секцию `colors`.

### Добавить секцию

1. Создай компонент в `src/components/sections/`
2. Импортируй в `App.tsx`
3. Добавь пункт в `src/data/content.ts` → `navItems`

## 🐛 Troubleshooting

| Проблема | Решение |
|----------|---------|
| `Cannot find module '@/...'` | Проверь `tsconfig.json` → `paths` |
| Tailwind не работает | Убедись что `index.css` содержит `@tailwind` директивы |
| Material Icons не отображаются | Проверь подключение шрифта в `index.html` |



## 📬 Контакты

- Telegram: [@mikesweety](https://t.me/mikesweety)
