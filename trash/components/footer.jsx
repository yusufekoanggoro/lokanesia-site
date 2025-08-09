export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Tentang Kami */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Tentang LOKANESIA</h3>
          <p>
            LOKANESIA adalah platform edukasi yang membantu kamu mengenal keberagaman budaya Indonesia secara interaktif dan menyenangkan.
          </p>
        </div>

        {/* Navigasi Cepat */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navigasi</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Beranda</a></li>
            <li><a href="#eksplorasi" className="hover:text-white">Eksplorasi Budaya</a></li>
            <li><a href="#acara" className="hover:text-white">Acara Kebudayaan</a></li>
            <li><a href="#peta" className="hover:text-white">Peta Nusantara</a></li>
            <li><a href="#kontak" className="hover:text-white">Kontak</a></li>
          </ul>
        </div>

        {/* Kontak */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Kontak</h3>
          <p>Email: <a href="mailto:kontak@lokanesia.id" className="hover:text-white">kontak@lokanesia.id</a></p>
          <p>Telepon: <a href="tel:+6281234567890" className="hover:text-white">+62 812 3456 7890</a></p>
          <div className="flex space-x-4 mt-4">
            <a href="https://instagram.com/lokanesia" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white">
              {/* Bisa tambahkan ikon Instagram di sini */}
              IG
            </a>
            <a href="https://facebook.com/lokanesia" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white">
              FB
            </a>
            <a href="https://twitter.com/lokanesia" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white">
              TW
            </a>
          </div>
        </div>

        {/* Hak Cipta */}
        <div className="md:text-right">
          <p>© 2025 LOKANESIA. Semua hak dilindungi.</p>
          <p className="mt-2 text-sm text-gray-500">
            Made with ❤️ by Tim LOKANESIA
          </p>
        </div>
      </div>
    </footer>
  );
}
