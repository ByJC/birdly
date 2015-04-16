angular.module("app.core").run(["$templateCache", function($templateCache) {$templateCache.put("app/core/404.html","<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class=\"fa fa-warning\"></i></div><div class=\"datas-text pull-right\"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class=\"widget wblue\"><div ht-widget-header=\"\" title=\"Page Not Found\" allow-collapse=true></div><div class=\"widget-content text-center text-info\"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>");
$templateCache.put("app/dashboard/dashboard.html","<section id=dashboard-view class=\"mainbar dashboard\"><section class=matter><div class=container><div class=row><div class=col-md-12><div class=\"widget wblue\"><div ht-widget-header=\"\" title=\"Notes de frais\" allow-collapse=true></div><div class=\"widget-content text-center text-info\"><table class=\"table table-condensed table-striped\"><thead><tr><th>Libellé</th><th>Catégorie</th><th>Date</th><th>TTC</th><th>TVA</th><th>HT</th><th>Commentaire</th></tr></thead><tbody><tr ng-repeat=\"expense in vm.expenses\"><th>{{expense.libelle}}</th><th>{{expense.categorie}}</th><th>{{expense.date}}</th><th>{{expense.ttc}}</th><th>{{expense.tva}}</th><th>{{expense.ht}}</th><th>{{expense.comment}}</th></tr></tbody></table></div></div><div class=\"widget wviolet\"><div ht-widget-header=\"\" title=\"Indemnités kilométriques\" allow-collapse=true></div><div class=\"widget-content text-center text-info\"><table class=\"table table-condensed table-striped\"><thead><tr><th>Libellé</th><th>Date</th><th>Taux</th><th>Kilométrage</th><th>TTC</th><th>Commentaire</th></tr></thead><tbody><tr ng-repeat=\"expense in vm.expenses\"><th>{{expense.libelle}}</th><th>{{expense.date}}</th><th>{{expense.kilometre}}</th><th>{{expense.ttc}}</th><th>{{expense.comment}}</th></tr></tbody></table></div></div></div><div><button class=\"btn btn-danger btn-new-expense\" type=button ng-click=vm.createExpense();>Créer une note</button></div><div><button class=\"btn btn-danger btn-new-expense\" type=button ng-click=vm.createAllowance();>Créer une indémnité kilométrique</button></div></div></div></section></section>");
$templateCache.put("app/expense/expense.html","<section class=\"mainbar expense\"><section class=matter><div class=container><div class=row><div class=expense-title><h4>Créez une nouvelle dépense</h4></div><h5 class=expense-step>{{vm.steps[vm.step].label}}</h5><div class=row ng-if=\"vm.step === 2\"><div class=col-xs-2><form><input placeholder=tag... type=text ng-model=vm.tag ng-model-instant=\"\"> <button class=\"btn btn-default btn-add\" ng-click=vm.addTag()>+</button></form></div><div class=col-xs-10><div ng-repeat=\"tag in vm.tags\" class=expense-tag><span>{{::tag}}</span><button class=\"btn btn-default\" ng-click=vm.deleteTag(tag)>-</button></div></div></div><div class=\"expense-content row\"><div class=\"expense-take-picture col-xs-offset-3 col-xs-6\" ng-if=!vm.isPhotoTaken><button class=\"btn expense-btn\" ng-click=vm.takePicture();><i class=\"fa fa-camera expense-icon\"></i></button></div><div class=expense-picture-1 ng-if=vm.isPhotoTaken><img style src=images/facture1.jpg></div></div><div class=pull-right ng-if=\"vm.step === 1\"><button class=\"btn btn-danger btn-new-expense\" type=button ng-click=vm.validPicture();>Valider</button></div><div class=pull-right ng-if=\"vm.step === 2\"><button class=\"btn btn-danger btn-new-expense\" type=button ng-click=vm.validExpense();>Sauvegarder</button></div></div></div></section></section>");
$templateCache.put("app/layout/ht-top-nav.html","<nav class=\"navbar navbar-fixed-top navbar-inverse\"><div class=navbar-header><a href=\"/\" class=navbar-brand><span class=brand-title>{{vm.navline.title}}</span></a> <a class=\"btn navbar-btn navbar-toggle\" data-toggle=collapse data-target=.navbar-collapse><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></a></div><div class=\"navbar-collapse collapse\"><div class=\"pull-right navbar-logo\"><ul class=\"nav navbar-nav pull-right\"><li><a ng-href={{vm.navline.link}} target=_blank>{{vm.navline.text}}</a></li><li class=\"dropdown dropdown-big\"><a href=http://www.angularjs.org target=_blank><img src=images/AngularJS-small.png></a></li><li><a href=\"http://www.gulpjs.com/\" target=_blank><img src=images/gulp-tiny.png></a></li></ul></div></div></nav>");
$templateCache.put("app/layout/shell.html","<div ng-controller=\"ShellController as vm\"><header class=clearfix><ht-top-nav navline=vm.navline></ht-top-nav></header><section id=content class=content><div ng-include=\"\'app/layout/sidebar.html\'\"></div><div ui-view=\"\" class=shuffle-animation></div><div ngplus-overlay=\"\" ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class=\"page-spinner-message overlay-message\">{{vm.busyMessage}}</div></div></section></div>");
$templateCache.put("app/layout/sidebar.html","<div ng-controller=\"SidebarController as vm\"><ht-sidebar when-done-animating=vm.sidebarReady()><div class=sidebar-filler></div><div class=sidebar-dropdown><a href=#>Menu</a></div><div class=sidebar-inner><div class=sidebar-widget></div><ul class=navi><li class=\"nlightblue fade-selection-animation\" ng-class=vm.isCurrent(r) ng-repeat=\"r in vm.navRoutes\"><a ui-sref={{r.name}} ng-bind-html=r.settings.content></a></li></ul></div></ht-sidebar></div>");
$templateCache.put("app/widgets/widget-header.html","<div class=widget-head><div class=\"page-title pull-left\">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class=\"widget-icons pull-right\">TOTO</div><small class=\"pull-right page-title-subtle\" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>");}]);