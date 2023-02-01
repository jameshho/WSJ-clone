import React, { useEffect, useState } from 'react'
import { ref, getDownloadURL } from 'firebase/storage';
import { storage ,db} from '../firebase';
import { doc,getDoc } from 'firebase/firestore';


const TestShowArticle = () => {
    const [singleArticle, setSingleArticle] = useState({})

    // const docRef = doc(db,'article','QRQ2x9enmI4LHl86Ni8w')
    // getDoc (docRef).then((doc)=>{
    //     console.log(doc.data(),doc.id)
    // })
    //try given id, pass in article
    const code = "QRQ2x9enmI4LHl86Ni8w"
    const [imageURL, setImageURL] = useState(null)


  
//testing area

async function fetchArticle(articleId) {
    try {
        const docRef = doc(db, 'article', articleId)
        const data = await getDoc(docRef)
        const finalSingle = data.data()
        setSingleArticle(finalSingle)

        const imageURL = await getDownloadURL(ref(storage, `articleImages/${finalSingle.img}`))
        setImageURL(imageURL)
    } catch (e) {
        console.error('Error fetching article: ', e)
    }
}


useEffect(() => {
    fetchArticle( 'QRQ2x9enmI4LHl86Ni8w')


}, [])



//fetch article and get the url of the article

//ending area



    if (!singleArticle) return (<div>Loading</div>)
    const { img, department, title, snippet, writer, date, context } = singleArticle
    return (
        <div>
            <p>{title}</p>
            <p>Hello</p>
        

            <img src={imageURL} />
        </div>
    )
}

export default TestShowArticle