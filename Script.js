
var app = angular.module("myModule", [])
                  .controller("myController", function ($scope) {
                    var employees = [
                        { firstName: "Abby", lastName: "Abebe", gender: "Female", salary: 65000 },
                        { firstName: "Bebe", lastName: "Bekele", gender: "Female", salary: 78000 },
                        { firstName: "Cathy", lastName: "Clyed", gender: "Female", salary: 80000 },
                        { firstName: "Denny", lastName: "Derick", gender: "Male", salary: 90000 },
                        { firstName: "Elmer", lastName: "Ejigu", gender: "Male", salary: 100000 },
                        { firstName: "Feke", lastName: "Feyisa", gender: "Male", salary: 70000 },
                        { firstName: "Geresu", lastName: "Gudeta", gender: "Male", salary: 92000 },
                        { firstName: "Hayle", lastName: "Habte", gender: "Male", salary: 70000 },
                        { firstName: "Ingrid", lastName: "Ian", gender: "Female", salary: 75000 },
                        { firstName: "Jacob", lastName: "Jack", gender: "Male", salary: 84000 }
                    ];

                    $scope.employees = employees;
                  });
