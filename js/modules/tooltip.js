export default function initTooltip (){
  const tooltips = document.querySelectorAll('[data-tooltip]');

  tooltips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver);
  });
  
  function onMouseOver(e){
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = e.pageY + 'px';
    tooltipBox.style.left = e.pageX + 'px';
    
    function onMouseLeave(){
      tooltipBox.remove();
    }
  
    this.addEventListener('mouseleave', onMouseLeave)
  }
  
  function criarTooltipBox(element){
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}
