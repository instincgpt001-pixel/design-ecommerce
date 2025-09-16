import { Separator } from "./ui/separator"

export function Footer() {
  const groupMembers = [
    "Ahmad Rizki Pratama",
    "Siti Nurhaliza",
    "Budi Santoso",
    "Dewi Maharani",
    "Eko Prasetyo"
  ]

  return (
    <footer className="bg-muted/50 border-t mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-4">Tim Pengembang</h3>
          <p className="text-muted-foreground mb-4">
            Website E-commerce ShopMart
          </p>
          
          <Separator className="my-6" />
          
          <div className="mb-4">
            <h4 className="font-medium mb-3">Anggota Kelompok:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {groupMembers.map((member, index) => (
                <span 
                  key={index}
                  className="bg-background px-3 py-1 rounded-full text-sm border"
                >
                  {member}
                </span>
              ))}
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-sm text-muted-foreground">
            <p>&copy; 2024 ShopMart. Dibuat sebagai tugas kelompok.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}