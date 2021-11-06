$('.accordion__item .title').click(function() {
    const wrapper = $(this).parent().parent();
    const panel = $(this).parent().find('.panel');
    const title = $(this);

    if (!panel.attr('class').includes('active')) {
        const currActivePanel = wrapper.find('.active');
        currActivePanel.slideToggle();
        currActivePanel.removeClass('active');
        currActivePanel.siblings('.title').removeClass('minus');
        panel.addClass('active');
        title.addClass('minus');
        
    } else {
        panel.removeClass('active');
        title.removeClass('minus');
    }
    
    panel.slideToggle();
});