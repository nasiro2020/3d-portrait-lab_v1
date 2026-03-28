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

document.getElementById('orderForm')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(this));
  const waNumber = '60176621073';

  const addons = [];
  if (data.extraPersons && data.extraPersons !== '0') addons.push(`Extra persons: ${data.extraPersons}`);
  if (data.pet === 'yes') addons.push('Pet/animal (+RM39)');
  if (data.baseText === 'yes') addons.push(`Custom base text: "${data.baseTextValue || ''}"`);
  if (data.customDesign && data.customDesign !== 'no') addons.push(`Custom design edit: ${data.customDesign}${data.customDesignDesc ? ` — ${data.customDesignDesc}` : ''}`);

  const message = encodeURIComponent(
    `Hi! I'd like to place an order:\n\n` +
    `Name: ${data.name}\n` +
    `WhatsApp: ${data.wa}\n` +
    `Tier: ${data.tier}\n` +
    `Color: ${data.color}\n` +
    `Add-ons: ${addons.length ? addons.join(', ') : 'None'}\n` +
    `Special requests: ${data.notes || 'None'}\n\n` +
    `Please send me the payment link. Thank you!`
  );

  window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
});
