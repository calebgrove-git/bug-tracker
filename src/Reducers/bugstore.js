

export  function retreiveBugs (){
    let data =[];

data.push({
        _id:'1231244',
        name:"crash on load",
        details:"crash on load",
        steps:"open application and it will crash",
        version:"V1.0.0",
        assigned:"Caleb",
        creator:"Admin",
        priority:1,
        time:"23:21"
    })
data.push({
    _id:'1231344',
    name:"crash on start",
    details:"crash on load",
    steps:"open application and it will crash",
    version:"V1.0.0",
    assigned:"Caleb",
    creator:"Admin",
    priority:3,
    time:"23:21"
})
let sorted = data.sort((a,b)=>{
    return a.priority-b.priority
})
return sorted;
}