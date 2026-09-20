# TypeScript with React — Practice Project

Hands-on practice repo for learning **TypeScript with React**, built with **Vite + React 19 + TypeScript**.

Each topic below follows the learning path I practiced, with the matching component and concepts.

---

## Learning Path

| Timestamp | Topic | Component / File |
|-----------|--------|------------------|
| `00:00:00` | Introduction | Project overview |
| `00:01:53` | TypeScript with React Setup | Vite + TS config |
| `00:20:17` | Optional & Default Props | `src/components/StatciCompo.tsx` |
| `00:23:47` | Array as Props | `src/components/array.tsx` |
| `00:29:57` | Array of Object Types | `src/components/Object.tsx` |
| `00:38:24` | useState in TypeScript | `src/components/useSt.tsx`, `src/App.tsx` |
| `00:55:27` | Events with TypeScript | `src/components/Event.tsx` |
| `01:08:30` | useRef in TypeScript | `src/components/useRef.tsx` |
| `01:17:00` | API Integration with TypeScript | `src/components/ApiI.tsx` |
| `01:44:51` | Reusing Interfaces Across Components | `src/type/type.ts`, `src/components/Card.tsx` |

---

## Tech Stack

- **React** `^19.2`
- **TypeScript** `~6.0`
- **Vite** `^8.3`
- **ESLint** with TypeScript + React Hooks plugins

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Type-check + production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

Open the local URL shown by Vite (usually `http://localhost:5173`).

---

## Project Structure

```
Day-1_TypeScript_Setup/
├── public/
├── src/
│   ├── components/
│   │   ├── StatciCompo.tsx   # Optional & default props
│   │   ├── array.tsx         # Array as props
│   │   ├── Object.tsx        # Array of object types
│   │   ├── useSt.tsx         # useState basics
│   │   ├── Event.tsx         # Typed events
│   │   ├── useRef.tsx        # useRef with DOM elements
│   │   ├── ApiI.tsx          # Fetch API + Product[] state
│   │   └── Card.tsx          # Shared Product interface
│   ├── type/
│   │   └── type.ts           # Shared Product interface
│   ├── App.tsx               # Main demo (useState, objects, arrays)
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## Topics Covered

### 1. Introduction (`00:00:00`)

What this repo is: a single practice app where each React + TypeScript concept lives in its own component, wired from `App.tsx`.

### 2. TypeScript with React Setup (`00:01:53`)

- Vite React + TypeScript template
- `tsconfig.app.json` with `jsx: "react-jsx"`, strict-ish lint options
- Entry: `main.tsx` → `App.tsx`

### 3. Optional & Default Props (`00:20:17`)

**File:** `src/components/StatciCompo.tsx`

- Props typed with `type` / `interface`
- Optional prop: `age?: number`
- Default value: `age = 23`

```tsx
type user = {
  name: string
  age?: number
}

function StatciCompo({ name, age = 23 }: user) { ... }
```

### 4. Array as Props (`00:23:47`)

**File:** `src/components/array.tsx`

- Prop typed as `string[]`
- Mapped list rendering

```tsx
interface User {
  names: string[]
}
```

### 5. Array of Object Types (`00:29:57`)

**File:** `src/components/Object.tsx`

- Object shape via `interface product`
- Props as `product[]` through `ProductArray`

```tsx
interface product {
  name: String
  price: number
  model: String
}

interface ProductArray {
  products: product[]
}
```

### 6. useState in TypeScript (`00:38:24`)

**Files:** `src/components/useSt.tsx`, `src/App.tsx`

Practiced generics with `useState`:

| Pattern | Example |
|---------|---------|
| Primitive | `useState<string>("Ramesh")` |
| Union | `useState<string \| number>("Ramesh")` |
| Object | `useState<User2>({ name, roll, pass })` |
| String array | `useState<string[]>([...])` |
| Number array | `useState<number[]>([...])` |
| Array of objects | `useState<ArrayObject[]>([...])` |

### 7. Events with TypeScript (`00:55:27`)

**File:** `src/components/Event.tsx`

| Event | Type |
|-------|------|
| `onChange` | `React.ChangeEvent<HTMLInputElement>` |
| `onClick` | `React.MouseEvent<HTMLButtonElement>` |
| `onSubmit` | `React.FormEvent<HTMLFormElement>` |

### 8. useRef in TypeScript (`01:08:30`)

**File:** `src/components/useRef.tsx`

- Typed DOM refs: `useRef<HTMLInputElement>(null)`, `useRef<HTMLButtonElement>(null)`
- Optional chaining: `myref.current?.value`, `buttonref.current?.focus()`

### 9. API Integration with TypeScript (`01:17:00`)

**File:** `src/components/ApiI.tsx`

- Fetches products from [Fake Store API](https://fakestoreapi.com/products)
- State typed as `Product[]` and `Product | null`
- Two-column layout: product list (left) + detail panel (right)

```tsx
const [products, setProducts] = useState<Product[]>([])
const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
```

### 10. Reusing Interfaces Across Components (`01:44:51`)

**Files:** `src/type/type.ts`, `src/components/Card.tsx`, `src/components/ApiI.tsx`

Shared `Product` interface imported in both the list and detail components:

```ts
// src/type/type.ts
export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  image: string
}
```

```tsx
import type { Product } from '../type/type'
```

---

## What You'll Practice

- Typing component props (`interface` / `type`)
- Optional props and default values
- Arrays and arrays of objects as props
- Generics with `useState` and `useRef`
- Typing React events (`ChangeEvent`, `MouseEvent`, `FormEvent`)
- Fetching APIs and typing response data
- Sharing interfaces across components (`import type`)

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Type-check (`tsc -b`) + build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Notes

- Some early demos in `App.tsx` are commented out (`StatciCompo`, `Array`, `Object`) so you can uncomment them one topic at a time while practicing.
- The API demo uses a public Fake Store endpoint — no API key required.
- This is a **learning / practice** project, not a production app.

---

## License

Personal practice project — feel free to fork and learn from it.
