import React, { useState } from "react";
import "./AddProfileForm.css";

export default function AddProfileForm({ mode, onAddProfile }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [bio, setBio] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
  }

  function validate() {
    const next = {};

    if (name.trim().length < 2) next.name = "Name must be at least 2 characters.";
    if (!isValidEmail(email)) next.email = "Please enter a valid email address.";
    if (title.trim().length < 2) next.title = "Title must be at least 2 characters.";
    if (bio.trim().length < 10) next.bio = "Bio must be at least 10 characters.";

    if (!imageFile) {
      next.image = "Please upload an image file.";
    } else {
      const isImage = imageFile.type.startsWith("image/");
      const maxBytes = 3 * 1024 * 1024;
      if (!isImage) next.image = "File must be an image (png, jpg, gif, webp).";
      else if (imageFile.size > maxBytes) next.image = "Image must be under 3MB.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess("");

    if (!validate()) return;

    const imageSrc = URL.createObjectURL(imageFile);

    onAddProfile({
      name: name.trim(),
      email: email.trim(),
      title: title.trim(),
      bio: bio.trim(),
      imageSrc,
      isFeatured: false,
    });

    setName("");
    setEmail("");
    setTitle("");
    setBio("");
    setImageFile(null);
    setErrors({});
    setSuccess("Profile added successfully!");
  }

  const formClass = mode === "dark" ? "form form--dark" : "form";

  return (
    <form className={formClass} onSubmit={handleSubmit}>
      <div className="form__header">
        <h3 className="form__title">Add Profile</h3>
        {success && <div className="form__success">{success}</div>}
      </div>

      <div className="grid">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            className="field__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          {errors.name && <span className="field__error">{errors.name}</span>}
        </label>

        <label className="field">
          <span className="field__label">Email</span>
          <input
            className="field__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
          {errors.email && <span className="field__error">{errors.email}</span>}
        </label>

        <label className="field">
          <span className="field__label">Title</span>
          <input
            className="field__input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
          />
          {errors.title && <span className="field__error">{errors.title}</span>}
        </label>

        <label className="field">
          <span className="field__label">Image Upload</span>
          <input
            className="field__input"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
          />
          {errors.image && <span className="field__error">{errors.image}</span>}
        </label>

        <label className="field field--full">
          <span className="field__label">Bio</span>
          <textarea
            className="field__input field__textarea"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
          />
          {errors.bio && <span className="field__error">{errors.bio}</span>}
        </label>
      </div>

      <div className="form__actions">
        <button className="form__button" type="submit">
          Add Profile
        </button>
      </div>
    </form>
  );
}
