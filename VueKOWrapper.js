window.VueKOWrapper = function(koName, vName, params) {
    Vue.component(vName, {
        props: params,
        template: '<div data-bind="component: { name: \'' + koName + '\', params: props }"></div>',
        mounted: function () {
            $('#log').append('vue mounted: VueKO<br>');
            var vm = this;

            ko.applyBindings({props: vm.$props}, vm.$el);
        },
        destroyed: function() {
            $('#log').append('vue destroyed: VueKO<br>');
        }
    });
};