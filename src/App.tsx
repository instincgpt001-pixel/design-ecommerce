import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { ProductCatalog } from "./components/ProductCatalog"
import { Footer } from "./components/Footer"
import { LoginForm } from "./components/LoginForm"
import { RegisterForm } from "./components/RegisterForm"
import { toast } from "sonner@2.0.3"

type User = {
  username: string
  email: string
}

type Page = "home" | "login" | "register"

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home")
  const [user, setUser] = useState<User | null>(null)
  const [authError, setAuthError] = useState("")

  // Mock database untuk demo
  const mockUsers = [
    { username: "admin", email: "admin@shopmart.com", password: "123456" },
    { username: "user", email: "user@example.com", password: "password" }
  ]

  const handleLogin = (email: string, password: string) => {
    setAuthError("")
    
    // Simulasi login - cek mock database
    const foundUser = mockUsers.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
      setUser({ username: foundUser.username, email: foundUser.email })
      setCurrentPage("home")
      toast.success(`Selamat datang, ${foundUser.username}!`)
    } else {
      setAuthError("Email atau password salah")
    }
  }

  const handleRegister = (username: string, email: string, password: string) => {
    setAuthError("")
    
    // Cek apakah email sudah terdaftar
    const existingUser = mockUsers.find(u => u.email === email)
    if (existingUser) {
      setAuthError("Email sudah terdaftar, silakan gunakan email lain")
      return
    }

    // Cek apakah username sudah ada
    const existingUsername = mockUsers.find(u => u.username === username)
    if (existingUsername) {
      setAuthError("Username sudah digunakan, silakan pilih username lain")
      return
    }

    // Simulasi register berhasil
    const newUser = { username, email, password }
    mockUsers.push(newUser)
    setUser({ username, email })
    setCurrentPage("home")
    toast.success(`Akun berhasil dibuat! Selamat datang, ${username}!`)
  }

  const handleLogout = () => {
    setUser(null)
    setCurrentPage("home")
    toast.success("Berhasil logout")
  }

  const handleContinueAsGuest = () => {
    setCurrentPage("home")
    toast.success("Melanjutkan sebagai guest")
  }

  const showLogin = () => {
    setCurrentPage("login")
    setAuthError("")
  }

  const showRegister = () => {
    setCurrentPage("register")
    setAuthError("")
  }

  const showHome = () => {
    setCurrentPage("home")
  }

  if (currentPage === "login") {
    return (
      <LoginForm
        onLogin={handleLogin}
        onSwitchToRegister={showRegister}
        onContinueAsGuest={handleContinueAsGuest}
        error={authError}
      />
    )
  }

  if (currentPage === "register") {
    return (
      <RegisterForm
        onRegister={handleRegister}
        onSwitchToLogin={showLogin}
        error={authError}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        user={user}
        onShowLogin={showLogin}
        onShowRegister={showRegister}
        onLogout={handleLogout}
      />
      <main>
        <ProductCatalog />
      </main>
      <Footer />
    </div>
  )
}