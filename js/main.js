// Mobile hamburger menu
const hamburger = document.getElementById('navHamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// Order form — placeholder handler
// Replace with actual ToyyibPay / Billplz integration

document.getElementById('order-form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(this));
  const waNumber = '60XXXXXXXXX'; // Replace with actual WhatsApp number

  const message = encodeURIComponent(
    `Hi! I'd like to place an order:\n\n` +
    `Name: ${data.name}\n` +
    `Tier: ${data.tier}\n` +
    `Color: ${data.color}\n` +
    `Add-ons: ${data.addons || 'None'}\n\n` +
    `Please send me the payment link. Thank you!`
  );

  window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
});
