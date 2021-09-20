export default function DogLike({
  avatarURL,
  userName,
  createdAt,
  imageURL,
  likes,
  dogName,
  quote,
  location,
}) {
  return (
    <div>
      <div className="rounded overflow-hidden border-2 hover:shadow-lg">
        <div className="py-4 flex items-center">
          <div>
            <img className="rounded-full w-16 sm:w-12" src={avatarURL} />
          </div>
          <div className="ml-4">
            <p className="font-bold">{userName}</p>
          </div>

          <p className="ml-24 sm:ml-48">{createdAt}</p>
        </div>
        <img src={imageURL} alt={dogName} className="w-full" />
        <div className="px-6 py-4">
          <div className="font-mono font-bold text-2xl mb-1">{dogName}</div>
          <blockquote className="italic text-gray-500 text-base">
            {quote}
          </blockquote>
          <p className="text-sm font-sans mt-2 text-yellow-600">{location}</p>
        </div>
      </div>
    </div>
  );
}
