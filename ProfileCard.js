import avatar from "../assets/anel_photo.jpg";

function ProfileCard({ name, profession, description }) {
  if (!name || !profession || !description) {
    return (
      <section className="card profile profile--error">
        <p className="profile__error">
          Profile information is incomplete.
        </p>
      </section>
    );
  }

  return (
    <section className="card profile">
      <img
        className="profile__avatar"
        src={avatar}
        alt={`${name} profile avatar`}
      />

      <div className="profile__content">
        <h2 className="profile__name">{name}</h2>
        <p className="profile__profession">{profession}</p>

        <div className="profile__meta">
          <span className="badge">📍 Almaty</span>
          <span className="badge">💻 Front-end</span>
        </div>

        <p className="profile__description">{description}</p>
      </div>
    </section>
  );
}

export default ProfileCard;
