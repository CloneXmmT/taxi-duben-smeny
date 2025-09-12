"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === "admin" && password === "taxi123") {
      router.push("/admin");
    } else {
      setError("Zlé meno alebo heslo.");
    }
  }

  return (
    <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <form
        onSubmit={handleLogin}
        style={{
          display: "grid",
          gap: "12px",
          width: "300px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          background: "white",
        }}
      >
        <h2>Prihlásenie</h2>
        <input
          type="text"
          placeholder="Meno"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Heslo"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Prihlásiť sa</button>
      </form>
    </main>
  );
}
