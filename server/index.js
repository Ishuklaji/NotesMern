const express = require("express")
const cors = require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.routes")
const { noteRouter } = require("./routes/note.routes")
require("dotenv").config()

const port = process.env.PORT

const app = express()
app.use(cors())
app.use(express.json())
app.use("/user", userRouter)
app.use("/note", noteRouter)


app.get("/", (req, res) => {

    res.send({
        message: "API is working Now"
    })
})


app.listen(port, async () => {

    try {
        await connection
        console.log("Database is connected")
    } catch (error) {
        console.log(error)
    }


    console.log(`Server is running on http://localhost:${port}`)

})