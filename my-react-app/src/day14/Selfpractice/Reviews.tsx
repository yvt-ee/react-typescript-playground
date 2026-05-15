import { useState } from "react";

export default function GoogleReview() {
  const [review, setReview] = useState({
    Star_Rating: "",
    Food_Rating: "",
    Service_Rating: "",
    Atmosphere_Rating: "",
    Comment: "",
    Cost_Per_Person: "",
    Vegetarian_Options: false,
    Parking: false,
    Wheelchair: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target;

    const newValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

    setReview((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const NewError: { [key: string]: string } = {};

    if (review.Comment.split(/\s+/).length < 10) {
      NewError.Comment = "Write a longer comment";
    }

    setErrors(NewError);

    if (Object.keys(NewError).length === 0) {
      setIsSubmitted(true);
    }
  };

  function StarRating({
    value,
    onChange,
    label,
  }: {
    value: string;
    onChange: (value: string) => void;
    label:string;
  }) {
    return (
      <div>
        <label>{label}</label>
        <>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(String(star))}
          >
            {star <= Number(value) ? "★" : "☆"}
          </button>
        ))}
        </>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <div>
        <h1>Review submitted successfully!</h1>
        <p>Thank you for your review.</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Leave a review</h3>
      <form onSubmit={handleSubmit} data-testid="review-form">
        <StarRating
          label="Star Rating"
          value={review.Star_Rating}
          onChange={(value) =>
            setReview((prev) => ({
              ...prev,
              Star_Rating: value,
            }))
          }
        />
        <StarRating
          label="Food Rating"
          value={review.Food_Rating}
          onChange={(value) =>
            setReview((prev) => ({
              ...prev,
              Food_Rating: value,
            }))
          }
        />
        <StarRating
          label="Service Rating"
          value={review.Service_Rating}
          onChange={(value) =>
            setReview((prev) => ({
              ...prev,
              Service_Rating: value,
            }))
          }
        />
        <StarRating
          label="Atmosphere Rating"
          value={review.Atmosphere_Rating}
          onChange={(value) =>
            setReview((prev) => ({
              ...prev,
              Atmosphere_Rating: value,
            }))
          }
        />
        <label>Comment:</label>
        <textarea
          id="Comment"
          name="Comment"
          value={review.Comment}
          onChange={handleChange}
        />
        {errors.Comment && <p style={{ color: "red" }}>{errors.Comment}</p>}
        <label>Cost Per Person</label>
        <select
          name="Cost_Per_Person"
          value={review.Cost_Per_Person}
          onChange={handleChange}
        >
          <option value="0-10">0-10</option>
          <option value="11-20">11-20</option>
          <option value="21-30">21-30</option>
          <option value="31-40">31-40</option>
          <option value="41-50">41-50</option>
          <option value="51-60">51-60</option>
          <option value="60">60+</option>
        </select>
        <label>
          <input
            type="checkbox"
            name="Vegetarian_Options"
            checked={review.Vegetarian_Options}
            onChange={handleChange}
          />
          Vegetarian Options
        </label>
        <label>
          <input
            type="checkbox"
            name="Parking"
            checked={review.Parking}
            onChange={handleChange}
          />
          Parking
        </label>
        <label>
          <input
            type="checkbox"
            name="Wheelchair"
            checked={review.Wheelchair}
            onChange={handleChange}
          />
          Wheelchair
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
