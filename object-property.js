const students =[
    {id:21, name:'Omar Sun'},
    {id:11, name:'Kumar'},
    {id:31, name:'ShakaLaka'},
    {id:41, name:'jhakanaka'},
    {id:51, name:'bacchan'},
];

const names = students.map(s => s.name);
console.log(names);

const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id>30);
console.log(bigger);

const little = students.find(s => s.id<30);
console.log(little);