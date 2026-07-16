import { useCallback, useState } from "react";

export function useAdminResource<T extends { id: number }>(initialData: T[]) {
  const [items, setItems] = useState<T[]>(initialData);

  const addItem = useCallback((item: Omit<T, "id">) => {
    setItems((currentItems) => {
      const nextId =
        currentItems.length > 0
          ? Math.max(...currentItems.map((entry) => entry.id)) + 1
          : 1;
      return [...currentItems, { ...item, id: nextId } as T];
    });
  }, []);

  const updateItem = useCallback((id: number, changes: Partial<T>) => {
    setItems((currentItems) =>
      currentItems.map((entry) =>
        entry.id === id ? { ...entry, ...changes } : entry,
      ),
    );
  }, []);

  const removeItem = useCallback((id: number) => {
    setItems((currentItems) => currentItems.filter((entry) => entry.id !== id));
  }, []);

  return {
    items,
    addItem,
    updateItem,
    removeItem,
    setItems,
  };
}
