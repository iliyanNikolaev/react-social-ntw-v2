# Тук може да се придобие бегла представа какво ще представлява user interface-a на приложението: [glowing-gumdrop-34370b.netlify.app](https://glowing-gumdrop-34370b.netlify.app/)  <---- LIVE DEMO HERE

# Архитектура на проекта

Този документ описва структурата и начина, по който е организирано приложението.   

---

## 1. Глобални стилове (`index.css`)

Файлът `index.css` съдържа **само глобални и преизползваеми стилове**.

Какво има вътре:
- CSS Reset (margin, padding, box-sizing)
- Глобални променливи (цветове, тема)
- Основен стил за body (фон, шрифт)
- Преизползваеми класове:
  - `.container` → центрира съдържанието
  - `.card` → визуална кутия (за постове, секции и др.)
  - `.button` → бутони
  - `.input` → полета за въвеждане

Идея:
Това са **общи UI елементи**, които се използват навсякъде в приложението.

---

## 2. Layout слой (`MainLayout.jsx`)

`MainLayout` е **основният layout (рамката)** на приложението.

Той дефинира как изглежда структурата на всяка страница.

Структура:
```
MainLayout
├── Navbar
├── Sidebar
├── Content (children)
├── Floating Button (+)
└── Footer
```

Какво прави:
- Подрежда елементите на страницата
- Съдържа навигацията (navbar + sidebar)
- Осигурява responsive поведение
- Показва постоянни елементи (footer, бутон и т.н.)

### ⚠️ Важно:
`MainLayout` НЕ е страница.

Той е **обвивка (wrapper)** около страниците.

---

## 3. Страници (Pages)

Страниците са:

- Home
- Profile
- Users
- EditPost
- EditProfile
- Login
- Register

---

Пример (Home.jsx):

```jsx
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container">
        <div className="card">Post 1</div>
        <div className="card">Post 2</div>
      </div>
    </MainLayout>
  );
}
```

Идея:

Всяка страница:

използва MainLayout
добавя собствено съдържание
използва .card, .container и др.

## 4. Поток на приложението
```
App.jsx (Router)
   ↓
Страница (Home, Profile и т.н.)
   ↓
MainLayout
   ↓
Content (children)
```

## 5. Routing (App.jsx)
Routing се управлява чрез react-router-dom.

Пример:
```jsx
import { Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/users" element={<Users />} />
  <Route path="/login" element={<Login />} />
</Routes>
```

Идея:
Всеки route зарежда страница
Всяка страница използва layout-а

## 6. Разделение на отговорностите
| Част       | Отговорност                    |
| ---------- | ------------------------------ |
| index.css  | Глобални стилове и UI елементи |
| MainLayout | Структура и подредба           |
| Pages      | Съдържание и логика            |


## 7. Структура на проекта
```
src/
 ├── App.jsx
 ├── index.css
 ├── layouts/
 │    └── MainLayout.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Profile.jsx
 │    ├── Users.jsx
 │    ├── PostDetails.jsx
 │    ├── EditPost.jsx
 │    ├── EditProfile.jsx
 │    ├── Login.jsx
 │    └── Register.jsx
 ```