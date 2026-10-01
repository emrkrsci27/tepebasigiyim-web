(function () {
  var S = window.SITE || {};
  var igUrl = "https://www.instagram.com/" + (S.instagram || "tepebasigiyim") + "/";
  document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = igUrl; });
  document.getElementById("year").textContent = new Date().getFullYear();

  var list = document.getElementById("contact-list");
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function row(label, html) { var li = document.createElement("li"); li.innerHTML = "<b>" + label + "</b>" + html; list.appendChild(li); }
  if (S.address) row("Adres", esc(S.address));
  if (S.lat && S.lng) row("Yol Tarifi", '<a href="https://www.google.com/maps/dir/?api=1&destination=' + S.lat + "," + S.lng + '" target="_blank" rel="noopener">Google Haritalar\'da yol tarifi al</a>');
  if (S.phone) row("Telefon", '<a href="tel:' + esc(S.phone.replace(/[^\d+]/g, "")) + '">' + esc(S.phone) + "</a>");
  if (S.whatsapp) row("WhatsApp", '<a href="https://wa.me/' + esc(S.whatsapp) + '" target="_blank" rel="noopener">Mesaj gönderin</a>');
  if (S.email) row("E-posta", '<a href="mailto:' + esc(S.email) + '">' + esc(S.email) + "</a>");
  if (S.hours) row("Çalışma Saatleri", esc(S.hours));
  row("Instagram", '<a href="' + igUrl + '" target="_blank" rel="noopener">@' + esc(S.instagram || "tepebasigiyim") + "</a>");

  var map = document.getElementById("map");
  if (S.mapEmbedUrl && /^https:\/\/www\.google\.com\/maps\//.test(S.mapEmbedUrl)) {
    map.innerHTML = '<iframe title="Mağaza konumu" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="' + esc(S.mapEmbedUrl) + '"></iframe>';
  } else {
    map.classList.add("map--empty");
    map.textContent = "Mağazamızı ziyaret etmek için bizimle iletişime geçin veya Instagram'dan yazın.";
  }

  if (S.whatsapp) { var wa = document.getElementById("wa"); wa.href = "https://wa.me/" + S.whatsapp; wa.hidden = false; }

  var b = document.querySelector(".burger"), n = document.getElementById("nav");
  b.addEventListener("click", function () { var o = n.classList.toggle("open"); b.setAttribute("aria-expanded", o); });
  n.addEventListener("click", function (e) { if (e.target.tagName === "A") { n.classList.remove("open"); b.setAttribute("aria-expanded", "false"); } });
  if ("serviceWorker" in navigator) window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
})();
