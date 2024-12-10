$(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });

    // 스크롤 반응 - requestAnimationFrame으로 최적화
    $(document).ready(function () {
        const $elements = $(".txtwrap, .imgwrap, .con1list"); // 대상 요소 선택
        let scrollAnimationFrame;

        function handleScroll() {
            $elements.each(function () {
                const $element = $(this);
                const elementTop = $element.offset().top; // 요소의 상단 위치
                const viewportBottom =
                    $(window).scrollTop() + $(window).height(); // 뷰포트 하단

                // 뷰포트의 하단 절반 이상에 들어왔을 때만 처리
                if (elementTop < viewportBottom - $(window).height() / 2) {
                    $element.addClass("in-view");
                } else {
                    $element.removeClass("in-view"); // 뷰포트에서 벗어나면 제거
                }
            });
        }

        // 스크롤 이벤트를 requestAnimationFrame으로 처리
        $(window).on("scroll", function () {
            if (!scrollAnimationFrame) {
                scrollAnimationFrame = requestAnimationFrame(function () {
                    handleScroll();
                    scrollAnimationFrame = null;
                });
            }
        });

        // 초기 실행
        handleScroll();
    });

    // con4 이미지 클릭 확대
    // 열기
    $(".small li").on("click", function () {
        $(".con4_wrap").fadeIn(); // 부드럽게 열기
        let i = $(this).index(); // 클릭한 이미지 순번 가져오기
        $(".large li").eq(i).stop().animate({ width: "100%", height: "100%" });
    });

    // 닫기
    $(".close").on("click", function () {
        $(".con4_wrap").fadeOut(); // 부드럽게 닫기
        $(".large li").stop().animate({ width: "0", height: "0" });
    });
});
