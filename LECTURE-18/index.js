import { connectDb } from "../LECTURE-17/database/connectdb"
dotenv.config()
const app = express()
const PORT = process.env.PORT
app.use(cors({ origin: "http://localhost:6000", credentials:true}))
app.use(express.json());
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("hello express222s")
})

app.use("/api/auth",authRoutes);





app.listen(PORT,()=>{
connectDb();
console.log(`http://localhost:${PORT}`);
})