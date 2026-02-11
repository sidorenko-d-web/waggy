import { Button } from "../button/Button";

export function OfferSection() {
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };
  return (
    <section className="offer">
      <div className="offer__title">
        Get <span className="text_accent">20% Off</span> on <br />
        first Purchase
      </div>
      <form className="offer__form">
        <input type="email" placeholder="your email address" />
        <input type="text" placeholder="your Full Name" />
        <input type="text" placeholder="Message" />
        <Button onClick={handleSubmit} variant="dark">
          Send Message
        </Button>
      </form>
    </section>
  );
}
