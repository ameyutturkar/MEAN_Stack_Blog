/**
 * Created by ameyutturkar on 5/25/17.
 */
(function () {
    angular //angular global variable
        .module("BlogApp", [])
        .controller("BlogController", BlogController); //this can be written in separate file to follow best practices


    function BlogController($scope, $http) { //scope interface service allows to interact with html templates
        $scope.createPost = createPost; //listen to createPost event handler

        function createPost(post) { //tie above to the function of the same name locally
            console.log(post);
            $http.post("/api/blogpost", post); //by convention /api or /rest is used for dynamic content
        }
    }
})();