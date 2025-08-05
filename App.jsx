const fonts = [
  { id: 1, name: "Font Sang Trọng", price: 10, description: "Font chữ thanh lịch, phù hợp cho thiết kế cao cấp.", preview: "AaBbCc" },
  { id: 2, name: "Font Sáng Tạo", price: 15, description: "Font độc đáo, lý tưởng cho các dự án sáng tạo.", preview: "AaBbCc" },
  { id: 3, name: "Font Hiện Đại", price: 12, description: "Font hiện đại, phù hợp cho website và ứng dụng.", preview: "AaBbCc" },
];

const FontCard = ({ font }) => {
  const handlePurchase = () => {
    alert(`Bạn đã mua ${font.name} với giá $${font.price}!`);
    // Thay bằng tích hợp API thanh toán thực tế (như Stripe)
  };

  return (
    <div className="font-card">
      <h3 className="font-card-title">{font.name}</h3>
      <p className="font-card-description">{font.description}</p>
      <p className="font-card-price">${font.price}</p>
      <p className="font-card-preview">Preview: <span className="font-serif">{font.preview}</span></p>
      <button
        onClick={handlePurchase}
        className="font-card-button"
      >
        Mua Ngay
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="header-title">Cửa Hàng Font Chữ</h1>
        <p className="header-subtitle">Khám phá bộ sưu tập font chữ độc đáo của chúng tôi!</p>
      </header>
      <div className="font-grid">
        {fonts.map((font) => (
          <FontCard key={font.id} font={font} />
        ))}
      </div>
      <footer className="app-footer">
        <p>&copy; 2025 Cửa Hàng Font Chữ. All rights reserved.</p>
      </footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
