interface FooterData {
  name: string;
  address: string;
  phone: string;
}

export default function FooterComponent() {
  const footerData: FooterData = {
    name: "eunah",
    address: "dd",
    phone: "010"
  };

  return (
    <footer className="bg-stone-800 text-white py-5">
      <div className="w-full lg:max-w-7xl mx-auto px-4">
        <div className="space-y-2">
          <p className="text-sm">{footerData.address}</p>
          <p className="text-sm">{footerData.phone}</p>
          <p className="text-sm">{footerData.name}</p>
        </div>
      </div>
    </footer>
  );
}

