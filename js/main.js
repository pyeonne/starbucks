'use strict';

/**
 * 검색창 제어
 */
// 검색창 요소(.search) 찾기.
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
// 검색창 요소를 클릭하면 실행.
searchEl.addEventListener('click', () => searchInputEl.focus());
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행.
searchInputEl.addEventListener('focus', () => {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색');
});
// 검색창 요소 내부 실제 input 요소에서 포커스가 해제(블러)되면 실행.
searchInputEl.addEventListener('blur', () => {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
});

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const badgeEl = document.querySelector('header .badges');
// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener(
    'scroll',
    _.throttle(() => {
        if (window.scrollY > 500) {
            // 배지 숨기기
            // gsap.to(요소, 지속시간, 옵션)
            /*
                opacity 속성처럼 값을 숫자로 입력하는 속성들은
                전환 효과(transition 속성이나 GSAP 라이브러리 등)를 통해
                요소의 전/후 상태를 중간 숫자의 값으로 자연스럽게 만들어 줄 수 있지만,
                display 속성처럼 값이 숫자가 아닌 속성은 전/후 중간값이 존재하지 않기 때문에
                자연스러운 전환 효과를 적용할 수 없다.
            */
            gsap.to(badgeEl, 0.6, {
                opacity: 0,
                display: 'none',
            });
        } else {
            // 배지 보이기
            gsap.to(badgeEl, 0.6, {
                opacity: 1,
                display: 'block',
            });
        }
    }, 300),
);
// _.throttle(함수, 시간)
