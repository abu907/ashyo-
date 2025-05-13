// src/components/Categories.tsx
import { useEffect, useState } from "react";

interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetch('https://api.ashyo.fullstackdev.uz/api/v1/category')
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <nav className="flex gap-6 mt-4">
      {categories.map((cat) => (
        <a
          key={cat.id}
          href="#"
          className="text-sm font-medium text-gray-700 hover:text-blue-700 transition"
        >
          {cat.name}
        </a>
      ))}
    </nav>
  );
};

export default Categories;
