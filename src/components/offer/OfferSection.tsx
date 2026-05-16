import clsx from "clsx";
import { Button } from "../button/Button";
import styles from "./OfferSection.module.scss";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "../../hooks/useLocalstorage";
import { useEffect } from "react";

interface IForm {
  email: string;
  fullName: string;
  message: string;
}

type IOfferUsers = {
  email: string;
};

export function OfferSection() {
  const { value, handleSetValue } = useLocalStorage<IOfferUsers>("IOfferUsers");
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>({
    mode: "onChange",
  });

  const onSubmit = (data: IForm) => {
    const newValue: IOfferUsers = { email: data.email };
    handleSetValue(newValue);
    alert("Your message is sent!");
  };

  useEffect(() => {
    if (value?.email) setValue("email", value?.email);
  }, [value?.email]);

  const validateName = (value: string) => {
    //да, я забыл флаг для regex чтобы он брал только числа не проверял наличие
    const nums = Array(10)
      .fill(null)
      .map((_, i) => i.toString());

    return value.split("").some((i) => nums.includes(i))
      ? "Name can contain only letters!"
      : true;
  };

  return (
    <section className={clsx("offer", styles.wrapper)}>
      <div className="offer__title">
        Get <span className="text_accent">20% Off</span> on <br />
        first Purchase
      </div>
      <form className="offer__form">
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        {value?.email && <p>Wellcome back! Your email is:</p>}
        <input
          {...control.register("email", { required: "Email is required" })}
          type="email"
          placeholder="your email address"
        />
        {errors.fullName && (
          <p className={styles.error}>{errors.fullName.message}</p>
        )}
        <input
          {...control.register("fullName", {
            required: "Name is required",
            validate: (v) => validateName(v),
          })}
          type="text"
          placeholder="your Full Name"
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
        <input
          {...control.register("message", { required: "Message is required" })}
          type="text"
          placeholder="Message"
        />
        <Button onClick={handleSubmit(onSubmit)} variant="dark">
          Send Message
        </Button>
      </form>
    </section>
  );
}
