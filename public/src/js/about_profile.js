'use strict'; // 自己紹介
{
  // 顔 ---------------------------
  const face = document.getElementById('face');
  const img = document.createElement('img');
  face.appendChild(img);
  function newface() {
    let num = Math.floor(Math.random() * 2) + 1;
    img.src = `src/img/face${num}.jpeg`;
  }
  img.src = `src/img/face2.jpeg`;
  img.alt = `JR岐阜駅前の手すりに座っているしきたに`;
  img.addEventListener('click', () => {
    newface();
  });



  // モーダル ---------------------------
  const open = document.getElementById('open');
  const mask = document.getElementById('mask');
  const modal = document.getElementById('modal');
  // const close = document.getElementById('close');

  // マスク + 年表 を表示
  open.addEventListener('click', () => {
    mask.classList.remove('hidden');
    modal.classList.remove('top_hidden');
  });
  // マスク + 年表 を非表示
  mask.addEventListener('click', () => {
    mask.classList.add('hidden');
    modal.classList.add('top_hidden');
  });

}
