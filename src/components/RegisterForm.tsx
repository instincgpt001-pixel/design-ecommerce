import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Alert, AlertDescription } from "./ui/alert"
import { Mail, Lock, User, AlertCircle } from "lucide-react"

interface RegisterFormProps {
  onRegister: (username: string, email: string, password: string) => void
  onSwitchToLogin: () => void
  error?: string
}

export function RegisterForm({ onRegister, onSwitchToLogin, error }: RegisterFormProps) {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [formError, setFormError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")

    // Validasi
    if (!username) {
      setFormError("Username harus diisi")
      return
    }
    if (username.length < 3) {
      setFormError("Username minimal 3 karakter")
      return
    }
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
    if (!confirmPassword) {
      setFormError("Konfirmasi password harus diisi")
      return
    }
    if (password !== confirmPassword) {
      setFormError("Password dan konfirmasi password tidak sama")
      return
    }

    onRegister(username, email, password)
  }

  const displayError = error || formError

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle>Daftar ke ShopMart</CardTitle>
          <CardDescription>
            Buat akun baru untuk mulai berbelanja
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
              <Label htmlFor="username">Username</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Masukkan username Anda"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Konfirmasi Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="Konfirmasi password Anda"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Sudah punya akun?{" "}
              <button
                onClick={onSwitchToLogin}
                className="text-primary hover:underline font-medium"
              >
                Login sekarang
              </button>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}