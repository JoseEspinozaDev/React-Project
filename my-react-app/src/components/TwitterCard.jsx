import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
 
function TwitterCard({ avatar, name, userName, initialisFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialisFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const colorButton = isFollowing ? "btn-secondary" : "btn-primary";

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
    toast.success(
      !isFollowing
        ? `Has seguido a ${name}!`
        : `Has dejado de seguir a ${name}!`
    );
  };

  return (
    <>
      <Toaster position="right-top" reverseOrder={false} />

      <article className="card shadow-sm rounded p-3 d-flex align-items-center justify-content-between flex-row mt-3 hover-bg">
        <div className="d-flex align-items-center">
          <img
            src={avatar}
            alt={`${name} avatar`}
            className="rounded-circle me-3"
            width="60"
            height="60"
          />
          <div>
            <h6 className="mb-0 fw-bold">{name}</h6>
            <small className="text-muted">@{userName}</small>
          </div>
        </div>

        <div>
          <button
            onClick={handleFollow}
            className={`btn btn-sm rounded-pill fw-semibold px-3 follow-btn ${colorButton} ${
              isFollowing ? "is-following" : ""
            }`}>
            <span className="follow-text">{text}</span>
            <span className="unfollow-text">Dejar de seguir</span>
          </button>
        </div>
      </article>
    </>
  );
}

export default TwitterCard;
