/**
 * 슬라이드 요소 관리
 */
new Swiper('.album .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  loop: true, // 반복 재생 여부
  slidesPerView: 3, // 한 번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 1번 슬라이드가 가운데 보이기
  pagination: { // 페이지 번호 사용 여부
    el: '.album .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.album .swiper-prev', // 이전 버튼 선택자
    nextEl: '.album .swiper-next' // 다음 버튼 선택자
  }
})

const btn_1 = document.getElementById('btn-1');
const memberInfo_1 = document.getElementById("member-1");
const btn_2 = document.getElementById('btn-2');
const memberInfo_2 = document.getElementById("member-2");
const btn_3 = document.getElementById('btn-3');
const memberInfo_3 = document.getElementById("member-3");

if (btn_1 != null && btn_2 != null && btn_3 != null){
  btn_1.addEventListener('click' ,function() {
    if(memberInfo_1.style.display=='none'){ 		
      memberInfo_1.style.display = 'block';
      memberInfo_2.style.display = 'none'; 	
      memberInfo_3.style.display = 'none'; 	
    }else{ 		
      memberInfo_1.style.display = 'none'; 	
    } 
  });
  
  btn_2.addEventListener('click' ,function() {
    if(memberInfo_2.style.display=='none'){ 		
      memberInfo_2.style.display = 'block'; 
      memberInfo_1.style.display = 'none'; 	
      memberInfo_3.style.display = 'none'; 	
    }else{ 		
      memberInfo_2.style.display = 'none'; 	
    } 
  });
  
  btn_3.addEventListener('click' ,function() {
    if(memberInfo_3.style.display=='none'){ 		
      memberInfo_3.style.display = 'block'; 	
      memberInfo_1.style.display = 'none'; 	
      memberInfo_2.style.display = 'none'; 
    }else{ 		
      memberInfo_3.style.display = 'none'; 	
    } 
  });
}
