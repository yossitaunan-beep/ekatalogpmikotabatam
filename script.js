// MENU LAMA TETAP ADA, CUMA NAMBAH ADMIN
const menuList = [
  { name: 'Beranda', link: 'index.html' },
  { name: 'Layanan', link: 'layanan.html' },
  { name: 'Produk', link: 'produk.html' },
  { name: 'Tentang', link: 'tentang.html' },
  { name: 'Kontak', link: 'kontak.html' },
  { name: 'Admin', link: 'admin/login.html', style: 'admin' },
];

function renderNavbar(){
  const nav = document.getElementById('nav-menu');
  if(!nav) return;
  // Jangan render ulang kalau sudah ada Admin
  if(nav.innerHTML.includes('Admin')) return;
  
  let html = '';
  menuList.forEach(m => {
    if(m.style === 'admin'){
      html += `<a href="${m.link}" class="btn-admin" style="background:#fff5f5;border:1px solid #fecaca;color:#b91c1c;padding:6px 14px;border-radius:99px;font-weight:700;font-size:12.5px;text-decoration:none">Admin</a>`;
    } else {
      html += `<a href="${m.link}">${m.name}</a>`;
    }
  });
  html += `<a href="https://wa.me/6281170019960" style="background:#b91c1c;color:#fff;padding:9px 18px;border-radius:99px;text-decoration:none;font-weight:700;font-size:12px;margin-left:4px">Donor Sekarang</a>`;
  nav.innerHTML = html;
}

document.addEventListener('DOMContentLoaded', renderNavbar);