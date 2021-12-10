let caja = new gsap.timeline();

caja.from(".container", { width: "0%", stagger: .4, duration: 1.5 });
caja.from(".form__title", { opacity: 0, y: -30 });
caja.from(".form__input-group input", { opacity: 0, stagger: .3 });
caja.from(".form__button", { opacity: 0, y: 20 });