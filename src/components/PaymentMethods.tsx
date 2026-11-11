import Image from "next/image";

export default function PaymentMethods() {
  return (
    <figure className="payment-methods">
      <figcaption>Payment methods</figcaption>
      <Image
        src="/images/brand/payment-methods.png"
        alt="Visa, Mastercard, PayPal and American Express"
        width={672}
        height={134}
        sizes="(max-width: 360px) 90vw, 300px"
      />
    </figure>
  );
}
