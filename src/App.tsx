import { useState } from "react"
import Checker from "./components/Checker"
import Input from "./components/Input"
import Result from "./components/Result"


function App() {
  const [pass, setPass] = useState("");
  const [passDetalies, setPassDetalies] = useState({
      nums: 0,
      chars: 0,
      uppLetter: 0,
      lowerLetter: 0,
  })

  const calculation = () => {
    setPassDetalies({nums: 0, chars: 0, uppLetter: 0, lowerLetter: 0})
    const deltalies = {nums: 0, chars: 0, uppLetter: 0, lowerLetter: 0}
    pass.split('').forEach((ch: string): void=>{
      const char: number = ch.charCodeAt(0);
        if(char > 96 && char < 123){
          deltalies.lowerLetter++;
        }else{
          if(char > 64 && char < 91){
            deltalies.uppLetter++;
          }
          else{
              if(char > 47 && char < 58){
                deltalies.nums++;
              }else{
                deltalies.chars++;
              }
            }
          }
        })
        setPassDetalies(deltalies)
  }

  // useEffect(()=>{
  //   calculation()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pass])
  return (
    <>
      <div className="container mx-auto m-5 p-12">
        <h2 className="text-center text-2xl m-3">Parol mustahkamligini tekshirish</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="basis-3/5 md:me-2 md:mb-0 mb-3 p-8 border-solid border-2 hover:shadow-2xl rounded-[12px]">
            <label htmlFor="password">
              Parolingizni kiriting
            </label>
            <Input pass={pass} setPass={setPass} calculation={calculation}/>
          </div>
          <div className="basis-2/5 md:mt-0 md:ms-2 mt-3 p-8 pt-4 border-solid border-2 hover:shadow-2xl rounded-[12px]">
            <h3>Parol tarkibiy qismi:</h3>
            <Checker pass={pass} passDetalies={passDetalies} />
          </div>
        </div>
        <div className="w-full flex flex-row mt-3 p-7 border-solid border-2 hover:shadow-2xl rounded-[12px]">
          <h3 className="me-5">Parol buzishga ketadigan vaqt: </h3>
          <Result pass={pass} passDetalies={passDetalies}/>
        </div>
      </div>
    </>
  )
}

export default App
