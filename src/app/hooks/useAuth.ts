import { useCallback, useState } from "react";

const AUTH_STORAGE_KEY = "cdr-admin-auth";

export function getStoredAuth(): boolean {
  return localStorage.getItem(AUTH_STORAGE_KEY) === "true";
}

export function loginAdmin() {
  localStorage.setItem(AUTH_STORAGE_KEY, "true");
}

export function logoutAdmin() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function authenticateAdmin(username: string, password: string) {
  return username === "1120956515" && password === "1120956515";
}

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      return getStoredAuth();
    } catch {
      return false;
    }
  });

  const login = useCallback(() => {
    loginAdmin();
    setIsAuthenticated(true);
  }, []);

  const logout = useCallback(() => {
    logoutAdmin();
    setIsAuthenticated(false);
  }, []);

  return {
    isAuthenticated,
    login,
    logout,
  };
}
