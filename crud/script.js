////////////////CRUD/////////////////
let users = [
    {id:1, year: 1998, engine: 1, name: "Tico"},
    {id:2, year: 2005, engine: 1.2, name: "Matiz"},
    {id:3, year: 2010, engine: 1.6, name: "Gentra"},
    {id:4, year: 2010, engine: 1.5, name: "Cobalt"},
    {id:5, year: 2012, engine: 2, name: "Malibu"},
    {id:6, year: 2000, engine: 1.2, name: "Damas"},
    {id:7, year: 2018, engine: 2.4, name: "Tracker"},
];
/////////////////Create///////////////
let newUser = (user) => {
    users.push(user);
}
newUser({id:0, year: 2022, engine: 2.8, name: "Cobolt2"});
console.log(users);

//////////////////Read/////////////////
// sorting number

let sorting1 = () => {
    return users.sort((a, b) => a.engine - b.engine);
}
console.log(sorting1());

// sorting by name
let sortingName = () => {
    return users.sort((a, b) => a.name.localeCompare(b.name))
}
console.log(sortingName());

////////////////Update////////////
let update = (upd) => {
    return users.map((obj) => {
        return obj.id === upd.id ? {...obj, [upd.key]: upd.value} : obj;
    });
};
console.log(update({id: 1, key: "name", value: "Nexia"}));

/////////////////Delete//////////////////

let onDelete = ({id, year, engine, name}) => {
    return users.filter((obj) => {
        return obj.year !== year;
    });
};
console.log(onDelete({year: 2005}));

