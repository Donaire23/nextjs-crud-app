import connectToMongoDB from "@/libs/mongodb";
import MyTask from "@/model/todo";
import { NextResponse } from "next/server";


export async function POST(req) {

  const {Tasks} = await req.json();

  await connectToMongoDB();

  const add = new MyTask({
    Tasks: Tasks
  })

  await add.save()

  return NextResponse.json({message: "Task created"})

}

export async function GET() {

 await connectToMongoDB();

 const allTask = await MyTask.find();

return NextResponse.json(allTask)

};

export async function DELETE(req) {

  const id = req.nextUrl.searchParams.get("id");
  
  await connectToMongoDB();

  await MyTask.findByIdAndDelete(id);

  return NextResponse.json({message: "Deleted"});


};

export async function PUT(req) {

  const data = await req.json();

  await connectToMongoDB();

  await MyTask.findByIdAndUpdate(data.id, {Tasks: data.Tasks});

  return NextResponse.json({message: "updated"});

}

