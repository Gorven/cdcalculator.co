// 主要JavaScript功能
document.addEventListener('DOMContentLoaded', function() {
    // FAQ展开/收起功能
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        answer.style.display = 'none';
        
        question.addEventListener('click', () => {
            const isOpen = answer.style.display === 'block';
            answer.style.display = isOpen ? 'none' : 'block';
            question.style.color = isOpen ? '' : '#3498db';
        });
    });

    // 响应式导航菜单
    const nav = document.querySelector('.main-nav');
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-toggle');
    menuButton.innerHTML = '<i class="fas fa-bars"></i>';
    
    if (window.innerWidth <= 768) {
        nav.prepend(menuButton);
        const menu = nav.querySelector('ul');
        menu.style.display = 'none';
        
        menuButton.addEventListener('click', () => {
            menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
        });
    }
});
