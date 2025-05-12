<!-- filepath: /home/haphuthinh/Workplace/Test/github-agent-test/content/posts/understanding-typescript-for-react-developers.md -->
---
title: "Understanding TypeScript for React Developers"
date: "2025-05-05"
excerpt: "Learn how TypeScript can enhance your React development experience with static type checking"
coverImage: "/images/typescript.jpg"
author: "Sam Engineer"
tags: ["TypeScript", "React", "JavaScript"]
---

# Understanding TypeScript for React Developers

TypeScript has become increasingly popular in the React ecosystem, offering static type checking that can catch errors during development rather than at runtime.

## Why Use TypeScript with React?

TypeScript provides several benefits when working with React:

1. **Type Safety**: Catch errors before they occur in production
2. **Better Developer Experience**: Improved autocomplete and IntelliSense
3. **Self-Documenting Code**: Types serve as documentation
4. **Safer Refactoring**: The compiler catches issues when making changes

## Getting Started

To start a new React project with TypeScript:

```bash
npx create-react-app my-app --template typescript
# or with Next.js
npx create-next-app@latest my-app --ts
```

## Common TypeScript Patterns in React

### Component Props

```tsx
interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {text}
    </button>
  );
};
```

### Typing useState

```tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  // Explicitly typing the state
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // TypeScript now knows that user might be null
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : user ? (
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}
```

### Typing Event Handlers

```tsx
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};
