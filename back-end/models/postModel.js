import {Schema , model} from "mongoose"

const postSchema = new Schema ({
    Username: String,
    Category: "Mongolia" | "Vegan" | "Korean" | "China" | "Italy" | "Japan" | "Indian",
    FoodName: String,
    Image:String,
    Recipe:String,
    Ingredients:String,
    Save: Boolean,
    SaveCount:Number,
})

const foodPost = model("foodPost" , postSchema)
export default foodPost;

