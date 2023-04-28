import { useState } from "react"
import { generateEmojis } from "../services/getEmojis"
import { getDescription } from "../services/getText"

function Emoji() {
  const [inputText, setInputText] = useState('')
  const [emoji, setEmoji] = useState('')
  const [description, setDescription] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleInputChange = (event) => {
    setInputText(event.target.value)
  }

  // useEffect(() => {
  //   const emojis = [ "", "", '["💪", "🦸‍♂️", "🦹‍♀️", "🤴", "🤵", "🗡", "⚔", "' ]
  //   // (response.text).split('\n')
  //   console.log(emojis.flat().map((em) => em.replace(/,/g, '').replace(/"/g, '').replace(/\[/g,'')))
  //   setEmoji(emojis.flat().map((em) => em.replace(/,/g, ' ').replace(/"/g, '').replace(/\[/g,'')))
  // }, [])




  const handleSubmit = async (event) => {
    event.preventDefault()
    setDisabled(true)
    setEmoji(null)
    setDescription('Loading...')
    const response = await getDescription(inputText)
    const { text } = await generateEmojis(inputText)
    setDescription(response.text)
    setEmoji(text.split(','))
    setDisabled(false)

  }

  return (
    <div className="emoji">
      <div className="title">
        <h1> 🚀 Emoji Generator 😎</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input_container">
          <input autoFocus type="text" value={inputText} onChange={handleInputChange} placeholder="Atlantis, Star Wars, Harry Potter, Matrix" />
        </div>
        <button type="submit" disabled={disabled} >Generate Emoji</button>
      </form>
      <div className="results_box">
        <div className="emoji_results" >
          {
            emoji && (
              emoji.map((em, index) => (
                <span key={index}>{em}</span>
              ))
            )
          }
        </div>
          {
            description !== '' &&
            <div className="description_container">
            <p className="description">{description}</p>
          </div>
          }
      </div>
    </div>
  )
}



export default Emoji