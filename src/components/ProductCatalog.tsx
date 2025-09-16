import { ProductCard } from "./ProductCard"

const mockProducts = [
  {
    id: 1,
    name: "MacBook Pro 13\" M2 Chip 256GB SSD",
    price: 21999000,
    originalPrice: 24999000,
    rating: 4.8,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1613398773682-9e272a85f203?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU3OTE2MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Laptop",
    isOnSale: true
  },
  {
    id: 2,
    name: "iPhone 15 Pro Max 256GB Space Black",
    price: 19999000,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1675953935267-e039f13ddd79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwcGhvbmV8ZW58MXx8fHwxNzU3OTU3OTk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Smartphone"
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: 4999000,
    originalPrice: 5499000,
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1632200004922-bc18602c79fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwd2lyZWxlc3MlMjBhdWRpb3xlbnwxfHx8fDE3NTc5MzIyNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Audio",
    isOnSale: true
  },
  {
    id: 4,
    name: "Apple Watch Series 9 GPS + Cellular 45mm",
    price: 7499000,
    rating: 4.6,
    reviews: 92,
    image: "https://images.unsplash.com/photo-1557438159-51eec7a6c9e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRjaCUyMHNtYXJ0JTIwd2VhcmFibGV8ZW58MXx8fHwxNzU4MDExNjg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Wearable"
  },
  {
    id: 5,
    name: "Canon EOS R6 Mark II Mirrorless Camera Body",
    price: 38999000,
    originalPrice: 42999000,
    rating: 4.8,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1625816615218-a026e9543bce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBkaWdpdGFsJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzU3OTI3NDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Kamera",
    isOnSale: true
  },
  {
    id: 6,
    name: "iPad Pro 12.9\" M2 Chip WiFi 128GB Space Gray",
    price: 16999000,
    rating: 4.7,
    reviews: 73,
    image: "https://images.unsplash.com/photo-1604319463636-54cf7751107f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBjb21wdXRlciUyMGRldmljZXxlbnwxfHx8fDE3NTgwMTE2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Tablet"
  }
]

export function ProductCatalog() {
  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">Produk Terpopuler</h2>
          <p className="text-muted-foreground">Temukan produk elektronik terbaik dengan harga terbaik</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}