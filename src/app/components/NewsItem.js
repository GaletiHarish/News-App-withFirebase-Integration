import firebase from '../firebase';

const NewsItem = ({ article }) => {
  const user = firebase.auth().currentUser;
  const isFavorite = user ? !!user.favorites[article.id] : false;

  const toggleFavorite = async () => {
    if (isFavorite) {
      await firebase
        .firestore()
        .collection('favorites')
        .doc(user.uid)
        .update({
          [article.id]: firebase.firestore.FieldValue.delete(),
        });
    } else {
      await firebase
        .firestore()
        .collection('favorites')
        .doc(user.uid)
        .update({
          [article.id]: true,
        });
    }
  };

  return (
    <div className="news-item">
      <h3>{article.title}</h3>
      <p>{article.description}</p>
      <button onClick={toggleFavorite} className={`heart-icon ${isFavorite ? 'active' : ''}`}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default NewsItem;
