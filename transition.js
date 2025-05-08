/**
 拓展页面过渡效果
 */
document.addEventListener('DOMContentLoaded', (event) => {
    // 主页面加载完成后，显示页面内容
    setTimeout(() => {
        document.body.style.visibility = 'visible';
        document.body.style.opacity = '1';
        document.body.style.transform = 'translateY(0)';
    }, 100); 

    // 页面过渡效果
    const animateElements = () => {
        const elements = document.querySelectorAll('.animate-element');
        elements.forEach(element => {
            // 检查元素是否在视口中
            const rect = element.getBoundingClientRect();
            const isInViewport = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (isInViewport) {
                element.classList.add('animated');
            }
        });
    };

    // 页面加载时准备动画元素
    const prepareAnimatedElements = () => {
        // 头像
        const profileImage = document.querySelector('.profile-image');
        if (profileImage) {
            profileImage.classList.add('animate-element', 'delay-1');
        }

        // 标题
        const heading = document.querySelector('h1');
        if (heading) {
            heading.classList.add('animate-element', 'delay-2');
        }

        // 描述
        const description = document.querySelector('.profile-content p');
        if (description) {
            description.classList.add('animate-element', 'delay-3');
        }

        // 按钮
        const buttons = document.querySelectorAll('.button');
        buttons.forEach((button, index) => {
            button.classList.add('animate-element', `delay-${index + 4}`);
        });

        // 社交图标
        const socialIcons = document.querySelector('.social-icons');
        if (socialIcons) {
            socialIcons.classList.add('animate-element', 'delay-5');
        }

        // 按钮背景
        buttons.forEach(button => {
            button.classList.add('animated-bg');
        });
    };

    // 页面加载时准备动画元素
    prepareAnimatedElements();
    animateElements();

    // 滚动时触发动画
    window.addEventListener('scroll', () => {
        animateElements();
    });

    // 点击链接时的过渡效果
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // 防止新标签页、内部链接和mailto链接的默认行为
            if (link.target === "_blank" || link.getAttribute('href').startsWith('#') || link.getAttribute('href').startsWith('mailto:')) {
                return;
            }
            
            if (link.href) {
                e.preventDefault();
                document.body.classList.add('fade-out');
                
                // 页面淡出后，跳转到链接
                setTimeout(() => {
                    window.location.href = link.href;
                }, 600); 
            }
        });
    });

    // 按钮效果
    const enhanceButtonEffects = () => {
        const buttons = document.querySelectorAll('.button');
        buttons.forEach(button => {
            // 鼠标移动时的效果
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // 设置按钮的位置
                button.style.setProperty('--x-position', `${x}px`);
                button.style.setProperty('--y-position', `${y}px`);
            });
        });
    };
    
    enhanceButtonEffects();
});
