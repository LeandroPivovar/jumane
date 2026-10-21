(function () {
  'use strict';
  var phone = '5511984461680';
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');
  function closeMenu() { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', function () { var open = toggle.getAttribute('aria-expanded') !== 'true'; nav.classList.toggle('open', open); toggle.setAttribute('aria-expanded', String(open)); });
  nav.addEventListener('click', function (event) { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
  window.matchMedia('(min-width: 801px)').addEventListener('change', closeMenu);
  document.getElementById('ano').textContent = new Date().getFullYear();

  var choices = document.querySelectorAll('.gallery-choice');
  function selectCase(id) {
    document.querySelectorAll('.gallery-case').forEach(function (panel) { panel.hidden = panel.id !== id; });
    choices.forEach(function (button) { button.setAttribute('aria-pressed', String(button.getAttribute('data-case') === id)); });
  }
  choices.forEach(function (button) { button.addEventListener('click', function () { selectCase(button.getAttribute('data-case')); }); });
  selectCase('case-lente');

  var form = document.getElementById('waForm');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var value = function (id) { return document.getElementById(id).value.trim(); };
    if (!value('nome') || !value('regiao')) { document.getElementById('formStatus').textContent = 'Preencha seu nome, bairro e cidade para preparar a mensagem.'; return; }
    var text = 'Olá, Brilux67! Meu nome é ' + value('nome') + ' e quero um orçamento de restauração de faróis a domicílio.' +
      (value('veiculo') ? '\nVeículo: ' + value('veiculo') : '') + '\nBairro e cidade: ' + value('regiao') + '\nSituação dos faróis: ' + value('situacao') +
      (value('mensagem') ? '\nObservações: ' + value('mensagem') : '');
    window.open('https://wa.me/' + phone + '?text=' + encodeURIComponent(text), '_blank', 'noopener');
    document.getElementById('formStatus').textContent = 'Mensagem preparada. Revise e envie no WhatsApp. Se a nova aba não abriu, use o link abaixo.';
  });

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) { entries.forEach(function (entry) { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); entry.target.classList.remove('will-reveal'); observer.unobserve(entry.target); } }); }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(function (element) { if (element.getBoundingClientRect().top > window.innerHeight * .92) element.classList.add('will-reveal'); observer.observe(element); });
  }
})();
