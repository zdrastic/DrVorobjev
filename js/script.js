        // JavaScript код для запуска и обновления таймера
        const minutesElement = document.getElementById("minutes");
        const secondsElement = document.getElementById("seconds");

        let minutes = 5;
        let seconds = 0;

        function updateTimer() {
            if (minutes === 0 && seconds === 0) {
                // Таймер истек
                document.getElementById("timer").innerHTML = "Вам перезвонят в ближайшее время.";
                return;
            }
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
            minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
            secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
            setTimeout(updateTimer, 1000);
				console.log(15);
        }
        
        //updateTimer();

		  var swiper = new Swiper('.swiper-container', {
			slidesPerView: 3, // Определяет количество видимых слайдов
			spaceBetween: 0, // Отступ между слайдами
			navigation: {
			  nextEl: '.swiper-button-next', // Селектор для стрелки вправо
			},
			loop: true, // Делает свайпер бесконечным
			mousewheel: true, // Разрешает прокрутку мышкой
		 });