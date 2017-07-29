openerp.visible_default_search = function(instance) {

    instance.web.SearchViewDrawer.include({
        toggle: function (visibility) {
            if (visibility == undefined){
                this.$el.toggle(visibility);
            }
            else{
                this.$el.show();
            }
            var $view_manager_body = this.$el.closest('.oe_view_manager_body');
            if ($view_manager_body.length) {
                $view_manager_body.scrollTop(0);
            }
        },
    });

};
