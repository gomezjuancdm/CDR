import { useCallback, useEffect, useState } from "react";
import {
  getDataByType,
  addItem,
  updateItem,
  deleteItem,
  getItemById,
  searchItems,
} from "../database/db";

type DataType = "news" | "events" | "documents" | "announcements" | "messages";

export function useData<T>(type: DataType) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(() => {
    setLoading(true);
    try {
      setData(getDataByType(type) as T[]);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al cargar datos");
    } finally {
      setLoading(false);
    }
  }, [type]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return {
    data,
    loading,
    error,
    refetch,
    add: (item: any) => {
      try {
        addItem(type, item);
        refetch();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      }
    },
    update: (id: number, updates: any) => {
      try {
        updateItem(type, id, updates);
        refetch();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      }
    },
    delete: (id: number) => {
      try {
        deleteItem(type, id);
        refetch();
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error");
      }
    },
    getById: (id: number) => getItemById(type, id),
    search: (predicate: (item: any) => boolean) => searchItems(type, predicate),
  };
}
