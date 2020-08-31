angular.module("umbraco").controller("IglooApprovedColorPicker.Controller", function ($scope, $http, assetsService, $routeParams, editorState) {
  $scope.IsWhite = function (color) {
    var color = color.toLowerCase();

    if (color == "#fff")
      return true;

    if (color == "#ffffff")
      return true;

    if (color == "#fefefe")
      return true;

  };

  var state = editorState.getCurrent();
  var pageId = state.parentId != -1 ? state.parentId : state.id;

  $http({
    method: 'GET',
    url: "/Umbraco/Igloo/IglooGetThemeColors/Get?PageId=" + pageId+"&UseTextColors="+ ($scope.model.config.useTextColors == "1" ? true : false) ,
    cache: false
  }).then(function successCallback(response) {
    $scope.darkBg = response.data.Dark;
    $scope.whiteBg = response.data.White;
    $scope.themeBg = response.data.Theme;
    $scope.themeAltBg = response.data.ThemeAlt;
    $scope.grayBg = response.data.Gray;
  });
});