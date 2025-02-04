import dbConnect from "./_database/dbConnect"
import Todo from "./_models/Todo.model"

export default async function Home(){

    await dbConnect()
   const todos = await Todo.find({})


  return (
    <div>
      {todos.map((todo,index) => (
        <div key={index}>
          {JSON.stringify(todo)}
        </div>
      ))}
      <div >
          hello
      </div>

    </div>
  )
}

