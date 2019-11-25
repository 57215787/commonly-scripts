(window as any).supportWebp = false;
if (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0) {
    document.body.classList.add('webp');
    (window as any).supportWebp = true;
}  