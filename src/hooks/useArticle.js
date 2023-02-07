import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

export function useArticle(articleId) {
    const [singleArticle, setSingleArticle] = useState({});
    const [imageURL, setImageURL] = useState(null);

    useEffect(() => {
        async function fetchArticle() {
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

        fetchArticle(articleId);
    }, [articleId]);

    return { singleArticle, imageURL };
}
