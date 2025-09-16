import { Search, ShoppingCart, User, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface NavbarProps {
  user?: { username: string; email: string } | null
  onShowLogin: () => void
  onShowRegister: () => void
  onLogout: () => void
}

export function Navbar({ user, onShowLogin, onShowRegister, onLogout }: NavbarProps) {
  return (
    <nav className="border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo dan Nama */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold text-foreground">ShopMart</span>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Cari produk..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Keranjang, Auth Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="icon" className="relative">
              <ShoppingCart className="h-4 w-4" />
              <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Button>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-muted-foreground">
                  Halo, <span className="font-medium text-foreground">{user.username}</span>
                </span>
                <Button variant="outline" onClick={onLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <Button variant="outline" onClick={onShowLogin}>
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                
                <Button onClick={onShowRegister}>
                  Register
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}