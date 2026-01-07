// zeer simpele lightbox - klik op een afbeelding opent deze in nieuw venster/tab
document.addEventListener('click', function(e){
  const t = e.target;
  if(t.tagName === 'IMG' && t.closest('.card')){
    e.preventDefault();
    const src = t.getAttribute('src');
    const w = window.open('', '_blank');
    w.document.write(`<html><head><title>Preview</title></head><body style="margin:0;background:#000;display:flex;align-items:center;justify-content:center;height:100vh"><img src="${src}" style="max-width:100%;max-height:100%"/></body></html>`);
  }
});
