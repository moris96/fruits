# fruits

### Restful Routes: 

Action | URL | HTTP Verb | JSX view filename | mongoose method 
--- | --- | --- | --- |--- 
Index | /fruits/ | GET | Index.jsx | Fruit.find() | Fruit.find()
Show | /fruits/:id/ | READ | Show.jsx | Fruit.findOne or Fruit.findById | 
New | /fruits/new | GET | New.jsx | none | 
Create | /fruits/ | POST | none | Fruit.create(req.body) | 
Edit | /fruits/:id/edit | GET | Edit.jsx | Fruit.findOne or Fruit.findById | 
Update | /fruits/:id | PUT | none | Fruit.findByIdAndUpdate or Fruit.findOneAndUpdate | 
Destroy | /fruits/:id | DELETE | none | Fruit.findByIdAndRemove or Fruit.findByIdAndDelete | 