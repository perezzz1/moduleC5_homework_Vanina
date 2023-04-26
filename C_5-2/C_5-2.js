const jsonString = `{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
   }`
   
   
   const data = JSON.parse(jsonString)
   const list = data.list
   // result = []
   const result = []
   for (let i=0; i < list.length; i+=1){
       const worker = {
           name: list[i].name,
           age: Number(list[i].age),
           prof: list[i].prof,
       };
       
       result.push(worker)
   }
   
   
   console.log('list', result)