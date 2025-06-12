let nums = document.querySelectorAll(".nums");
let theNumbers = document.getElementById("theNumbers");
let run = false;

function startCounting() {
  if (run) return;

  const scrollTrigger = theNumbers.offsetTop;

  if (window.scrollY + window.innerHeight >= scrollTrigger) {
    nums.forEach((e) => {
      let start = 0;
      let end = e.dataset.num;

      const theCount = setInterval(() => {
        if (start < end) {
          start++;
          e.textContent = `${start}`;
        } else {
          clearInterval(theCount);
        }
      }, 2000 / end);
    });
    run = true;
  }
}

window.addEventListener("scroll", startCounting);


let pov = document.querySelector('.footerHead');
let ftHead1 = document.querySelector('.footerHead h1');

pov.addEventListener('mousemove', e => {
  const rect = pov.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  ftHead1.style.opacity = 1;

  pov.style.setProperty('--x', x + 'px');
  pov.style.setProperty('--y', y + 'px');
})