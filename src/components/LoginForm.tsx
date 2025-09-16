import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription } from "./ui/alert"
import { Mail, Lock, AlertCircle } from "lucide-react"

interface LoginFormProps {
  onLogin: (email: string, password: string) => void
  onSwitchToRegister: () => void
  onContinueAsGuest: () => void
  error?: string
}

export function LoginForm({ onLogin, onSwitchToRegister, onContinueAsGuest, error }: LoginFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")

    // Validasi sederhana
    if (!email) {
      setFormError("Email harus diisi")
      return
    }
    if (!email.includes("@")) {
      setFormError("Format email tidak valid")
      return
    }
    if (!password) {
      setFormError("Password harus diisi")
      return
    }
    if (password.length < 6) {
      setFormError("Password minimal 6 karakter")
      return
    }

    onLogin(email, password)
  }

  const displayError = error || formError

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Login ke ShopMart</CardTitle>
          <CardDescription>
            Masuk ke akun Anda untuk melanjutkan belanja
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {displayError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{displayError}</AlertDescription>
              </Alert>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Masukkan email Anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Masukkan password Anda"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Belum punya akun?{" "}
              <button
                onClick={onSwitchToRegister}
                className="text-primary hover:underline font-medium"
              >
                Registrasi sekarang
              </button>
            </p>
            
            <p className="text-sm">
              atau{" "}
              <button
                onClick={onContinueAsGuest}
                className="text-muted-foreground hover:text-foreground hover:underline"
              >
                Tetap Melanjutkan sebagai guest
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}