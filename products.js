/*
  PRODUCT FILE
  This file is the fallback catalogue for the public website.
  For easy management, use ADMIN.html instead.
*/
const STORE_CONFIG = {
  storeName: "Jignesh Collection",
  whatsappNumber: "919714316584",
  location: "Gujarat, India",
  tagline: "Sarees & Jewellery • Your style, your story."
};

const PRODUCTS = [
  {
    id: 1, name: "Elegant Silk Saree", category: "Sarees",
    price: 999, oldPrice: 1299, badge: "NEW",
    image: "assets/products/saree-1.svg",
    description: "Elegant saree with a graceful finish, suitable for festive and special occasions.",
    details: ["Soft fabric", "Free-size saree", "Festive / party wear"], featured: true
  },
  {
    id: 2, name: "Daily Wear Printed Saree", category: "Sarees",
    price: 599, oldPrice: 799, badge: "BESTSELLER",
    image: "assets/products/saree-2.svg",
    description: "Comfortable and stylish printed saree for regular wear and casual occasions.",
    details: ["Lightweight", "Easy to maintain", "Daily wear"], featured: true
  },
  {
    id: 3, name: "Classic Earrings", category: "Jewellery",
    price: 249, oldPrice: 349, badge: "NEW",
    image: "assets/products/jewellery-1.svg",
    description: "A versatile pair of earrings for traditional and modern outfits.",
    details: ["Lightweight", "Elegant design", "Gift-ready"], featured: true
  },
  {
    id: 4, name: "Kundan Style Necklace Set", category: "Jewellery",
    price: 799, oldPrice: 999, badge: "LIMITED",
    image: "assets/products/jewellery-2.svg",
    description: "Statement necklace set designed for weddings, festivals and celebrations.",
    details: ["Necklace + earrings", "Party wear", "Gift option"], featured: false
  }
];
