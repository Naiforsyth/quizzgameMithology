import { useEffect, useState } from "react"


export const Question = ({
    filteredQuestion,
    setIndexQuestion,
    indexQuestion,
    questionsFiltered,
    setActiveQuestion
}) => {
    const [answersRandom, setAnswersRandom] = useState([])

    useEffect(() => {
        const answer = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer,

        ]

        setAnswersRandom(answer.sort(() => Math.random() - 0.5))
    }, [filteredQuestion])



    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1)
    }

    return (
        <>
            <div
                className="flex flex-col justify-between shadow-md shadow-slate-300 w-[600px] h-[600px] p-10 rounded-lg"
            >
                <div className="flex justify-between">
                    <span className="text-xl font-bold" >
                        {/* Número de pregunta actual y totales */}
                        {indexQuestion + 1} / {questionsFiltered.length}
                    </span>
                </div>
                <button
                    className="border px-5 py-2  rounded-lg font-bvold transition-all hover:bg-yellow-500 hver:texr-gray-900"
                    onClick={() => setActiveQuestion(false)}
                >
                    Reiniciar
                </button>
                <div>
                    <h1 className="font-bold">{filteredQuestion.question}</h1>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    {/* Mapeamos un  arreglo de respuesta correcta e incorrecta */}
                    {
                        answersRandom.map((answer, index) => (
                            <button 
                            className="border p-5 rounded-lg flex justify-center items-center hover:scale-105"
                            key={answer}
                            >
                                <p className="font-medium yext center text-sm">
                                    {answer}
                                </p>
                            </button>
                        ))}

                </div>
                {/* Condicional para mostrar el botón de siguiente pregunta o finalizar */}
                <button
                    className="border-2 border-yellow-600 text-yellow-600 rounded-md px-5 py-2 hover:bg-yellow.600 hover:text-black font-medium"
                    onClick={onNextQuestion}
                >
                    Finalizar o Siguente pregunta
                </button>
            </div>
        </>
    )
}
