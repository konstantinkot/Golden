document.addEventListener('DOMContentLoaded', function () {
            /* Burger */
            const burgerMenu = {
                burger: document.querySelector('.menu__burger'),
                menuItems: document.querySelectorAll('.menu__item'),
                isChanging: false,
                burgerStart: function () {
                    let that = this,
                        changingTime = 500;
                    this.burger.addEventListener('click', function () {
                        (that.burger.classList.contains('close') && that.burger.isChanging == false) ? //если бургер не скрыт и не изменяется
                        (showOrHideMenuItems('none', 0), //то скрыть его
                            that.burger.classList.remove('close')) :
                        (showOrHideMenuItems('block', 1),
                            that.burger.classList.add('close'));
                    });
                    
                      
                        showOrHideMenuItems();
                        window.addEventListener("resize", showOrHideMenuItems);


                        function showOrHideMenuItems(displayVal, opacityVal) {
                            (document.documentElement.clientWidth > 415) ?
                            (
                                that.burger.style.display = 'none',
                                that.menuItems.forEach(function (it, indx) {
                                    it.style.opacity = 1,
                                        it.style.display = 'block'
                                })

                            ) :
                            (
                                that.burger.style.display = 'block',
                                that.menuItems.forEach(function (it, indx) {
                                    it.style.opacity = 0,
                                        it.style.display = 'none'
                                })

                            );
                            if(displayVal && opacityVal){
                                for (let item of that.menuItems) {
                                (displayVal == 'none' && that.burger.isChanging == false) ? //если надо скрыть меню,
                                (
                                    setTimeout(function () {

                                        that.burger.isChanging = true; //состояние изменяется
                                        item.style.opacity = opacityVal; //прозрачность увеличивается

                                    }, changingTime / 2.5),

                                    setTimeout(function () {
                                        item.style.display = displayVal; //display = none
                                        that.burger.isChanging = false;
                                    }, changingTime)) :
                                //если надо показать меню
                                (that.burger.isChanging = true,
                                    setTimeout(function () {
                                        item.style.display = displayVal
                                    }, changingTime / 1.3), //сначала показываем меню
                                    setTimeout(function () {
                                        item.style.opacity = opacityVal; //потом убираем прозрачность за чуть большее время
                                        that.burger.isChanging = false;
                                    }, changingTime));


                            }
                            }
                        }
                    }

                };
                burgerMenu.burgerStart();


            })
