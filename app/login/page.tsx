"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import Input from "../_components/Input";
import Button from "../_components/Button";

export default function Login() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [secureWord, setSecureWord] = useState("");
  const router = useRouter();

  const handleUsernameSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/getSecureWord", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username }),
    });

    const data = await res.json();
    setSecureWord(data.secureWord);
    setStep(2);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const hashedPassword = await bcrypt.hash(password, 10);

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password: hashedPassword }),
    });

    if (res.ok) {
      setStep(4);
      setTimeout(() => router.push("/dashboard"), 1000);
    }
  };

  return (
    <div className="grid px-4 h-dvh place-items-center">
      <div className="w-full max-w-xl p-4 space-y-4 border rounded-lg border-secondary-500">
        <h2>Login</h2>

        {step === 1 && (
          <form
            onSubmit={handleUsernameSubmit}
            className="space-y-4 text-secondary-500"
          >
            <div className="space-y-2">
              <label htmlFor="username" className="block">
                Username
              </label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-4 text-center">
            <h5>Hello {username}!</h5>
            <p>
              Your secure word is <strong>{secureWord}</strong>
            </p>
            <Button className="w-full" onClick={() => setStep(3)}>
              Next
            </Button>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="password" className="block">
                Password
              </label>
              <Input
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Next
            </Button>
          </form>
        )}

        {step === 4 && (
          <p className="font-semibold text-green-500">Login successful</p>
        )}
      </div>
    </div>
  );
}
