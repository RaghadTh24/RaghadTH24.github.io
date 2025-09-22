const projContainer = document.querySelector('.projects-container');
const projCards = document.querySelectorAll('.project-card');
const prevProj = document.querySelector('.projects-prev');
const nextProj = document.querySelector('.projects-next');
let currentProj = 0;

function updateProjects() {
  const offset = -(currentProj * (projCards[0].offsetWidth + 16));
  projContainer.style.transform = `translateX(${offset}px)`;
}

prevProj.addEventListener('click', () => {
  currentProj = (currentProj === 0) ? projCards.length - 1 : currentProj - 1;
  updateProjects();
});

nextProj.addEventListener('click', () => {
  currentProj = (currentProj + 1) % projCards.length;
  updateProjects();
});

updateProjects();