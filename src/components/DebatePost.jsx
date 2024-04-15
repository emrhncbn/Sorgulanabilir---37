import { useState } from 'react'
import PostComments from './PostComments'
import PostContent from './PostContent'
import postData from '../postData'

export default function DebatePost() {
  /* Challenge 

Form çalışmıyor. Göreviniz, kullanıcı "Gönder "e tıkladığında gönderiye bir yorum ekleyen kontrollü bir form yapmaktır.

    1. Yorum, yorum dizisinin alt kısmında, girilen kullanıcı adı ve yorum metni önceki yorumlar gibi görüntülenecek şekilde görünmelidir. 
       
    2. Yorum, önceki yorumların verilerini içeren array'e eklenmelidir. 
    
    3. Girilen kullanıcı adı kaydedilmeli, ancak kullanıcı onay kutusunu işaretlerse "AnonimKullanıcı" olarak görünmelidir.
    
    4. Kullanıcı formu göndermek için text input elemanına ve comment box elemanına metin girmek zorunda olmalı ve kullanıcı bir yorum gönderdikten sonra elemanlar ve onay kutusu temizlenmelidir. Sayfa yüklendiğinde de boş olmalıdırlar.   
        
    5. Kodunuz tamamen bu dosyanın içinde yer alabilir, ancak isterseniz bazı kısımları taşıyabilirsiniz. 

*/
const [userName, setUserName] = useState('')
const [commentText, setCommentText] = useState('')
const [isAnonymous, setIsAnonymous] = useState(false)
const [userNameError, setUserNameError] = useState('')
const [commentError, setCommentError] = useState('')

const handleUserNameChange = (event) => {
  setUserName(event.target.value)
  setUserNameError('')
}

const handleCommentTextChange = (event) => {
  setCommentText(event.target.value)
  setCommentError('')
}

const handleAnonymousChange = (event) => {
  setIsAnonymous(event.target.checked)
}

const handleSubmit = (event) => {
  event.preventDefault()
  const newComment = {
    userName: isAnonymous ? 'AnonimKullanıcı' : userName,
    commentText: commentText,
  }
  setComments([...comments, newComment]);
  // Form verilerini temizle
  setUserName('')
  setCommentText('')
  setIsAnonymous(false)
}

  const [comments, setComments] = useState(postData.comments)
  
  return (
    <div className='post-container'>
      <PostContent data={{ ...postData }} />
      <PostComments data={comments} />
      <form onSubmit={handleSubmit}>
        <input
          className='text-input'
          type='text'
          placeholder='Kullanıcı adı girin.'
          value={userName}
          onChange={handleUserNameChange}
          required
        />
        <textarea
          placeholder='Ne düşünüyorsunuz?'
          value={commentText}
          onChange={handleCommentTextChange}
          required />
        <label>
          <input
          className='checkbox'
          type='checkbox'
          checked={isAnonymous}
          onChange={handleAnonymousChange} />
          İsimsiz mi göndereyim?
        </label>
        <button>Gönder</button>
      </form>
    </div>
  )
}
