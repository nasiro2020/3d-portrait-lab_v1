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
