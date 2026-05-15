


export default function StarRating({
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