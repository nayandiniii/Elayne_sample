angular.module("Packages",[]) //This is a module named as packages as under this module only everything will work and its also a view from MVC(model view controller)
.filter("namefilter",function()
{
    return function(input,option)
    {
        if(isNaN(option) ||(option == ""))
        {
            return input;
        }
        else
        {
        return input.substring(0,option).toUpperCase();
    }}
})
.controller("Packagesctrl",function($scope) //This works as a controller
{
    var info = [
        {
            fname:"PERCY",
            lname:"SHELLEY",
            id:001,
            title:"OZYMANDIAS",
            year:1818,
            type:"POEM"
        },
        {
            fname:"WILLIAM",
            lname:"SHAKESPEARE",
            id:002,
            title:"SHALL I COMPARE THEE TO SUMMER",
            year:1609,
            type:"POEM"
        },
        {
            fname:"MAYA",
            lname:"ANGELOU",
            id:003,
            title:"AND STILL I RISE",
            year:1978,
            type:"POEM"
        },
        {
            fname:"T.S.",
            lname:"ELIOT",
            id:004,
            title:"THE WASTE LAND",
            year:1922,
            type:"POEM"
        },
        {
            fname:"GEORGE",
            lname:"ORWELL",
            id:005,
            title:"NINETEEN EIGHTY FOUR",
            year:1949,
            type:"STORY"
        },
        {
            fname:"CHINUA",
            lname:"ACHEBE",
            id:006,
            title:"THINGS FALLING APART",
            year:1958,
            type:"STORY"
        }
    ];
    $scope.info = info;
    $scope.rowlimit = 7;
});